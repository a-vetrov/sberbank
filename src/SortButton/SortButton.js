import React, { Component } from 'react';
import "./SortButton.css"

class SortButton extends Component {

    constructor(props) {
        super(props);
        this.state = {sortMethod: 'UP'};

    }

    render() {
        const arrow = this.state.sortMethod === "UP" ? "▲" : "▼" ;
        return (
            <div className="card-sort-button" onClick={this.handleClick}>
                Дата: {arrow}
            </div>
        );
    }

    handleClick = () => {
        const sortMethod = this.state.sortMethod === "UP" ? "DOWN" : "UP" ;
        this.setState({sortMethod}) ;
        if (this.props.updateSortMethod)
            this.props.updateSortMethod(sortMethod) ;
    }
}

export default SortButton;
