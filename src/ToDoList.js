import {Component} from "react";
import check from './check.jpg'
export class ToDoList extends Component {
     
    state = {
        userInput:'',
        toDoList : []
    }
onChangeEvent(e){
    this.setState ({userInput: e});
}
addItem(input) {
    if (input==='') {
    alert ("Please, enter an item")   
    } else {
    let ListArray = this.state.toDoList;
    ListArray.push(input);
    this.setState ({toDoList: ListArray, userInput: ''})}}
crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}
deleteItem() {
    let ListArray=this.state.toDoList;
    ListArray = [];
    this.setState({toDoList: ListArray})
}
onFormSubmit(e) {
    e.preventDefault()
}
    render () {
        return (
<div>
    <form on onSubmit={this.onFormSubmit}>
    <div className="container">
<input type='text' placeholder="What do you want to do?"
onChange = {(e) => {this.onChangeEvent (e.target.value) }} 
value= {this.state.userInput}/>
</div>
<div className="container">
<button onClick={()=> this.addItem( this.state.userInput)} className="btn add">
    ADD</button>
</div>
<ul> 
    {this.state.toDoList.map((item, index)=>(
    <li onClick={this.crossedWord} key={index}>
    <img src={check} width="20px" alt="check"/>{item}</li>))} 
</ul>
<div className="container">
<button onClick={()=>this.deleteItem()} className="btn del">DELETE</button>
</div>
</form></div>
        )
        }  
}