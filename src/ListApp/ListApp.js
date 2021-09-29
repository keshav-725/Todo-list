import React from "react";
import template from "./ListApp.jsx";

class ListApp extends React.Component {
  constructor() {
    super()
    this.state = {
      allItems: [],
      items: [],
      values: "",
      button:"Add",
      prevName:""
    }
    this.count = 1
    this.name = ""
    this.addItem = this.addItem.bind(this)
    this.itemChange = this.itemChange.bind(this)
  }
  onItemDelete(item) {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Do you want to Delete item?")){
    this.state.items.splice(this.state.items.indexOf(item), 1)
    this.setState({
      allItems: this.state.items
    })
  }
  }
  onItemEdit(item) {
    debugger;
    this.setState({
      prevName:item,
      values: item,
      button:"Edit"
    })
  }
  itemChange(event) {
    this.name = event.target.value
    this.setState({
      values: event.target.value
    })
  }
  addItem() {
    if (this.state.button === "Add") {
      this.state.items.push(this.name)
      this.setState({
        allItems: this.state.items,
        values: ""
      })
    }
    else {
      this.state.items.splice(this.state.items.indexOf(this.state.prevName),1,this.name)
      this.setState({
        button:"Add",
        allItems: this.state.items,
        values:""
      })
    }
  }
  render() {
    return template.call(this);
  }
}

export default ListApp;
