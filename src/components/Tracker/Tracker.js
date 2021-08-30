import React, {Component} from 'react'
import fire from '../../config/Fire'
import './Tracker.css'
import Transaction from '../Transaction/Transaction'

class Tracker extends Component{


     state={
         transactions:[],
         money:0,
         transactionName: '',
         transactionType: '',
         price: '',
         currentUID: fire.auth().currentUser.uid
     }
    // logout
    logout = () => {
        fire.auth().signOut();
    }

    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value !== "0" ? e.target.value : ""
        });
    }

    //important method for core logic of the application
    // calculate transaction
    addNewTransaction = () =>{
        const {
            transactionName,
            transactionType,
            price,
            currentUID,
            money
        } = this.state;
        //validation 
        if(transactionName && transactionType && price){
            const BackUpState = this.state.transactions;
            BackUpState.push({
                id: BackUpState.length +1,
                name: transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            });
            fire.database().ref('Transactions/'+currentUID).push({
                id: BackUpState.length,
                name:transactionName,
                type: transactionType,
                price: price,
                user_id: currentUID
            }).then((data) => {
                ///success callback
                console.log('success callback');
                this.setState({
                    transactions: BackUpState,
                    money: transactionType === 'deposit' ? money + parseFloat(price) : money - parseFloat(price),
                    transactionName: '',
                    transactionType:'',
                    price:''
                })
            }).catch((error) => {
                console.log('error', error)
            });
        }

    }

    componentWillMount(){
        const { currentUID, money} = this.state;
        let totalMoney = money;
        const BackUpState = this.state.transactions;
        fire.database().ref('Transactions/' + currentUID).once('value',
        (snapshot) =>{
            // console.log(snapshot);
            snapshot.forEach((childSnapshot) =>{
                totalMoney =
                childSnapshot.val().type === 'deposit' ?
                parseFloat(childSnapshot.val().price) + totalMoney
                : totalMoney - parseFloat(childSnapshot.val().price);
                
                BackUpState.push({
                    id: childSnapshot.val().id,
                    name: childSnapshot.val().name,
                    type: childSnapshot.val().type,
                    price: childSnapshot.val().price,
                    user_id: childSnapshot.val().user_id,

                });
            });
            
            this.setState({
                transactions: BackUpState,
                money: totalMoney
            })
        })
    }
    render(){

        var currentUser = fire.auth().currentUser;
        return(
        <div className="trackerBlock">
            <div className="welcome">
                <span>Hi, {currentUser.displayName}!</span>
                <button className="exit" onClick={this.logout}>Exit</button>
            </div>
            <div className="totalMoney">₹{this.state.money}</div>
            <div className="newTransactionBlock">
                <div className="newTransaction">
                    <form>
                        <input 
                            placeholder="Transaction Name"
                            type="text"
                            name="transactionName"
                            value={this.state.transactionName}
                            onChange={this.handleChange('transactionName')}
                        />
                        <div className="inputGroup">
                            <select name="type"
                            value={this.state.transactionType}
                            onChange={this.handleChange('transactionType')}>
                                <option value="0">Type</option>
                                <option value="expense">Expense</option>
                                <option value="deposit">Deposit</option>
                            </select>
                            <input 
                                placeholder="Price"
                                type="text"
                                name="price"
                                value={this.state.price}
                            onChange={this.handleChange('price')}
                            />
                        </div>
                        {/* <button className="addTransaction"
                            onClick={() => this.addNewTransaction()}
                        >
                            + Add Transaction
                        </button> */}
                    </form>
                    <button className="addTransaction"
                            onClick={() => this.addNewTransaction()}
                        >
                            + Add Transaction
                        </button>
                </div>
            </div>
            <div className="latestTransactions">
                <p>Latest Transactions</p>
                <ul>
                    {
                        Object.keys(this.state.transactions).map((id) => (
                            <Transaction key={id}
                                type={this.state.transactions[id].type}
                                name={this.state.transactions[id].name}
                                price={this.state.transactions[id].price}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
        );
    }
}
export default Tracker;