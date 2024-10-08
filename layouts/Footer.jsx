import React from 'react'
import "../styles/footer.css"
// import image from "../images/OSS_logo.png";
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-image'>
          {/* <img src={image} alt='' style={{height:"100vh"}}/> */}
          <h1>OSS<span>.</span></h1>
        </div>
        <hr className='footer-hr' />
        <div className='footer-detail'>
          <p>LinkedIn   Instagram</p>
          <p>Privacy & Cookie Policy</p>
          <p>© 2024 On Screen Solution | All right reserved.</p>
        </div>
      </div>
    </>

  )
}

export default Footer