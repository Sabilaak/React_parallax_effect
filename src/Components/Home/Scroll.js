import React from 'react'
import {Parallax} from 'react-parallax'
import img1 from'../Images/img1.jpg';
import img2 from'../Images/img2.jpg';
import img3 from'../Images/img3.jpg';
import img4 from'../Images/img4.jpg';
import img5 from'../Images/img5.jpg';

const Scroll = () => {
  return (
    <div>
        <Parallax strength={600} bgImage={img1} scrollAxis="horizontal">
    <div className='content'>
        <div className='text_content'>Normall</div>
    </div>
</Parallax>
<Parallax strength={400} blur={{min:-5, max:15}} bgImage={img2} scrollAxis="horizontal">
    <div className='content'>
        <div className='text_content'>Blur</div>
    </div>
</Parallax>
<Parallax strength={-600} bgImage={img3} scrollAxis="horizontal">
    <div className='content'>
        <div className='text_content'>Reverse</div>
    </div>
</Parallax>
<Parallax strength={500} bgImage={img4} scrollAxis="horizontal">
    <div className='content'>
        <div className='text_content'></div>
    </div>
</Parallax>
<Parallax strength={800} bgImage={img5} scrollAxis="horizontal">
    <div className='content'>
        <div className='text_content'></div>
    </div>
</Parallax>
    </div>
  )
}

export default Scroll