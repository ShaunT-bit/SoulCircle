// components/Wave.tsx
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function Wave() {
  return (
    <Svg
      width={width}
      height={160}
      viewBox="0 0 1140 320"
      style={{
        position: "absolute",
        top: "23%",
        right:3
      }}
    >
      <Path
        fill="#ffffff"
        d="M0,32L30,74.7C60,117,120,203,180,208C240,213,300,139,360,96C420,53,480,43,540,53.3C600,64,660,96,720,128C780,160,840,192,900,192C960,192,1020,160,1080,128C1140,96,1200,64,1260,90.7C1320,117,1380,203,1410,245.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      />
    </Svg>
  );
}