import { Converter } from '@/types'
import { NodeIO } from '@gltf-transform/core'
import { convertBase } from './convert-base'
import fs from 'fs-extra'

export const gltf: Converter = async (file) => {
  const io = new NodeIO()
  return await convertBase(file, async (origin, destination) => {
    await fs.writeFile(origin, file)
    const document = await io.read(origin)
    const binary = await io.writeBinary(document)
    await fs.writeFile(destination, binary)
  })
}
