const express = require('express');
const app = express();
app.use(express.json());
app.use(express.json())

const {getHouse,deleteHouse,createHouse,updateHouse} = require('./controller.js')
//endpoints
app.get('/api/houses', getHouse)
app.put('/api/houses/:id',updateHouse)
app.post('/api/', createHouse)
app.delete('/api/house/:id', deleteHouse)


app.listen(4040, () => console.log('Server running on 4004'))
