import React from "react";
import { Component } from "react";
import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"


export class ImageGalleryItem extends Component {
    state = {
        images: [],
    }

    componentDidUpdate(prevState) {
        prevState.images !== this.state.images &&
        fetch(`https://pixabay.com/api/?q=${this.props.request}&page=1&key=31301300-300be7510f84e8e4ecf9762e9&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        
            .then(({ hits }) => this.setState({images: hits}))
            
    }


    render() {
        return (<>
            {this.state.images.map((image) =>
                <li className={css.ImageGalleryItem} key={image.id}>
                <img className={css.ImageGalleryItemImage} src={image.webformatURL} alt="" />
                </li>)}
            </>)
    }
}