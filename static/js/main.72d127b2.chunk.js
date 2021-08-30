(this.webpackJsonpxbudget=this.webpackJsonpxbudget||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),r=a(19),i=a.n(r),c=(a(25),a(26),a(9)),o=a(10),l=a(12),u=a(11),h=(a(27),a(20).a.initializeApp({apiKey:"AIzaSyBspJ8e7lUlKCXdlRjZWcYA12BJqN4E4uU",authDomain:"expense-tracker-69b95.firebaseapp.com",projectId:"expense-tracker-69b95",storageBucket:"expense-tracker-69b95.appspot.com",messagingSenderId:"730512016390",appId:"1:730512016390:web:0b7d11e9004046cab7ef87",measurementId:"G-6LPWK2L3BQ"})),d=a(14),p=(a(18),a(2)),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",fireErrors:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.login=function(t){t.preventDefault(),h.auth().signInWithEmailAndPassword(e.state.email,e.state.password).catch((function(t){e.setState({fireErrors:t.message})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fireErrors?Object(p.jsx)("div",{className:"Error",children:this.state.fireErrors}):null;return Object(p.jsxs)(p.Fragment,{children:[e,Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"}),Object(p.jsx)("input",{type:"password",className:"regField",placeholder:"Password",value:this.state.password,onChange:this.handleChange,name:"password"}),Object(p.jsx)("input",{onClick:this.login,type:"submit",className:"submitBtn",value:"ENTER"})]})]})}}]),a}(n.Component),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",displayName:"",fireErrors:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.register=function(t){t.preventDefault(),h.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){h.auth().currentUser.updateProfile({displayName:e.state.displayName})})).catch((function(t){e.setState({fireErrors:t.message})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fireErrors?Object(p.jsx)("div",{className:"Error",children:this.state.fireErrors}):null;return Object(p.jsxs)(p.Fragment,{children:[e,Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",className:"regField",placeholder:"Your Name",onChange:this.handleChange,value:this.state.displayName,name:"displayName"}),Object(p.jsx)("input",{type:"text",className:"regField",placeholder:"Email",onChange:this.handleChange,value:this.state.email,name:"email"}),Object(p.jsx)("input",{type:"password",className:"regField",placeholder:"Password",onChange:this.handleChange,value:this.state.password,name:"password"}),Object(p.jsx)("input",{onClick:this.register,type:"submit",className:"submitBtn",value:"REGISTER"})]})]})}}]),a}(n.Component),b=(a(33),function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:"deposit"===e.type?Object(p.jsxs)("span",{className:"deposit",children:["+",e.price]}):Object(p.jsxs)("span",{className:"expense",children:["-",e.price]})})]})}),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={transactions:[],money:0,transactionName:"",transactionType:"",price:"",currentUID:h.auth().currentUser.uid},e.logout=function(){h.auth().signOut()},e.handleChange=function(t){return function(a){e.setState(Object(d.a)({},t,"0"!==a.target.value?a.target.value:""))}},e.addNewTransaction=function(){var t=e.state,a=t.transactionName,n=t.transactionType,s=t.price,r=t.currentUID,i=t.money;if(a&&n&&s){var c=e.state.transactions;c.push({id:c.length+1,name:a,type:n,price:s,user_id:r}),h.database().ref("Transactions/"+r).push({id:c.length,name:a,type:n,price:s,user_id:r}).then((function(t){console.log("success callback"),e.setState({transactions:c,money:"deposit"===n?i+parseFloat(s):i-parseFloat(s),transactionName:"",transactionType:"",price:""})})).catch((function(e){console.log("error",e)}))}},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.state,a=t.currentUID,n=t.money,s=this.state.transactions;h.database().ref("Transactions/"+a).once("value",(function(t){t.forEach((function(e){n="deposit"===e.val().type?parseFloat(e.val().price)+n:n-parseFloat(e.val().price),s.push({id:e.val().id,name:e.val().name,type:e.val().type,price:e.val().price,user_id:e.val().user_id})})),e.setState({transactions:s,money:n})}))}},{key:"render",value:function(){var e=this,t=h.auth().currentUser;return Object(p.jsxs)("div",{className:"trackerBlock",children:[Object(p.jsxs)("div",{className:"welcome",children:[Object(p.jsxs)("span",{children:["Hi, ",t.displayName,"!"]}),Object(p.jsx)("button",{className:"exit",onClick:this.logout,children:"Exit"})]}),Object(p.jsxs)("div",{className:"totalMoney",children:["$",this.state.money]}),Object(p.jsx)("div",{className:"newTransactionBlock",children:Object(p.jsxs)("div",{className:"newTransaction",children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{placeholder:"Transaction Name",type:"text",name:"transactionName",value:this.state.transactionName,onChange:this.handleChange("transactionName")}),Object(p.jsxs)("div",{className:"inputGroup",children:[Object(p.jsxs)("select",{name:"type",value:this.state.transactionType,onChange:this.handleChange("transactionType"),children:[Object(p.jsx)("option",{value:"0",children:"Type"}),Object(p.jsx)("option",{value:"expense",children:"Expense"}),Object(p.jsx)("option",{value:"deposit",children:"Deposit"})]}),Object(p.jsx)("input",{placeholder:"Price",type:"text",name:"price",value:this.state.price,onChange:this.handleChange("price")})]})]}),Object(p.jsx)("button",{className:"addTransaction",onClick:function(){return e.addNewTransaction()},children:"+ Add Transaction"})]})}),Object(p.jsxs)("div",{className:"latestTransactions",children:[Object(p.jsx)("p",{children:"Latest Transactions"}),Object(p.jsx)("ul",{children:Object.keys(this.state.transactions).map((function(t){return Object(p.jsx)(b,{type:e.state.transactions[t].type,name:e.state.transactions[t].name,price:e.state.transactions[t].price},t)}))})]})]})}}]),a}(n.Component),O=a.p+"static/media/loader.1bcd0c30.gif",v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:1,loading:!0,formSwitcher:!1},e.formSwitcher=function(t){console.log(t),e.setState({formSwitcher:"register"===t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){var e=this,t=this.state.formSwitcher?Object(p.jsx)(m,{}):Object(p.jsx)(j,{});return 1===this.state.user?Object(p.jsx)("div",{className:"mainBlock",children:Object(p.jsx)("div",{className:"Spinner",children:Object(p.jsx)("img",{src:O,alt:"Spinner",className:"ImgSpinner"})})}):Object(p.jsx)(p.Fragment,{children:this.state.user?Object(p.jsx)(f,{}):Object(p.jsxs)("div",{className:"mainBlock",children:[t,this.state.formSwitcher?Object(p.jsxs)("span",{className:"underLine",children:["Have an acount? ",Object(p.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Sign in here"})]}):Object(p.jsxs)("span",{className:"underLine",children:["Not Registered? ",Object(p.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Create an account"})]})]})})}}]),a}(n.Component);var g=function(){return Object(p.jsx)(v,{})};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.72d127b2.chunk.js.map