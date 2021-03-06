class IdSearch extends React.Component {
    readId(event) {

        event.preventDefault();

        let element = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + element.value).then((res) =>{
            return res.json();
        }).then((processed) => {

            let reporting = document.querySelector("#reportingArea")

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });
    }
    render() {
        return(
            <div>
                <h2>pokemon ID</h2>     
                <form onSubmit={this.readId}>
                    <input id="pokemonId" type="text" placeholder="pokemon Id"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;