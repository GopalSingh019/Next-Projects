import { ReactNebula} from "@flodlc/nebula";

function loader() {
  return (
    <ReactNebula config={{
      "starsCount": 510,
      "starsColor": "#FFFFFF",
      "starsRotationSpeed": 90.4,
      "cometFrequence": 15,
      "nebulasIntensity": 0,
      "bgColor": "rgb(8,8,8)",
      "sunScale": 3.4,
      "planetsScale": 3,
      "solarSystemOrbite": 0,
      "solarSystemSpeedOrbit": 100
    }}/>
  )
}

export default loader