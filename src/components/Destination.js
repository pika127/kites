import React from 'react'
import './Destination.css'
import DesImage1 from '../assets/des.jpg';
import DesImage2 from '../assets/des2.jpg';
import DesImage3 from '../assets/des3.jpg';
import DesImage4 from '../assets/des4.jpg';
const Destination = () => {
  return (

    <div className="destination">
    <h1>Popular Destinations</h1>
    <p>Tours give you opportunity to see a lot , within a time frame.</p>
    <div className='first-des'>
      <div className='des-text'>
        <h2>Magiclakecamp, Faiyum, Egypt </h2>
        <p>Desert safari with amazing sky 
          We provide private camping and safari trips.<br/>Make your next trip awesome <br/>Just amazing place for adults and kids you can make a lot of activities and enjoy the view of magic lake</p>
      </div>
      <div className='des-image'>
        <img src={DesImage1} alt="img" />
        <img src={DesImage2} alt="img" />
      </div>
    </div>
    <div className='first-des-reverse'>
      <div className='des-text'>
        <h2>Magiclakecamp </h2>
        <p>A magical place stranded in the middle of the desert behind the sand dunes of Wadi Al-Rayan where we.<br/>Get ready for unforgettable Desert Adventure</p>
      </div>
      <div className='des-image'>
        <img src={DesImage3} alt="img" />
        <img src={DesImage4} alt="img" />
      </div>
    </div>
  </div>
  )
}

export default Destination