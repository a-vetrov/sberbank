import React, { Component } from 'react';
import Card from "./Card/Card";

class CardList extends Component {

    render() {

        const cards = this.props.cards.map((item) =>
            ( <Card title={item.title}
                    description={item.description}
                    currency={item.currency}
                    dueDate={item.dueDate}
                    amount={item.amount}
                    cardNumber={item.cardNumber}
                    key={item.cardNumber}
            />));

        return <div>{cards}</div> ;
    }
}

export default CardList;
