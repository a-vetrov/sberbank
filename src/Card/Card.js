import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {title, description, dueDate, currency, amount, cardNumber} = this.props ;
        const currencySign = this.getCurrencySign(currency) ;

        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-title-container">
                        <div className="card-title">{title + ", " + currencySign}</div>
                        <div className="card-dueDate">{"до " + dueDate}</div>
                        <div className="card-amount">{this.addThousandsSeparator(amount) + " " + currencySign}</div>
                        <div className={"card-down-arrow"}/>
                    </div>
                    <div className="card-number">{"***" + cardNumber}</div>
                </div>
                <div className="card-description">{this.getMultiLineDescription(description)}</div>
            </div>
        );
    }

    getMultiLineDescription = (description) => {
        return description.split('\n').map((value, index) => <p key={"p"+index}>{value}</p>) ;
    } ;

    getCurrencySign = (currency) => {
        switch (currency) {
            case "USD" : return "$" ;
            case "EUR" : return "€" ;
            default : return "₽" ;
        }
    }

    addThousandsSeparator = (amount) => {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}

export default Card;
