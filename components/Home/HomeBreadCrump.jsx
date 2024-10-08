import React, { useState, useEffect ,  useRef } from 'react';
import "../../styles/home.css";
import image1 from "../../images/work-dposit.jpg"
import image2 from "../../images/workHBNO.png"
import image3 from "../../images/workHBNO2.png"

const HomeBreadCrump = () => {
    const images = [
        image1,
        image2,
        image3
    ];

    // State to hold the index of the current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to change the image
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        // Set a timer to change the image every 2 seconds
        const timer = setInterval(changeImage, 2000);

        // Clear the timer on component unmount
        return () => clearInterval(timer);
    }, [images.length]);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const section1 = section1Ref.current;
        const section2 = section2Ref.current;
  
        if (section1 && section2) {
          const rect1 = section1.getBoundingClientRect();
          const rect2 = section2.getBoundingClientRect();
  
          if (rect1.bottom <= 0) {
            section2.style.position = 'fixed';
            section2.style.top = '0';
          } else {
            section2.style.position = 'absolute';
            section2.style.top = '100vh';
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className="containerr  homeBreadCrump mb-5" id='homeBreadCrump'>
            <div className="homeBreadCrump-content">
                <h1 className="homeBreadCrump-h1">
                    <span className="left-text">EMPOWERING</span>
                    <span className="right-text">IN THE</span>
                </h1>
                <h1 className="homeBreadCrump-h1 mb-5">
                    <span className="left-text">BRAND</span>
                    <span className="right-text">DIGITAL AGE</span>
                </h1>
                <div className='homeBreadCrump-img'>
                    <img src={images[currentImageIndex]} alt="Sliding Images" style={{ height: "15vh" }} />
                </div>
            </div>
        </div>

    )
}

export default HomeBreadCrump