import { createElement, ScriptableScene, ISimplifiedNode } from 'metaverse-api'
import { Sea } from './components/Sea'

let cachedScene: ISimplifiedNode | null = null
export function render(sea: any) {
  cachedScene = Sea({sea})
}

export default class RemoteScene extends ScriptableScene {
  async render() {
    return (
      <scene position={{ x: 0.5, y: 0.5, z: 0.5 }} scale={0.9}>
        {cachedScene}
      </scene>
    )
  }
}
