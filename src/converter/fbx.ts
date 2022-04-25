import os from 'os'
import bin from '@/bin'
import fs from 'fs-extra'
import path from 'path'
import { spawn } from 'child_process'
import { Converter } from '@/types'

export const fbx: Converter = async (file) => {
  const OS = os.type() as 'Darwin' | 'Windows_NT' | 'Linux'
  const tool = bin[OS].fbx
  await fs.chmod(tool, 0o755)
  const tempDir = await fs.mkdtemp(`${os.tmpdir()}${path.sep}fbx2glb-convert`)
  const tempOriginPath = path.join(tempDir, 'fbx-model.fbx')
  const tempDestPath = path.join(tempDir, 'converted-to-glb-fbx-model.glb')
  await fs.writeFile(tempOriginPath, file)
  const childProcess = spawn(tool, ['-b', tempOriginPath, '-o', tempDestPath])
  await new Promise<void>((resolve) => childProcess.on('close', () => resolve()))
  const glbModel = await fs.readFile(tempDestPath)
  await fs.emptyDir(tempDir)
  await fs.rmdir(tempDir)
  return glbModel
}
