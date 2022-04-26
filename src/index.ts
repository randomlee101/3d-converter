import fs from 'fs-extra'
import converter from './converter'

const file = fs.readFileSync('/Users/mihailpraslov/Desktop/original.dae')

converter(file)
  .then((glb) => {
    return fs.writeFile('/Users/mihailpraslov/Desktop/converted.glb', glb)
  })
