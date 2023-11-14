import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

export default function Loading(props) {
    return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={'100%'}
    height={'100%'}
    fill="none"
    viewBox="0 0 100 100"
    {...props}
  >
     <Rect
      width={10.435}
      height={31.186}
      x={44.303}
      y={3}
      fill="#FF9392"
      rx={5.218}
    />
    <Rect
      width={10.435}
      height={31.186}
      x={44.303}
      y={65.733}
      fill="#FF9392"
      rx={5.218}
    />
    <Rect
      width={10.435}
      height={31.186}
      x={87.168}
      y={80.108}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(135 87.168 80.108)"
    />
    <Rect
      width={10.435}
      height={31.186}
      x={11.917}
      y={16.616}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(-45 11.917 16.616)"
    />
    <Rect
      width={10.435}
      height={31.186}
      x={4}
      y={53.618}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(-90 4 53.618)"
    />
    <Rect
      width={10.435}
      height={31.186}
      x={19.296}
      y={87.487}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(-135 19.296 87.487)"
    />
    <Rect
      width={10.435}
      height={31.186}
      x={64.814}
      y={53.618}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(-90 64.814 53.618)"
    />
    <Rect
      width={10.435}
      height={31.186}
      x={79.789}
      y={9.237}
      fill="#FF9392"
      rx={5.218}
      transform="rotate(45 79.789 9.237)"
    />
  </Svg>
)
    }
