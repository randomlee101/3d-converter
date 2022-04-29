import detector from '../detector'
import { obj } from './obj'
import { fbx } from './fbx'
import { dae } from './dae'
import { gltf } from './gltf'
import { glb } from './glb'
import { validateBytes } from 'gltf-validator'

const converters = { obj, fbx, dae, gltf, glb }

export default async (file: Buffer, accompaniment?: Buffer, validate: boolean = false) => {
  const format = detector(file)
  if (!format) {
    throw new ConversionError('Format not supported')
  }
  const glb = await converters[format](file, accompaniment)
  if (validate) {
    const report = await validateBytes(new Uint8Array(glb))
    if (report.issues.numErrors > 0) {
      const messages = report.issues.messages as { code: string, severity: number }[]
      if (!messages.find((message) => message.code === 'IO_ERROR' && message.severity === 0)) {
        throw new ConversionError('Required textures could not be found')
      }
    }
  }
  return glb
}

class ConversionError extends Error {
  name = 'ConversionError'
}
