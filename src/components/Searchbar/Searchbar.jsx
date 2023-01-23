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
      


      
        fetch(`https://pixabay.com/api/?q=cat&page=1&key=31301300-300be7510f84e8e4ecf9762e9&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        
        .then(data => {
            let {id, webformatURL, largeImageURL} = data.hits[0];
          console.log(id, webformatURL, largeImageURL)
          

            
            })
            .catch((error) => {
            
                console.log(error);
            
    })









        this.props.onSubmit(this.state.request)
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