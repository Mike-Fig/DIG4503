class TypeSearch extends React.Component {
    readType(event) {

        event.preventDefault();

        let element = document.querySelector("#type");

        fetch("/api/pokemon/type/" + element.value).then((res) =>{
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
                <h2>pokemon Type</h2>     
                <form onSubmit={this.readType}>
                    <input id="pokemonType" type="text" placeholder="pokemon Type"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;