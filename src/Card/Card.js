import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props) ;

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {title, description, dueDate, currency, amount, cardNumber} = this.props ;
        const currencySign = this.getCurrencySign(currency) ;
        const isOpen = this.state.isOpen ;

        const body = this.state.isOpen ? <div className="card-description">{this.getMultiLineDescription(description)}</div> : null ;

        return (
            <div className={isOpen ? "card card-opened" : "card"}>
                <div className={isOpen ? "card-header card-header-opened" : "card-header"} onClick={this.handleHeaderClick}>
                    <div className={isOpen ? "card-up-arrow" : "card-down-arrow"}/>
                    <div className="card-title-container">
                        <div className="card-title">{title + ", " + currencySign}</div>
                        <div className="card-dueDate">{"до " + dueDate}</div>
                        <div className="card-amount">{this.addThousandsSeparator(amount) + " " + currencySign}</div>

                    </div>
                    <div className="card-number">{"***" + cardNumber}</div>
                </div>
                {body}
            </div>
        );
    }

    handleHeaderClick = () => {
       this.setState({isOpen:!this.state.isOpen}) ;
    } ;

    getMultiLineDescription = (description) => {
        return description.split('\n').map((value, index) => <p key={"p"+index}>{value}</p>) ;
    } ;

    getCurrencySign = (currency) => {
        switch (currency) {
            case "USD" : return "$" ;
            case "EUR" : return "€" ;
            default : return "₽" ;
        }
    } ;

    addThousandsSeparator = (amount) => {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } ;
}

export default Card;
