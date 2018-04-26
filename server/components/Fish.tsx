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
  const angleY = Math.atan2(velocity.x, velocity.z)
  return id == 0 ? (
    <gltf-model
      src="https://caza.la/decentraland-shoal-scene/shark.gltf"
      key={id}
      position={{ x, y, z }}
      scale={mass * mass / 10}
      rotation={{ z: 0, y: toDeg(angleY) + 180, x: velocity.y * 4 }}
      transition={{
        position: { duration: 200 },
        rotation: { duration: 200 }
      }}
      skeletalAnimation={
        behaviour === 'chase'
          ? [
              { clip: 'shark_skeleton_bite', playing: true, loop: true },
              { clip: 'shark_skeleton_swim', weight: 2.0, playing: true }
            ]
          : [
              { clip: 'shark_skeleton_bite', playing: false },
              { clip: 'shark_skeleton_swim', weight: 2.0, playing: true }
            ]
      }
    />
  ) : (
    <gltf-model
      src="https://caza.la/decentraland-shoal-scene/bichi.gltf"
      key={id}
      position={{ x, y, z }}
      scale={mass * mass / 8}
      rotation={{ z: 0, y: toDeg(angleY), x: -velocity.y * 5 }}
      transition={{
        position: { duration: 200 },
        rotation: { duration: 200 }
      }}
      skeletalAnimation={[{ clip: 'animation_0', playing: true, weight: 10 }]}
    />
  )
}
