import { createElement } from 'metaverse-api'

export interface IFishProps {
  fish: any
}

const toDeg = (rad: any) => rad / (Math.PI * 2) * 360

export const Fish = (props: IFishProps) => {
  const { fish } = props
  const { id, mass, location, velocity, behaviour } = fish
  const x = location.x / 60
  const y = location.y / 60
  const z = location.z / 60
  const [angleZ, angleY] = velocity.angles()
  return (
    <cone
      key={id}
      position={{ x, y, z }}
      rotation={{ z: toDeg(angleZ) - 90, y: toDeg(angleY), x: 0 }}
      scale={mass * mass / 5}
      segmentsRadial={3}
      transition={{
        position: { duration: 200 },
        rotation: { duration: 200 }
      }}
      color={
        id === 0
          ? 'blue'
          : behaviour === 'avoid'
            ? 'red'
            : behaviour === 'wander'
              ? 'gray'
              : 'black'
      }
    />
  )
}
