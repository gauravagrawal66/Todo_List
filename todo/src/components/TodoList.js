import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
    render() {

            const{items, clearList,handleDelete} = this.props

        return (
           <ul className = "list-group my-5">
           <h3 className ="text-capitalize text-center">Todo List</h3>

{
    items.map(item =>   {
        return (
            <TodoItems key= {item.id} title= {item.title} handleDelete = {() => handleDelete(item.id)}/>
            );
    })
}

           <button className = "btn btn-block btn-danger mt-3" type = "submit" onClick = {clearList}>clear items</button>

           </ul>
        )
    }
}
