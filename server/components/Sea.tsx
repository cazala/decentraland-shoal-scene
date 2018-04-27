import { createElement } from 'metaverse-api'
import { Fish } from './Fish'

export interface ISeaProps {
  sea: any
}

export const Sea = (props: ISeaProps) => {
  const { sea } = props
  return (
    <entity>
    {sea.fish.map((fish: any) => <Fish fish={fish} />)}
    </entity>
  )
}
