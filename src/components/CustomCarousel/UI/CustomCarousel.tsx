import { useState, useEffect } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { images } from "../mockData/images"
import './CustomCarousel.scss'

export const CustomCarousel = () =>  {
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ _, setPageInterval ] = useState<any>()

    useEffect(() => {
        const pagesTotal = 2
        const interval = setTimeout(() => {
    
            if(currentPage === pagesTotal) {
            setCurrentPage(0)
            } else setCurrentPage(currentPage + 1)
        },4000)
    
        setPageInterval(interval)
        return () => clearInterval(interval)
    }, [currentPage])


    return (

        <div className="carousel">
            <div className="carousel-container">
                <SwitchTransition>
                    <CSSTransition key={currentPage} timeout={700} classNames="fade" mountOnEnter unmountOnExit>
                        {
                            <img className='carousel-image' src = {images[currentPage]} alt="banner"/>
                            // <h3 style={{fontSize: '100px'}}>{`Content ${currentPage}`}</h3>
                        }
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
       
    )
}

export default CustomCarousel
