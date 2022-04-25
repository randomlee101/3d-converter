import os from 'os'
import bin from '@/bin'
import fs from 'fs-extra'
import { spawn } from 'child_process'
import { Converter } from '@/types'
import { convertBase } from './convert-base'

export const fbx: Converter = async (file) => {
  const OS = os.type() as 'Darwin' | 'Windows_NT' | 'Linux'
  const tool = bin[OS].fbx
  await fs.chmod(tool, 0o755)
  return await convertBase(file, async (origin, destination) => {
    const childProcess = spawn(tool, ['-b', origin, '-o', destination])
    await new Promise<void>((resolve) => childProcess.on('close', () => resolve()))
  })
}
