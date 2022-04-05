const express = require("express")
const app = express()

const PORT = 3000


app.get("/", (req, res) => {
    res.send(
        `99 Bottles of beer on the wall
            <br>
            <a href="/98">take one down, pass it around<a>`
    )
})

// Place /0 route before :number_of_bottles params in order to /0 route take priority over :number_of_bottles params route
app.get("/0", (req, res) => {
    res.send(
        `There are 0 bottles left, and ya'll 🤪🤪🤪
            <br>
            <a href="/">Start again! Ps.But this time only with water.<a>`)
})

app.get("/:number_of_bottles", (req, res) => {
    res.send(
        `${req.params.number_of_bottles} Bottles of beer on the wall.
            <br>
            <a href="${parseInt(req.params.number_of_bottles) - 1}">take one down, pass it around</a>`
    )
})

// not needed
// app.get("/98", (req, res) => {
//     res.send(
//         `98 Bottles of beer on the wall
//             <br>`
//     )
// })

app.listen(PORT, () => {
})