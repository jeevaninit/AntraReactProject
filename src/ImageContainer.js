import React from 'react'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/banner.png';
import ImageItem from './ImageItem';

const ImageContainer = () => {
    const imageslist=[
        img1,
        img2,
        img3,
        img4,
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        img1, 

    ]
  return (
    <div className='imgitem'>
        {imageslist.map((imageelement,imgindex)=>
        <ImageItem 
        myindex={imgindex}
        imgitem={imageelement}
        />)}
    </div>
  )
}

export default ImageContainer