import Buffer from 'buffer'

export type ModelFormat = 'fbx' | 'dae' | 'obj' | 'gltf'

export type Detector = (file: Buffer) => boolean

export type Converter = (file: Buffer, accompaniment?: Buffer) => Promise<Buffer>
