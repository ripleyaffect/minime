const React = require('react')

const Nose1 = <g id="nose_1">
  <path
      d="M141.758,190.524c0.485,6.596 6.499,7.96 10.689,8.032c4.52,0.077 9.957,-2.237 10.464,-8.113c0.451,-5.222 0.164,-5.117 0.164,-5.117c0,0 -1.749,10.164 -10.786,9.928c-8.643,-0.225 -10.523,-8.945 -10.764,-9.753c-0.171,-0.576 0.134,3.678 0.233,5.023Z"
      style={{ fill: "#000", fillOpacity: 0.129412}} />
  <path
      id="nose_11"
      d="M142.966,185.592c0,11.437 18.693,11.492 18.693,0"
      style={{ fill:"none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const Nose2 = <g id="nose_2">
  <path
      id="nose_21"
      d="M158.759,192.998l-11.967,0c0,0 0,0.001 0,0.001c0,1.134 0.45,2.221 1.252,3.022c0.801,0.802 1.888,1.252 3.022,1.252c1.111,0 2.308,0 3.419,0c1.133,0 2.221,-0.45 3.022,-1.252c0.802,-0.801 1.252,-1.888 1.252,-3.022c0,0 0,-0.001 0,-0.001Z"
      style={{ fill: "#000", fillOpacity: 0.129412 }} />
  <path
      id="nose_22"
      d="M147.364,192.419l10.481,-0.077"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const Nose3 = <g id="nose_3">
  <path
      id="nose_31"
      d="M143.876,185.858c0,0 5.95,7.255 8.112,9.892c0.189,0.23 0.471,0.362 0.769,0.359c0.297,-0.003 0.577,-0.14 0.762,-0.373c2.066,-2.616 7.65,-9.685 7.65,-9.685l-8.285,6.364l-9.008,-6.557Z"
      style={{ fill: "#000", fillOpacity: 0.129412 }} />
  <path
      id="nose_32"
      d="M145.154,185.446l7.483,7.483l7.116,-7.386"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const Nose4 = <g id="nose_4">
    <path
        id="nose_41"
        d="M137.946,192.097c0.666,6.596 8.752,7.93 14.505,8.002c6.205,0.077 13.618,-2.068 13.971,-8.334c0.297,-5.25 0.038,-5.155 0.038,-5.155c0,0 -1.82,10.423 -14.226,10.187c-11.866,-0.225 -13.82,-9.349 -14.151,-10.158c-0.234,-0.575 -0.273,4.114 -0.137,5.458Z"
        style={{ fill: "#000", fillOpacity: 0.129412 }} />
    <path
        id="nose_42"
        d="M139.435,187.135c0,11.438 25.662,11.492 25.662,0"
        style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
    <path
        id="nose_43"
        d="M139.538,186.853l2.424,-3.083"
        style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
    <path
        id="nose_44"
        d="M165.001,186.762l-2.129,-3.351"
        style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const Nose5 = <g id="nose_2">
  <path
      d="M159.893,192.934l-14.996,0c0,0 0,0 0,0.001c0,2.36 1.914,4.274 4.274,4.274c2.021,0 4.428,0 6.448,0c2.361,0 4.274,-1.914 4.274,-4.274c0,-0.001 0,-0.001 0,-0.001Z"
      style={{ fill:"#000", fillOpacity: 0.129412 }} />
  <path
      id="nose_21"
      d="M146.172,192.575c0.989,1.672 2.589,0.437 3.174,0.71c1.79,0.835 4.202,0.962 6.017,0.179c0.643,-0.278 2.839,0.631 3.502,-0.767"
      style={{ fill:"none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const nosesById = {
  1: Nose1,
  2: Nose2,
  3: Nose3,
  4: Nose4,
  5: Nose5,
}

module.exports = ({ id }) => nosesById[id] || <g />