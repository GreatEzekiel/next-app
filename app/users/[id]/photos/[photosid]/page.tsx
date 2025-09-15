import React from 'react'

interface Props {
    params: {id: number; photosid: number; }
}
    

const PhotoPage = ({ params: {id, photosid }} : Props) => {
  return (
    <div>PhotoPage {id}{photosid}</div>
  )
}

export default PhotoPage