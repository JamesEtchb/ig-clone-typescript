import React, { useEffect, useState } from 'react'
import { Photo } from '../models/photo'
import PhotoView from '../component/PhotoView'
import './Feed.css'

function Feed() {
  //keeping track of an array type 'Photo' from model above
  const [photos, setPhotos] = useState<Photo[]>([])
  //pull the ig-clone-backend photos from localhost:3030
  useEffect(() => {
    fetch('http://localhost:3030/photos')
      .then((res) => res.json())
      .then((data: Photo[]) => {
        setPhotos(data)
      })
      .catch()
  }, [])

  return (
    <>
      <h1>The Feed</h1>
      <div>
        {photos.map((photo: Photo) => {
            // return <div><img src={photo.photoUrl} /></div>
            return <PhotoView key={photo._id} photo={photo} />
        })}
      </div>
    </>
  )
}

export default Feed
