import { Detector } from '@/types'

export const gltf: Detector = (file) => {
  const fileString = file.toString('utf-8')
  try {
    const gltfObject = JSON.parse(fileString)
    if (!gltfObject) {
      return false
    }
    return 'nodes' in gltfObject && 'meshes' in gltfObject
  } catch (e) {
    return false
  }
}
