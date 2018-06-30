const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app
.use(express.static('dist/hnefatafl/'))
.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));