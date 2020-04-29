import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';
import Default from './Components/Default/Default';
import Modal from './Components/modal'

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Person from './Components/Persons/Person/person'
// import UserOutput from './Components/UserOutput/UserOutput';
// import UserInput from './Components/UserInput/UserInput';
// import ValidationComponent from './Components/ValidationComponents/ValidationComponents'
// import Char from './Components/Char/Char'
// import Layout from './Components/Layout/Layout';
// import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'
// import person from './Components/Persons/Person/person';


// project

class App extends Component {
  render() {
    return (
      //   <React.Fragment> work as a parent component

      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/' component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}
export default App;



//Burger App
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//           <p>Text</p>
//           <BurgerBuilder/>
//         </Layout>
//       </div>
//     )
//   }
// }


// export default App;


// example of props
// class App extends Component {
//   render(){
//     const style={
//       backgroundColor:"red"
//     }
//   return (
//     <div className="App">
//       <p style={style}>Hello</p>
//       <Person name="jyotsana" course="react" />
//       <Person name="jyotsana" course="react">My first tutorial</Person>
//     </div>
//   );
// }
// }
// export default App;


//example of state
// class App extends Component {
//   state={
//     person:[
//       {name:'sonu', course:'react'},
//       {name:'Sonam', course:'physio'},
//       {name:'Karuna', course:'hindi'}
//     ]
//   }
//   switchHandler=()=>{
//     this.setState({
//       person:[
//         {name:'Jyotsana', course:'Angular'},
//         {name:'Nidhi', course:'Angular'},
//         {name:'Mishra', course:'Angular'}

//       ]
//     })
//   }
//   render(){
//   return (
//     <div className="App">
//       <p>Hello</p>
//       <button onClick={this.switchHandler}>Switch Button</button>
//       <Person name={this.state.person[0].name} course={this.state.person[0].course} />
//       <Person name={this.state.person[1].name} course={this.state.person[1].course} />
//       <Person name={this.state.person[2].name} course={this.state.person[2].course} />
//       <Person name="jyotsana" course="react">My first tutorial</Person>
//     </div>
//   );
// }
// }
// export default App;




// example of useState()
// const App = props => {
//   // const [personState->current state, setPersonState-> function to change state] = useState({
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: 'sonu', course: 'react' },
//       { name: 'Sonam', course: 'physio' },
//       { name: 'Karuna', course: 'hindi' }
//     ]
//   });

//  const switchHandler = () => {
//     setPersonState({
//       person: [
//         { name: 'Jyotsana', course: 'Angular' },
//         { name: 'Nidhi', course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//   // render(){
//   return (
//     <div className="App">
//       <p>Hello</p>
//       <button onClick={switchHandler}>Switch Button</button>
//       <Person name={personState.person[0].name} course={personState.person[0].course} />
//       <Person name={personState.person[1].name} course={personState.person[1].course} />
//       <Person name={personState.person[2].name} course={personState.person[2].course} />
//       <Person name="jyotsana" course="react">My first tutorial</Person>
//     </div>
//   );
//   // }
// }
// export default App;


// two way binding
// class App extends Component {
//      state={
//     person: [
//       { name: 'sonu', course: 'react' },
//       { name: 'Sonam', course: 'physio' },
//       { name: 'Karuna', course: 'hindi' }
//     ]
//   }
//   // });

//   switchHandler = (myName) => {
//   this.setState({
//       person: [
//         { name: myName, course: 'Angular' },
//         { name: 'Nidhi', course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//    nameChangeHandler = (event) => {
//     this.setState({
//       person: [
//         { name: 'Jyotsana', course: 'Angular' },
//         { name: event.target.value, course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//   render(){
//   return (
//     <div className="App">
//       {/* <p>Hello</p> */}
//       <button onClick={()=> this.switchHandler('Jyotsana')}>Switch Button</button>
//       <Person name={this.state.person[0].name} course={this.state.person[0].course} />
//       <Person name={this.state.person[1].name} course={this.state.person[1].course} click={this.switchHandler.bind(this,'Max!!')} changed={this.nameChangeHandler} />
//       <Person name={this.state.person[2].name} course={this.state.person[2].course} />
//       {/* <Person name="jyotsana" course="react">My first tutorial</Person> */}
//     </div>
//   );
//   }
// }
// export default App;

// List and conditions
// class App extends Component {
//      state={
//     person: [
//       { name: 'sonu', course: 'react' },
//       { name: 'Sonam', course: 'physio' },
//       { name: 'Karuna', course: 'hindi' }
//     ]
//   }
//   // });

//   switchHandler = (myName) => {
//   this.setState({
//       person: [
//         { name: myName, course: 'Angular' },
//         { name: 'Nidhi', course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//    nameChangeHandler = (event) => {
//     this.setState({
//       person: [
//         { name: 'Jyotsana', course: 'Angular' },
//         { name: event.target.value, course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//   render(){
//   return (
//     <div className="App">
//       {/* <p>Hello</p> */}
//       <button onClick={()=> this.switchHandler('Jyotsana')}>Switch Button</button>
//       <Person name={this.state.person[0].name} course={this.state.person[0].course} />
//       <Person name={this.state.person[1].name} course={this.state.person[1].course} click={this.switchHandler.bind(this,'Max!!')} changed={this.nameChangeHandler} />
//       <Person name={this.state.person[2].name} course={this.state.person[2].course} />
//       {/* <Person name="jyotsana" course="react">My first tutorial</Person> */}
//     </div>
//   );
//   }
// }
// export default App;


//Assignment 1
// class App extends Component {
//   state={
//       username:"sonu"
//   }
//   inputHandler=(e)=>{
//     this.setState({username:e.target.value})
//   }
//   render(){
//     const style={
//       backgroundColor:"red"
//     }
//   return (
//     <div className="App">
//       <p style={style}>Hello</p>
//       {/* <Person name="jyotsana" course="react" />
//       <Person name="jyotsana" course="react">My first tutorial</Person> */}
//       <UserInput changed={this.inputHandler} currentName={this.state.username}/>
//       <UserOutput name={this.state.username}/>
//     </div>
//   );
// }
// }
// export default App;

//Conditional operator
// class App extends Component {
//     state={
//       person:[
//         {name:'sonu', course:'react'},
//         {name:'sonam', course:'angular'},
//         {name:'karuna', course:'vue'}
//       ],
//       showPerson:false

//     }
//     switchHandler=()=>{
//       this.setState({
//         person:[
//           {name:'Jyotsana', course:'C'},
//           {name:'Nidhi', course:'C++'},
//           {name:'Mishra', course:'Java'}
//         ],
//       })
//     }
//     nameChangeHandler = (event) => {
//           this.setState({
//             person: [
//               { name: 'Jyotsana', course: 'Angular' },
//               { name: event.target.value, course: 'Angular' },
//               { name: 'Mishra', course: 'Angular' }
//             ]
//           });
//         };
//     togglePersonHandler=()=>{
//       const doesShow= this.state.showPerson
//       this.setState({showPerson:!doesShow})
//     }


//     render(){
//     return (
//       <div className="App">
//         <p>Hello</p>
//         <button onClick={this.togglePersonHandler}>Switch Button</button>
//         {
//           this.state.showPerson===true?
//           <div>
//         <Person name={this.state.person[0].name} course={this.state.person[0].course} />
//         <Person name={this.state.person[1].name} course={this.state.person[1].course} click={this.switchHandler.bind(this,'Max!!')} changed={this.nameChangeHandler}  />
//         <Person name={this.state.person[2].name} course={this.state.person[2].course}  />
//         </div>:null
//         }

//         {/* <Person name="jyotsana" course="react">My first tutorial</Person> */}
//       </div>
//     );
//   }
//   }
// export default App

//conditional in js way
// class App extends Component {
//     state={
//       person:[
//         {name:'sonu', course:'react'},
//         {name:'sonam', course:'angular'},
//         {name:'karuna', course:'vue'}
//       ],
//       showPerson:false

//     }
//     switchHandler=()=>{
//       this.setState({
//         person:[
//           {name:'Jyotsana', course:'C'},
//           {name:'Nidhi', course:'C++'},
//           {name:'Mishra', course:'Java'}
//         ],
//       })
//     }
//     nameChangeHandler = (event) => {
//           this.setState({
//             person: [
//               { name: 'Jyotsana', course: 'Angular' },
//               { name: event.target.value, course: 'Angular' },
//               { name: 'Mishra', course: 'Angular' }
//             ]
//           });
//         };
//     togglePersonHandler=()=>{
//       const doesShow= this.state.showPerson
//       this.setState({showPerson:!doesShow})
//     }


//     render(){

//     let persons=null;
//     if(this.state.showPerson){
//       persons=
//       <div>
//       <Person name={this.state.person[0].name} course={this.state.person[0].course} />
//       <Person name={this.state.person[1].name} course={this.state.person[1].course} click={this.switchHandler.bind(this,'Max!!')} changed={this.nameChangeHandler}  />
//       <Person name={this.state.person[2].name} course={this.state.person[2].course}  />
//       </div>
//     }
//     return (
//       <div className="App">
//         <p>Hello</p>
//         <button onClick={this.togglePersonHandler}>Switch Button</button>
//         {persons}
//         {/* <Person name="jyotsana" course="react">My first tutorial</Person> */}
//       </div>
//     );
//   }
//   }
// export default App

//For Loop
// class App extends Component {
//   state = {
//     person: [
//       { name: 'sonu', course: 'react' },
//       { name: 'sonam', course: 'angular' },
//       { name: 'karuna', course: 'vue' }
//     ],
//     showPerson: false

//   }
//   switchHandler = () => {
//     this.setState({
//       person: [
//         { name: 'Jyotsana', course: 'C' },
//         { name: 'Nidhi', course: 'C++' },
//         { name: 'Mishra', course: 'Java' }
//       ],
//     })
//   }

//   deletePersonHandler=(personIndex)=>{
// const persons=this.state.persons;
// persons.splice(personIndex,1);
// this.setState({persons:persons})
//   }
//   nameChangeHandler = (event) => {
//     this.setState({
//       person: [
//         { name: 'Jyotsana', course: 'Angular' },
//         { name: event.target.value, course: 'Angular' },
//         { name: 'Mishra', course: 'Angular' }
//       ]
//     });
//   };
//   togglePersonHandler = () => {
//     const doesShow = this.state.showPerson
//     this.setState({ showPerson: !doesShow })
//   }


//   render() {

//     let persons = null;

//     if (this.state.showPerson) {
//       persons = (
//         <div>
//           {this.state.persons.map((person,index)=>{
//             return <Person name={person.name} course={person.course} click={()=>this.deletePersonHandler(index)} />
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <p>Hello</p>
//         <button onClick={this.togglePersonHandler}>Switch Button</button>
//         {/* {persons} */}
//         {/* <Person name="jyotsana" course="react">My first tutorial</Person> */}
//       </div>

//     );
//   }
// }
// export default App;

//Assignment 2 Lists and components
// class App extends Component {
//   state = {
//     username: ''
//   }
//   inputChangeHandler = (events) => {
//     this.setState({ username: events.target.value })
//   }

//   deleteCharHandler =(index)=>{
//     const text=this.state.username.split('');
//     text.splice(index,1);
//     const updatedText=text.join('');
//     this.setState({username:updatedText})


//   }
//   render() {
//     const charlist= this.state.username.split('').map((ch,index)=>{
//       return <Char character={ch} key={index} clicked={()=>{this.deleteCharHandler(index)}}/>
//     })
//     return (
//       <div className="App">
//         <input type="text" onChange={this.inputChangeHandler} value={this.state.username} />
//         <p>{this.state.username}</p>
//         <ValidationComponent inputLength={this.state.username.length}/>
//         {charlist}
//       </div>
//     )
//   }
// }
// export default App;
//Burger App



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit react <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


