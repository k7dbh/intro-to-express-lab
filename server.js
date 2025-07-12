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


