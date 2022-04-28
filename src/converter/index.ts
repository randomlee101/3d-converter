import detector from '../detector'
import { obj } from './obj'
import { fbx } from './fbx'
import { dae } from './dae'
import { gltf } from './gltf'
import { glb } from './glb'
import { validateBytes } from 'gltf-validator'

const converters = { obj, fbx, dae, gltf, glb }

export default async (file: Buffer, accompaniment?: Buffer) => {
  const format = detector(file)
  if (!format) {
    throw new ConversionError('Format not supported')
  }
  const glb = await converters[format](file, accompaniment)
  try {
    await validateBytes(new Uint8Array(glb))
    return glb
  } catch (e) {
    throw new ConversionError('Converted with an error')
  }
}

class ConversionError extends Error {
  name = 'ConversionError'
}
