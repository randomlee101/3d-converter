import path from 'path'

export default {
  Darwin: {
    fbx: path.join(__dirname, 'Darwin', 'fbx')
  },
  Linux: {
    fbx: path.join(__dirname, 'Linux', 'fbx')
  },
  Windows_NT: {
    fbx: path.join(__dirname, 'Windows_NT', 'fbx.exe')
  }
}
