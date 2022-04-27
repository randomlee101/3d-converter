import fs from 'fs-extra'
import converter from './converter'

const file = fs.readFileSync('/Volumes/Storage/downloads/SHOE_CABINET_gltf/SHOE_CABINET.gltf')

converter(file)
  .then((glb) => {
    return fs.writeFile('/Volumes/Storage/downloads/SHOE_CABINET_gltf/SHOE_CABINET.glb', glb)
  })
