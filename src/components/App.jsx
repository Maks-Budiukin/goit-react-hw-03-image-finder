import React from "react";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import css from "components/App.module.css"


export class App extends Component {

  state = {
    request: '',
  }

  onSearchSubmit = request => {
    this.setState(({ request }))
}

  render() {
    return (
      <div className={css.App}>
      <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageGallery>
          <ImageGalleryItem request={this.state.request} />
        </ImageGallery>
        </div>
    );
  }

}




