import { Converter } from '@/types'
import { glbToGltf } from 'gltf-pipeline'

export const glb: Converter = async (file) => {
  const { gltf } = await glbToGltf(file)
  return Buffer.from(JSON.stringify(gltf), 'utf-8')
}
