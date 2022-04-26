import fs from 'fs-extra'
import converter from './converter'

const file = fs.readFileSync('/Users/mihailpraslov/Downloads/model/model.dae')
const accompaniment = fs.readFileSync('/Users/mihailpraslov/Downloads/model/acc.zip')

converter(file, accompaniment)
  .then((glb) => {
    return fs.writeFile('/Users/mihailpraslov/Desktop/converted.glb', glb)
  })
