import React from "react";
import { Component } from "react";

import css from "components/Searchbar/Searchbar.module.css"

export class Searchbar extends Component {
    state = {
    request: '',
  }


  onInputChange = (event) => {

  this.setState({
    [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            request: '',
        })
  }

  render() {
    return (
      <>
      <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButton__label}>Search</span>
    </button>

            
              <input
      className={css.SearchFormInput}
      name="request"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.request}
      onChange={this.onInputChange}
    />
    
  </form>
        </header>
        </>
    );
  }
}