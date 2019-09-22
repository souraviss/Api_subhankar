const express = require('express');
const bodyParsser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const profileRoutes = require('./Router/profile');
const concertRoutes = require('./Router/concert');

app.use(bodyParsser.json())
//cors policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use('/profile', profileRoutes);
app.use('/Concert', concertRoutes);
//connection with mongodb by mongoose
mongoose.connect('mongodb+srv://SubhankarDB:sourav@1234@clustersubhankar-aokbk.mongodb.net/blog?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection Successfuly done!!');
    },
        err => {
            console.log('error occure in db connection!' + err);
        })


//listen on port 3000
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
// app.listen(3000, () => {
//     console.log("server is listening on port 3000");
// });