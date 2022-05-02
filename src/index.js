const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')


app.use(cors())

app.use(bodyParser.json())


let users = [
    {   
        id: 1,
        name: "Rodrigo Bergamin",
        email:"rodrigobergamin@usjt.com.br"
    },
    {
        id: 2,
        name: "Lucas Silvério",
        email:"lucassilverio@usjt.com.br"
    },
    {
        id: 3,
        name: "Natalia Andresini",
        email:"nataliaandresini@usjt.com.br"
    },
]


app.get('/', (req, res) => {
    res.send("API acessada com sucesso").status(200)
  });


app.get('/users', (req, res) => {

    
   if(users) {
    res.send("API Acessada com sucesso").status(200)
   }

  });


app.get('/users/:id', (req, res) => {

    const id = req.params.id

 

    const user = users.find(user => user.id === id)
    
    if(user) {
        res.send("API Acessada com sucesso").status(200)
       }
       
    if(!id) {
        res.send("Requisição desconhecida").status(400)
    }
   });


app.post('/users/:id/:name/:email', (req, res) => {

    const id = req.params.id
    const name = req.params.name
    const email = req.params.email
    

    if(!id || !name || !email) {
        
        res.send("Requisição desconhecida").status(400)
    }else {
        users.push({id, name, email})
        res.json({id, name, email}).status(200)
    }
   });

app.listen(3000, () => {
    console.log('listening on port 3000');
    
    
  });