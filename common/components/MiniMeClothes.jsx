const React = require('react')

const Clothes1 = (primaryColor="#bbb") => <g id="clothing_1">
  <path
      d="M123.953,238.589c0.095,-0.019 15.655,10.145 29.541,10.322c12.836,0.163 28.018,-10.217 27.881,-10.255c21.113,5.44 41.23,28.335 39.449,60.677l-139.014,-0.683c-1.222,-37.053 18.339,-55.349 42.143,-60.061Z"
      style={{ fill: primaryColor, strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const clothesById = {
  1: Clothes1,
}

module.exports = ({ id, primaryColor }) => (clothesById[id] || Clothes1)(primaryColor)
