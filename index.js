const express = require('express')
// const cowsay = require('cowsay')
// const cors = require('cors')
// Create the server
const app = express();
const path = require('path');
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// Serve our api route /cow that returns a custom talking text cow
// app.get('/api/cow/:say', cors(), async (req, res, next) => {
//     // try {
//         // const text = req.params.say
//         // const moo = cowsay.say({ text })
//         res.json({ moo : "kek" })
// // } catch (err) {
// //     next(err)
// // }
// })
// Serve our base route that returns a Hello World cow
app.get('/api/cow', (req, res) => {
    // try {
    //     const moo = cowsay.say({ text: 'Hello World!' })
    console.log("asdasda sadasdadsa");
        res.json({ moo : "lol" });
// } catch (err) {
//     next(err)
// }
});
// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT);

console.log(`Password generator listening on ${PORT}`);