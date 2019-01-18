import React, { Component } from 'react';
import './App.css';
import Card from "./Card/Card";

class App extends Component {

    render() {

    const  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus fringilla tellus non volutpat. Proin pharetra egestas nisi. Ut faucibus urna quam, quis porttitor sem lacinia ut. Cras condimentum ex vitae tellus faucibus, non dapibus nisi aliquet. Suspendisse ut luctus tellus. Integer sagittis pulvinar molestie. Aliquam dui tellus, maximus sodales tortor dignissim, bibendum ultrices quam. Integer ac convallis nunc, tristique commodo lorem. Suspendisse vel sapien ac est vestibulum vulputate vitae quis lacus. Quisque cursus cursus iaculis. Donec ut cursus elit. Nulla scelerisque cursus mauris, vitae mollis tortor tempus ac.\n" +
        "Quisque in libero at quam bibendum porta ac ac nunc. Vivamus pharetra egestas massa at pretium. Vestibulum vel ullamcorper ligula. Nulla tincidunt purus id consequat fringilla. Duis eu malesuada metus. Aliquam efficitur, sem at consectetur consequat, purus ipsum auctor dui, non eleifend lacus sem vel enim. Aliquam tincidunt, urna quis volutpat finibus, elit ligula vehicula quam, et euismod erat eros non lorem. Morbi mollis eget arcu vitae sagittis. Sed eget fermentum orci, vitae sollicitudin purus. Vivamus euismod nisl ac leo accumsan feugiat. Donec porta ullamcorper ante, nec dignissim quam feugiat eu. Mauris volutpat ipsum quis tristique mattis. Donec tristique erat vitae nisi lobortis, nec porta augue volutpat."

    return (
            <div className="App">
                <Card title="Visa Infinite Сбербанк Первый"
                      description={description}
                      currency={"RUR"}
                      dueDate="10.05.2027"
                      amount="123456"
                      cardNumber="1234"
                />
            </div>
        );
    }
}

export default App;
