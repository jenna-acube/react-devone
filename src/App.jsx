// first basics components
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// function App() {
//    return(
//     <>
//     <Header/>
//     <Food/>
//     <Footer/>
//     </>
    
//    );
// }
// export default App


// -----------------------------------------------------------------------------


// card components:
// import Card from './Card'
// function App(){
//   return(
//     <>
//     <Card/>
    
//     </>
//   );
// }
// export default App


// ---------------------------------------------------------------------------------------------

// how to style react components with css
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1.EXTERNAL
// 2.MODULES
// 3.INLINE

// ------------------------------------------
// EXTERNAL:
// import Button from './Button/Button.jsx'
// function App(){
//   return(<>
//     <Button/>
//   </>);
// }
// export default App

// ------------------------------------------
// MODULES & INLINE:
// import Button from './Button/Button.jsx'

// function App() {
//   return (
//     <>
//       <Button/>
//     </>
//   );
// }

// export default App


// ------------------------------------------------------------------------
// props:
// import Student from './Student.jsx'
// function App(){
//   return(
//     <>
//         <Student name= " Jenna" age={ 22} isStudent={true}/>
//         <Student name= " Fathima" age={ 23} isStudent={false}/>
//         <Student name= " Ansil" age={ 23} isStudent={false}/>
//         <Student name= " Ayisha" age={ 27} isStudent={true}/>
//         <Student/>
//     </> 
//   );
// }

// export default App



// -------------------------------------------------------------------------------
// conditional rendering:
// import UserGreeting from './UserGreeting.jsx'
// function App(){
//   return(
//       <>
//         <UserGreeting isLoggedIn={true} username="jenna"/>
//       </>
//   );
// }
// export default App


// --------------------------------------------------------------------------------------
// -----------------reder lists:---------------------
// first method:
// import List from './List.jsx'
// function App(){
//   return(
//     <>
//       <List/>
//     </>
//   );
// }
// export default App

// next method:
// import List from './List.jsx'
// function App(){
//   const fruits=[{id:1, name:"apple", calories: 95},
//                 {id:2, name:"orange", calories: 80},
//                 {id:3, name:"banana", calories: 50},
//                 {id:4, name:"cocunut", calories: 89},
//                 {id:5, name:"pineapple", calories: 93}];
//   const vegetables=[{id:1, name:"cabbage", calories: 95},
//                     {id:2, name:"onion", calories: 80},
//                     {id:3, name:"tomato", calories: 50},
//                     {id:4, name:"potato", calories: 89},
//                     {id:5, name:"bringal", calories: 93}];
//   return(<> 
//         {fruits.length> 0 && <List items={fruits} category="Fruits"/>}
//         {vegetables.length> 0 && <List items={vegetables} category="vegetables"/>}
//         </>);
// }
// export default App



// -----------------------------------------------------------------------------------------
// click events:

// import Button from './Button.jsx'
// import ProfilePicture from './ProfilePicture.jsx'
// function App(){

//   return(<>
//       <ProfilePicture/>
//   </>);

// }
// export default App



// ----------------------------------------------------------------------------------------------------
// useState()hook

// import MyComponent from './MyComponent'
// function App(){
//   return(
//     <MyComponent/>
//   );

// }
// export default App

// counter:
// import Counter from './Counter.jsx';
// function App(){
//   return(
//     <Counter/>
//   );

// }
// export default App



// -------------------------------------------------------------------------------------------------
// onChange event handler:
// import MyComponents from './MyComponents'
// function App(){
//   return(
//     <MyComponents/>
//   );
// }
// export default App





// -------------------------------------------------------------------------------------------------
// ColorPicker App:
import ColorPicker from './ColorPicker.jsx';
function App(){

}
export default App