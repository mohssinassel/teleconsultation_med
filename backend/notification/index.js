const express = require('express');

const app = express();

app.use(express.json());


app.use('/', (req, res,next) => {

    return res.status(200).json({
        "msj": 'Notification is working'
    });
});




app.listen(8004, () => {
    console.log('Notification is listning on port 8004');
});