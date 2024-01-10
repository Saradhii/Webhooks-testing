const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

// configure body-parser middleware to parse JSON payloads
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Server started");
})

// define a route handler function for the webhook endpoint
app.post('/webhook', (req, res) => {
  // extract the courier data from the webhook notification payload
  // const { data } = req.body;
  // res.send("data",data);
    
  // store the courier data in a database or send it to the frontend
  // using a WebSocket or a REST API endpoint
});

// start the server

const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
  console.log('Server started');
});
