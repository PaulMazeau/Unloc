import React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
    >
      <Rect
        width="48"
        height="48"
        fill="transparent"
      />
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </Svg>
  )
}

export default BackIcon
