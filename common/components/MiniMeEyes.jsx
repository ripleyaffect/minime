const React = require('react')

const Eyes1 = <g id="eyes_1">
  <circle cx="127.67" cy="165.866" r="6.837" style={{ fill: "#4e4e4e" }}/>
  <path
      d="M115.78,155.246c0.902,-1.406 12.551,-6.86 20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }}/>
  <circle cx="177.774" cy="165.866" r="6.837" style={{ fill: "#4e4e4e" }}/>
  <path
      d="M189.664,155.246c-0.901,-1.406 -12.551,-6.86 -20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }}/>
</g>

const Eyes2 = <g id="eyes_2">
  <circle cx="127.67" cy="165.866" r="6.837" style={{ fill: "#4e4e4e" }}/>
  <path
      d="M115.78,155.246c0.902,-1.406 12.551,-6.86 20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }}/>
  <path
      d="M168.78,155.246c0.902,-1.406 12.551,-6.86 20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }}/>
  <path
      d="M170.364,166.594c0,0 7.314,-3.425 16.279,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }}/>
</g>

const Eyes3 = <g id="eyes_5">
  <path
      d="M118.552,169.836c0,-12.459 18.262,-12.175 18.262,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M168.552,169.836c0,-12.459 18.262,-12.175 18.262,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M190.076,153.036c-2.614,-1.676 -13.791,-3.684 -21.445,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M115.631,153.036c2.614,-1.676 13.791,-3.684 21.445,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const Eyes4 = <g id="eyes_4">
  <circle cx="127.67" cy="165.866" r="6.837" style={{ fill: "#4e4e4e" }} />
  <circle cx="177.774" cy="165.866" r="6.837" style={{ fill: "#4e4e4e" }} />
  <path
      d="M115.78,155.246c0.902,-1.406 12.551,-6.86 20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M189.664,155.246c-0.901,-1.406 -12.551,-6.86 -20.884,0"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M183.276,164.652c1.765,-0.633 3.545,-1.833 4.674,-3.521"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M121.95,164.652c-1.764,-0.633 -3.545,-1.833 -4.674,-3.521"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M179.276,162.652c1.765,-0.633 3.545,-1.833 4.674,-3.521"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
  <path
      d="M125.95,162.652c-1.764,-0.633 -3.545,-1.833 -4.674,-3.521"
      style={{ fill: "none", strokeWidth: 3, stroke: "#4e4e4e" }} />
</g>

const eyesById = {
  1: Eyes1,
  2: Eyes2,
  3: Eyes3,
  4: Eyes4,
}

module.exports = ({ id }) => eyesById[id] ||  <g />
