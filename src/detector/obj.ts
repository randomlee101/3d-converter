import { Detector } from '@/types'

export const obj: Detector = (file) => {
  const fileString = file.toString('utf-8')
  const rows = fileString.split('\n')
  for (let i = 0; i <= rows.length; i++) {
    const row = rows[i]
    if (!row) {
      continue
    }
    if (row.match(/v {2}(-?[0-9.]+) (-?[0-9.]+) (-?[0-9.]+)/)) {
      return true
    } else if (row.match(/vn (-?[0-9.]+) (-?[0-9.]+) (-?[0-9.]+)/)) {
      return true
    } else if (row.match(/vt (-?[0-9.]+) (-?[0-9.]+) (-?[0-9.]+)/)) {
      return true
    }
  }
  return false
}
