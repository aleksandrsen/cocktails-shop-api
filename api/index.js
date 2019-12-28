const router = require("express").Router();
const mocks = require("./mock");

let {
    cocktails,
    events,
    users,
    bartenders,
    blogPosts,
    instagram
} = mocks;

const reply = (res, body, timeout = 1000, status = 200) => {
    setTimeout(() => {
        res.status(status).json(body);
    }, 1000)
};

router.get("/cocktails", function (req, res, next) {
    reply(res, cocktails);
});

router.get("/events", function (req, res, next) {
    reply(res, events);
});

router.get("/random", function (req, res, next) {
    let randomCocktails = [];
    for (let i = 0; i <= 12; i++) {
        let rand = Math.round(Math.random() * cocktails.length);
        randomCocktails.push(cocktails[rand])
    }
    reply(res, randomCocktails);
});

router.get("/events", function (req, res, next) {
    reply(res, events);
});

router.get("/users", function (req, res, next) {
    reply(res, users);
});

router.get("/bartenders", function (req, res, next) {
    reply(res, bartenders);
});

router.get("/blog-posts", function (req, res, next) {
    reply(res, blogPosts);
});

router.get("/instagram", function (req, res, next) {
    reply(res, instagram);
});

module.exports = router;
