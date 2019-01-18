
export default function loadDataToState(setState) {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            //console.log(data) ;
            setState({cards: data.cards});
        })
        .catch(function(err) {
            console.log('Loading error', err);
        });
}