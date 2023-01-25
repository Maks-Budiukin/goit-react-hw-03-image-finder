import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
import css from "components/Modal/Modal.module.css"

export class Modal extends Component {
    state = ''

    handleESC = (event) => {
        if (event.key === 'Escape') {
            this.props.closeModal();
        }
    }

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
        this.props.closeModal();
    }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleESC)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleESC)
    }

    render() {
        return(<div className={css.Overlay} onClick={this.handleBackdropClick}>
                  <div className={css.Modal}>
                    <img src={this.props.largeImage} alt="" />
                  </div>
                </div>)
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
}