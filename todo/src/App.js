import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
//import uuid from "uuid";
import {v1 as uuid} from "uuid"; 
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
   state = {
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }

  handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit= e =>{
    e.preventDefault();
    

    const newItem = {
      id:this.state.id,
      title:this.state.item
      

    };

    

    const updateItem = [...this.state.items, newItem];

    this.setState({
      items:updateItem,
      item:'',
      id:uuid(),
      editItem:false
    });
  };

  clearList = () =>{
    this.setState({
      items: []
    });
  };

  handleDelete = id =>{
    const filteredItems = this.state.items.filter(item =>item.id !== id)
    this.setState({
      items:filteredItems
    })

  };

  handleEdit  = id =>{

    const filteredItems = this.state.items.filter(item =>item.id !== id)
    const selectItem = this.state.items.find(item =>item.id === id)
    console.log(selectItem);
    this.setState({
      items:filteredItems,
      item: selectItem.title,
      editItem: true,
      id:id

    });

  };



  render(){
    return (        
      <div className = "container">
        <div className = "row">
        <div className = "col-10 mx-auto col-md-8 mt-4">
        <h3 className = "text-capitalize text-center">Todo List system</h3>
         <TodoInput item={this.state.item}
        handleChange = {this.handleChange}
        handleSubmit= {this.handleSubmit}
        editItem = {this.state.editItem}
        />
        <TodoList items = {this.state.items} 
        clearList = {this.clearList}
        handleDelete = {this.handleDelete}
        />
        </div>
        </div>
      </div>
);

  }
  
}

export default App;