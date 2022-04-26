import detector from '../detector'
import { obj } from './obj'
import { fbx } from './fbx'
import { dae } from './dae'

const converters = { obj, fbx, dae }

export default async (file: Buffer, accompaniment?: Buffer) => {
  const format = detector(file)
  if (!format) {
    throw new ConversionError('Format not supported')
  }
  return await converters[format](file, accompaniment)
}

class ConversionError extends Error {
  name = 'ConversionError'
}
