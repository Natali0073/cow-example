const express = require('express')
const cowsay = require('cowsay')
const cors = require('cors')
// Create the server
const app = express();

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}
// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
    try {
        const text = req.params.say
        const moo = cowsay.say({ text })
        res.json({ moo })
} catch (err) {
    next(err)
}
})
// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(), async (req, res, next) => {
    try {
        const moo = cowsay.say({ text: 'Hello World!' })
        res.json({ moo })
} catch (err) {
    next(err)
}
})
// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
})