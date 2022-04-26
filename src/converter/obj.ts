import { Converter } from '@/types'
import obj2gltf from 'obj2gltf'
import { convertBase } from './convert-base'
import fs from 'fs-extra'

export const obj: Converter = async (file, accompaniment) => {
  return await convertBase(file, async (origin, destination) => {
    const glb = await obj2gltf(origin, { binary: true })
    await fs.writeFile(destination, glb)
  }, accompaniment)
}
