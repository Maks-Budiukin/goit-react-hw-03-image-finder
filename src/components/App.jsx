import React from "react";
import { Component } from "react";
// import css from "components/styles.module.css"
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    search: '',
  }

  onSearchSubmit = request => {
    
    
    this.setState(({ search: request }))

}

  render() {
    return (
      <Searchbar onSubmit={this.onSearchSubmit} />
    );
  }

}




