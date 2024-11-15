const express = require('express');

const app = express();

app.use(express.json());


app.use('/', (req, res,next) => {

    return res.status(200).json({
        "msj": 'Doctor is working'
    });
});




app.listen(8002, () => {
    console.log('Doctor is listning on port 8002');
});