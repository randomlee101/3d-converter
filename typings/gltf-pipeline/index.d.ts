declare module 'gltf-pipeline' {
  export function gltfToGlb(gltf: Buffer): Promise<{ glb: Buffer }>
}
