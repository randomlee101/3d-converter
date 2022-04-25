import Buffer from 'buffer'
import os from 'os'
import fs from 'fs-extra'
import path from 'path'

export const convertBase = async (file: Buffer, converter: (origin: string, destination: string) => Promise<void>) => {
  const tempDir = await fs.mkdtemp(`${os.tmpdir()}${path.sep}glb3dconvert`)
  try {
    const originPath = path.join(tempDir, 'origin')
    const destinationPath = path.join(tempDir, 'destination.glb')
    await fs.writeFile(originPath, file)
    await converter(originPath, destinationPath)
    const glbModel = await fs.readFile(destinationPath)
    await fs.emptyDir(tempDir)
    await fs.rmdir(tempDir)
    return glbModel
  } catch (e) {
    await fs.ensureDir(tempDir)
    await fs.emptyDir(tempDir)
    await fs.rmdir(tempDir)
    throw new Error('Could not convert file')
  }
}
