import React, { Component } from 'react';
import Card from "./Card/Card";

class CardList extends Component {

    render() {

        const cards = this.props.cards.map((item, index) =>
            ( <Card title={item.title}
                    description={item.description}
                    currency={item.currency}
                    dueDate={item.dueDate}
                    amount={item.amount}
                    cardNumber={item.cardNumber}
                    key={index}
            />));

        return <div>{cards}</div> ;
    }
}

export default CardList;
