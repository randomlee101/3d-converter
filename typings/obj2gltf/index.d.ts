declare module 'obj2gltf' {
  function obj2gltf(path: string, options: { binary: true }): Promise<Buffer>
  export default obj2gltf
}
