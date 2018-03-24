const path = require('path');
const resultRoute = require('./result');

const constructorMethods = app => {
    app.use('/result', resultRoute);

    app.get('/', (req, res) => {
        res.render("intro", {
            title: "The Best Palindrome Checker in the World!"
        });
    });

    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethods;