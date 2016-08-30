const React = require('react')

const Body = require('./MiniMeBody')
const Clothes = require('./MiniMeClothes')
const Head = require('./MiniMeHead')
const Mouth = require('./MiniMeMouth')
const Nose = require('./MiniMeNose')
const Eyes = require('./MiniMeEyes')
const Hair = require('./MiniMeHair')

const MiniMe = ({
  clothesId,
  clothesPrimaryColor,
  skinColor,
  eyesId,
  hairColor,
  hairId,
  mouthId,
  noseId,
}) => {
  return <svg
      width="100%" height="100%" viewBox="0 0 300 300" version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.41421
      }}>
    <Body color={skinColor} />
    <Head color={skinColor} />
    <Clothes id={clothesId} primaryColor={clothesPrimaryColor} />
    <Mouth id={mouthId} />
    <Nose id={noseId} />
    <Eyes id={eyesId} />
    <Hair id={hairId} color={hairColor} />
  </svg>
}

module.exports = MiniMe
