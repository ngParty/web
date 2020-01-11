import { rootStyles, itemStyles } from './masonry-gallery.styles'

export type GalleryImage = { src: string; title?: string }
export const MasonryGallery = (props: { images: GalleryImage[] }) => {
  const { images } = props

  return (
    <>
      <style jsx>{rootStyles}</style>
      <div className="masonry">
        {images.map((img) => {
          return <MasonryItem key={img.src} {...img} />
        })}
      </div>
    </>
  )
}

const MasonryItem = (props: GalleryImage) => {
  const { src, title } = props
  const description = title || `last ngBigParty in pictures`

  return (
    <>
      <style jsx>{itemStyles}</style>
      <div key={src} className="masonry__item">
        <amp-img
          className="contain"
          src={src}
          layout="fill"
          alt={description}
        />
      </div>
    </>
  )
}
