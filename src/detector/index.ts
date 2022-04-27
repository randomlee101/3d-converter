import { fbx } from './fbx'
import { obj } from './obj'
import { dae } from './dae'
import { gltf } from './gltf'
import { glb } from './glb'
import { ModelFormat } from '@/types'

export default (file: Buffer): ModelFormat | undefined => {
  if (obj(file)) {
    return 'obj'
  } else if (fbx(file)) {
    return 'fbx'
  } else if (dae(file)) {
    return 'dae'
  } else if (gltf(file)) {
    return 'gltf'
  } else if (glb(file)) {
    return 'glb'
  } else {
    return undefined
  }
}
