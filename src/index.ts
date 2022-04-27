import fs from 'fs-extra'
import converter from './converter'

const acc = fs.readFileSync('/Users/mihailpraslov/Downloads/retest/obj/acc.zip')
const file = fs.readFileSync('/Users/mihailpraslov/Downloads/retest/obj/model.obj')

converter(file, acc)
  .then((glb) => {
    return fs.writeFile('/Users/mihailpraslov/Downloads/retest/obj/model.glb', glb)
  })
