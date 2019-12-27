const router = require("express").Router();
const mocks = require("./mock");

let cocktails = mocks.cocktails;
let events = mocks.events;

const reply = (res, body, timeout = 1000, status = 200) => {
    res.status(status).json(body);
};

router.get("/cocktails", function(req, res, next) {
  reply(res, cocktails);
});

router.get("/events", function(req, res, next) {
    reply(res, events);
});

router.get("/random", function(req, res, next) {
    let randomCocktails = [];
    for(let i = 0; i <= 12; i++) {
        let rand = Math.round(Math.random() * cocktails.length);
        randomCocktails.push(cocktails[rand])
    }
    reply(res, randomCocktails);
});

module.exports = router;
