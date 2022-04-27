declare module 'gltf-pipeline' {
  export function gltfToGlb(gltf: Buffer): Promise<{ glb: Buffer }>
  export function glbToGltf(glb: Buffer): Promise<{ gltf: object }>
}
