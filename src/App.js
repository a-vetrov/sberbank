import React, { Component } from 'react';
import './App.css';
import CardList from "./CardList";
import loadDataToState from "./Loader"
import CardFilter from "./CardFilter/CardFilter";
import SortButton from "./SortButton/SortButton";

class App extends Component {

    constructor(props) {
        super(props) ;

        this.state = {
            cards: null,
            cardFilter: "",
            sortMethod: "UP"
        }
    }

    render() {

        if (!this.state.cards)
            return <div className="App">Loading...</div> ;

        const {cardFilter, cards} = this.state ;
        const cardsToShow = cardFilter === "" ? cards.slice() :
                                                cards.filter((item) => item.cardNumber.indexOf(cardFilter) >= 0) ;

        cardsToShow.sort(this.sortCardsByDate) ;

        return (
            <div className="app">
                <div className="app-controls-container">
                    <CardFilter updateFilter={this.updateFilter}/>
                    <SortButton updateSortMethod={this.updateSortMethod}/>
                </div>
                <CardList cards={cardsToShow}/>
            </div>
        );
    }

    componentDidMount = () => {
        loadDataToState(this.setState.bind(this)) ;
    } ;

    updateFilter = (cardFilter) => {
        this.setState({cardFilter}) ;
    } ;

    updateSortMethod = (sortMethod) => {
        this.setState({sortMethod}) ;
    } ;

    sortCardsByDate = (card1, card2) => {
        const date1 = getDate(card1.dueDate) ;
        const date2 = getDate(card2.dueDate) ;

        const multiplier = this.state.sortMethod === "UP" ? 1 : -1 ;

        if (date1 > date2) return multiplier ;
        if (date1 < date2) return -multiplier ;
        return 0 ;

        function getDate(date) {
            return new Date(date.split("-").reverse().join("/")) ;
        }
    } ;
}

export default App;
