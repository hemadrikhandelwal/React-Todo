import React, { Component } from 'react';
import Header from './Components/header';
import TodoInput from './Components/todoInput';
import TodoItem from './Components/todoItem';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
	super(props);

	this.state={
		todos:[
		{id:0,text:"Task1"},
		{id:1,text:"Tas2"},
		{id:2,text:"Task3"}
		],
		nextId:3
	}
	this.addTodo=this.addTodo.bind(this);
	this.removeTodo=this.removeTodo.bind(this);
}

	addTodo(todoText){
    //console.log("Todo added;", todoText);
    let todos=this.state.todos.slice();
    todos.push({id:this.state.nextId,text:todoText});
    this.setState({
      todos:todos,
      nextId:++this.state.nextId
    });

  }

  removeTodo(id){
    // console.log("removing;",id);
    this.setState({
      todos:this.state.todos.filter((todo,index)=>todo.id!==id)
    })
  }

  render() {
    return (
      <div>
     
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo}  />
          <ul>
          	{
          		this.state.todos.map((todo)=>{
          			return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
          		})
          	}
          </ul>
          
                  
      </div>
    );
  }
}

export default App;
