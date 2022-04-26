import fs from 'fs-extra'
import converter from './converter'

const file = fs.readFileSync('/Users/mihailpraslov/Downloads/Textures/Luxury_House.obj')
const accompaniment = fs.readFileSync('/Users/mihailpraslov/Downloads/Textures/acc.zip')

converter(file, accompaniment)
  .then((glb) => {
    return fs.writeFile('/Users/mihailpraslov/Desktop/converted.glb', glb)
  })
