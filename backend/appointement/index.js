const express = require('express');

const app = express();

app.use(express.json());


app.use('/', (req, res,next) => {

    return res.status(200).json({
        "msj": 'Appointement is working'
    });
});




app.listen(8003, () => {
    console.log('Appointement is listning on port 8003');
});