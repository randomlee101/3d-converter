import path from 'path'

export default {
  Darwin: {
    fbx: path.join(__dirname, 'Darwin', 'fbx'),
    dae: path.join(__dirname, 'Darwin', 'dae')
  },
  Linux: {
    fbx: path.join(__dirname, 'Linux', 'fbx'),
    dae: path.join(__dirname, 'Linux', 'dae')
  },
  Windows_NT: {
    fbx: path.join(__dirname, 'Windows_NT', 'fbx.exe'),
    dae: path.join(__dirname, 'Windows_NT', 'dae.exe')
  }
}
