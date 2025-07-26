import React from 'react'
import PageHeader from '../components/Headers/PageHeader'
import GalleryCarousel from '../components/Gallery/GalleryCarousel'

const Gallery = () => {
  return (
    <>
    <PageHeader
      title="Galerija"
      subtitle="Oglejte si arhiv naših fotografij, ki prikazujejo dejavnosti in dogodke društva."
    />
    <GalleryCarousel />
    
    </>

  )
}

export default Gallery