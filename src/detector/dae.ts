import { Detector } from '@/types'

export const dae: Detector = (file) => {
  const fileString = file.toString('utf-8')
  return fileString.slice(0, 100).includes('<COLLADA')
}
