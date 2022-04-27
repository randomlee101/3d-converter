import { Detector } from '@/types'

export const glb: Detector = (file) => {
  const fileString = file.toString('utf-8').slice(0, 50)
  return /^glTF((.|\s)*)$/.test(fileString)
}
