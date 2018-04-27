import { createElement } from 'metaverse-api'
import { Fish } from './Fish'

export interface ISeaProps {
  sea: any
}

export const Sea = (props: ISeaProps) => {
  const { sea } = props
  return (
    <entity>
      {sea.fish.map((fish: any) => Fish({fish}))}
      <gltf-model
        src="https://caza.la/decentraland-shoal-scene/Underwater_v2.gltf"
        scale={0.55}
        position={{
          x: 10.5,
          y: -0.55,
          z: 10.5
        }}
      />
    </entity>
  )
}
