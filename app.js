const express = require('express')
const ReactDOMServer = require('react-dom/server')
require('babel-register')

const MiniMe = require('./common/components/MiniMe')
const { PORT } = require('./config')

// Create the app
const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req.query)
  const {
    clothesId,
    clothesPrimaryColor="bbbbbb",
    eyesId,
    hairId,
    hairColor="bbbbbb",
    noseId,
    mouthId,
    skinColor="bbbbbb",
  } = req.query
  res.type('svg')
  res.send(
    ReactDOMServer.renderToString(
      MiniMe({
        clothesId,
        clothesPrimaryColor: `#${clothesPrimaryColor}`,
        eyesId,
        hairId,
        hairColor: `#${hairColor}`,
        noseId,
        mouthId,
        skinColor: `#${skinColor}`
      }))
  )
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
