const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Listen port 3000')
})

// Q1
app.get('/greatings/:username',(req,res) => {
    const username = req.params.username;
    if(username === "Mathilda"){
        res.send(`Hello there, ${username}!`);
    }else{
        res.send(`What a delight it is to see you once more, ${username}`);
    }
});

//Q2
app.get('/roll/:number', (req,res) => {
    const number = req.params.number;
    const numVal = parseInt(number, 10);
    if (isNaN(numVal)){
        res.send("You must specify a number.");
    }else{
        const randomNum = Math.floor(Math.random() * (numVal + 1));
        res.send(`You rolled a ${randomNum}.`);

    }
})

//Q3
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
app.get('/collectibles/:index', (req,res) => {
    const index = parseInt(req.params.index, 10);
    if(isNaN(index) || index < 0 || index >= collectibles.length){
        res.send('This item is not yet in stock. Check back soon!');
    }else{
        const item = collectibles[index];
        res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});

//Q4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
app.get('/shoes', (req,res) => {
    let result = shoes;
    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query.type;

    //filtering min price
    if(!isNaN(minPrice)){
        result = result.filter(shoe => shoe.price >= minPrice);
    }
    //filtering max price
    if(!isNaN(maxPrice)){
        result = result.filter(shoe => shoe.price <= maxPrice);
    }
    //filtering type
    if(type){
        result = result.filter(shoe => shoe.type === type);
    }
    res.send(result);
})


