import fs from 'fs-extra'
import converter from './converter'

const file = fs.readFileSync('/Volumes/Storage/downloads/Fabricio_LG1_gLTF/Fabricio_LG1.glb')

converter(file)
  .then((glb) => {
    return fs.writeFile('/Volumes/Storage/downloads/Fabricio_LG1_gLTF/converted.gltf', glb)
  })
