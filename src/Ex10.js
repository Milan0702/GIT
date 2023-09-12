//create a react app which displays images using map function.
import React from 'react'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'
const Ex10 = () => {
    const images=[
        {
            // id:1,
            pic:cat1
        },
        {
            // id:2,
            pic:cat2
        },
        {
            // id:3,
            pic:cat3
        },
        cat1,cat2
    ];
  return (
    <div>
        {images.map((val)=>{
            return <img src={val.pic} height="200px" width="200px" alt='logo'/>
        }
        )}
    </div>
  )
}

export default Ex10