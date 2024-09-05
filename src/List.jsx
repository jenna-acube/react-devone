// function List(){
//     const fruits=["apple","orange","banana","cocunut","pineapple"];
//     const listItems= fruits.map(fruit => <li>{fruit}</li>);
//     return(<ul>{listItems}</ul>);
// }
// export default List



// next method:
// function List(){
//     const fruits=[{id:1, name:"apple", calories: 95},
//                   {id:2, name:"orange", calories: 80},
//                   {id:3, name:"banana", calories: 50},
//                   {id:4, name:"cocunut", calories: 89},
//                   {id:5, name:"pineapple", calories: 93}];
                  
    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical
    // fruits.sort((a,b)=> a.calories-b.calories);//numeric
    // fruits.sort((a,b)=> b.calories-a.calories);//reverse numeric
    

    // const lowCalFruit = fruits.filter(fruit=>fruit.calories<90);
    // const listItems= lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
    //     {lowCalFruit.name}: &nbsp; 
    //     <b>{lowCalFruit.calories}</b></li>);


    // const highCalFruit = fruits.filter(fruit=>fruit.calories>90);
    // const listItems= highCalFruit.map(highCalFruit => <li key={highCalFruit.id}>
    //     {highCalFruit.name}: &nbsp; 
    //     <b>{highCalFruit.calories}</b></li>);


//     const listItems= fruits.map(fruit => <li key={fruit.id}>
//                                             {fruit.name}: &nbsp; 
//                                             <b>{fruit.calories}</b></li>);                                   
//     return(<ul>{listItems}</ul>);
// }
// export default List



// next method:
import PropTypes from 'prop-types'
function List(props){

    const category=props.category;
    const itemList=props.items;
    const listItems= itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp; 
                                          <b>{item.calories}</b></li>);
    return(<><h3 className="list-category">{category}</h3>
             <ol className="list-items">{listItems}</ol></>);
}
List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              name:PropTypes.string,
                                              calories:PropTypes.number})),
}
List.defaultProps={  
    category:"Category",
    items: [],
}               
export default List