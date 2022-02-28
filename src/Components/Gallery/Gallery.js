import React from 'react'
import useFirestore from "../../hooks/useFirestore"
import "./Gallery.css"
import {LazyLoadImage} from "react-lazy-load-image-component" 

const Gallery = () => {
  const {docs}=useFirestore("images");
  console.log(docs)
  return (
    <div className="gallery-container">"<div className="gallery">{docs && docs.map(doc => (
      <div className="pics" key={doc.id}>
        <LazyLoadImage effect="blur" src={doc.url} alt="uploaded" title={doc.id} />
      </div>

    ))}</div>      </div>
  )
}

export default Gallery