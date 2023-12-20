const images = new Map<string, string>()

const loadImages = () => {
  const modules = import.meta.glob('@/assets/imgs/**/*.{png,jpg,webp}', {
    as: 'url',
    eager: true
  })

  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.'))
    images.set(name, modules[fileName])
  }
}

const getImageUrl = (name: string) => {
  return images.get(name)
}

export { loadImages, getImageUrl }
