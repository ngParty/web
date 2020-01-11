import { MasonryGallery, GalleryImage } from './shared'

const getPath = (src: string) => `big-party-v/img/gallery/${src}`

const data: GalleryImage[] = Array(9)
  .fill('')
  .map((value, idx) => {
    return {
      src: getPath(`${idx + 1}.jpg`),
      title: '',
    }
  })

export const Gallery = () => {
  return <MasonryGallery images={data} />
}
