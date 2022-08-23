import { Photo } from '../models/photo'

const photoApiUrl = 'http://localhost:3030/photos/'

export async function updateLike(photoId: string) : Promise<number> {
  // PATCH /photos/{PHOTO_ID} with a body of { likes: 1 }

  const fetchPhotos = await fetch(photoApiUrl+photoId, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ likes: 1})
  })
  const photo: Photo = await fetchPhotos.json()
  const newLikes: number = photo.likes || 0
  return newLikes + 1
}

export async function getPhotos(): Promise<Photo[]> {
  try {
    const fetchPhotos = await fetch(photoApiUrl)
    const photoList: Photo[] = await fetchPhotos.json()
    return photoList
  } catch (err) {
    console.error(err)
    return [] //we have crashed but we can return an empty array
  }
}
