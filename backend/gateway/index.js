const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000', // Allow only React app to make requests
//     methods: 'GET,POST',
//     allowedHeaders: 'Content-Type',
// };
  
app.use(cors());
app.use(express.json());

app.use('/doctor', proxy('http://localhost:8002'));
app.use('/notification', proxy('http://localhost:8004'));
app.use('/patient', proxy('http://localhost:8001'));
app.use('/', proxy('http://localhost:8003'));



app.listen(8000, () => {
    console.log('Gateway is listning on port 8000');
});