import "./ListApp.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

function template() {
  return (
    <>
    <h2 style={{textAlign:"center"}}>TO-DO LIST</h2>
    <div className="element">
      <div className="list-app">
        <input onChange={this.itemChange} value={this.state.values}  className="input-item" type="text" placeholder="Add Item" /><button className="add-button" onClick={this.addItem}>{this.state.button}</button><br/>
      <div className="all-item">
      {
        this.state.items.map((item,index)=>{
          return <div className="item" key={index}>{item}<i onClick={this.onItemDelete.bind(this,item)} className="fa fa-solid fa-trash delete"style={{fontSize:20}} ></i><i onClick={this.onItemEdit.bind(this,item)} className="fa fa-solid fa-pencil edit" style={{fontSize:20}}></i></div>
        })
      }
      </div>
      </div>
    </div>
    </>
  );
};

export default template;
