import React, { Component } from 'react';
import './CardFilter.css'

class CardFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

    }

    handleInputChange = (event) => {
        const value = event.target.value ;
        if(this.validateValue(value)) {
            this.setState({value}) ;
            if (this.props.updateFilter)
                this.props.updateFilter(value) ;
        }

    } ;

    validateValue = (value) => /^(\d{0,4})$/.test(value) ;

    render() {
        return (
            <div className="card-filter">
                <span className="card-filter-label">Фильтр по номеру карты: </span>
                <input type="text" className="card-filter-input" value={this.state.value} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default CardFilter;
