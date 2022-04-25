import { Detector } from '@/types'

export const fbx: Detector = (file) => {
  const fileString = file.toString('utf-8')
  if (fileString.slice(0, 50).includes('Kaydara FBX Binary')) {
    return true
  } else return fileString.includes('FBXHeaderExtension:')
}
