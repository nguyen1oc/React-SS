function List(props){
    // const fruits = [{id: 1,name: "apple", calories: 95}, 
    //     {id:2,name: "banna", calories: 45}, 
    //     {id:3,name: "orange", calories: 105}, 
    //     {id:4, name: "coconut", calories: 159}];
    //fruits.sort((b,a) => a.name.localeCompare(b.name));
    //fruits.sort((a,b)=> a.calories - b.calories);

    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    const ItemList = props.itemts;
    const category = props.category;
    const listItems = ItemList.map(fruit => <li key ={ItemList.key}>{ItemList.name}: &nbsp;
    <b>{ItemList.calories}</b></li>);
    return (<>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
            </>
    );
}export default List