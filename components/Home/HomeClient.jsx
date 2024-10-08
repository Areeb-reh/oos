import React , {useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const HomeClient = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardPosition < windowHeight - 50) {
                    card.classList.add('slide-in');
                    card.classList.remove('slide-out');
                } else {
                    card.classList.remove('slide-in');
                    card.classList.add('slide-out');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
    <div className='homeClient '>
        <div className='content'>
            <h6>What our <br/> clients say</h6>
            <button>More Testimonial</button>
        </div>
        <div className=''>
            {/* <img/>
            <p></p>
            <NavLink></NavLink>
            <h6></h6>
            <p></p> */}
             {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    className="card"
                >
                    Card {index + 1}
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default HomeClient