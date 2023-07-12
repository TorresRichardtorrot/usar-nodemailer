const express = require('express');
const appRoutes = require('./routes/routes');


const app = express();

const PORT = 9000

app.use(express.json());

//  routes

app.use('/api', appRoutes)

app.listen(PORT,() =>{
    console.log("**Activo**",PORT)
})


