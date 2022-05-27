import os from 'os'
import bin from '@/bin'
import fs from 'fs-extra'
import { spawn } from 'child_process'
import { Converter } from '@/types'
import { convertBase } from './convert-base'

export const fbx: Converter = async (file, accompaniment) => {
  const OS = os.type() as 'Darwin' | 'Windows_NT' | 'Linux'
  const tool = bin[OS].fbx
  await fs.chmod(tool, 0o755)
  return await convertBase(file, (origin, destination) => new Promise<void>((resolve, reject) => {
    const childProcess = spawn(tool, ['-b', origin, '-o', destination])
    childProcess.on('close', () => resolve())
    childProcess.on('error', () => reject(new Error('Conversion error')))
  }), accompaniment)
}
