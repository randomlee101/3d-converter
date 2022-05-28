import fs from 'fs-extra'
import path from 'path'
import converter from '../src/converter'
import { validateBytes } from 'gltf-validator'

test('GLTF Converter', async () => {
  const originalModel = await fs.readFile(path.join(__dirname, 'assets', 'gltf', 'model.gltf'))
  const convertedModel = await converter(originalModel)
  const validation = validateBytes(new Uint8Array(convertedModel))
  await expect(validation).resolves.toMatchObject({
    issues: {
      numErrors: 0,
      numWarnings: 0,
      numInfos: 1,
      numHints: 0
    }
  })
})
