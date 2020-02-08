const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const chalk = require("chalk");

App.get("/id/:id", (req,res) => {
    let result = {error: "That ID doesn't exist"};

    pokemons.forEach(value => {
        if (value.id == req.params.id) {
            result = value;
            res.send(value);
        }
    });

    if (result.error) {
        console.log(chalk.red(result.error));
    } else {
        console.log(chalk.green(req.path));
    }

});

App.get("/name/:name", (req,res) => {
    let result = {error: "That name doesn't exist"};

    pokemons.forEach(value => {
        if (value.name == req.params.name) {
            result = value;
            res.send(value);
        }
    });

    if (result.error) {
        console.log(chalk.red(result.error));
    } else {
        console.log(chalk.green(req.path));
    }

});

App.listen(port, () => {
    console.log("Server running!");
});