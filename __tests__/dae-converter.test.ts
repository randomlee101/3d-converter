import fs from 'fs-extra'
import path from 'path'
import converter from '../src/converter'
import { validateBytes } from 'gltf-validator'

test('DAE Converter', async () => {
  const originalModel = await fs.readFile(path.join(__dirname, 'assets', 'dae', 'model.dae'))
  const accompaniment = await fs.readFile(path.join(__dirname, 'assets', 'dae', 'accompaniment.zip'))
  const convertedModel = await converter(originalModel, accompaniment)
  const validation = validateBytes(new Uint8Array(convertedModel))
  await expect(validation).resolves.toMatchObject({
    issues: {
      numErrors: 0,
      numWarnings: 0,
      numInfos: 0,
      numHints: 0,
      messages: []
    }
  })
})
