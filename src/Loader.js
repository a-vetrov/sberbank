
export default function loadDataToState(setState) {
    //const url = 'data.json' ;
    //const url = 'data.php' ;
    const url = 'public/data' ;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setState({cards: data.cards});
        })
        .catch(function(err) {
            console.log('Loading error', err);
        });
}