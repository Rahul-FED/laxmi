"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './our.module.scss'

const Ourpopular = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.left}
        onClick={onClick}
      >
        {/* <i className="fa fa-arrow-left"></i> */}
        <img src="/images/left.png" alt="" className={styles.leftimg}/>
      </div>
    );
  }

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.right}
        onClick={onClick}
      >
        {/* <i className="fa fa-arrow-right"></i> */}
        <img src="/images/right.png" alt="" className={styles.rightimg}/>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className="pb-4">
      <div className="container">
        <div className="row">
          <h2 className={styles.popualarhead}>Our Popular Destinations</h2>
          <p className={styles.popularpara}>Explore the most visited places in India</p>

          <Slider {...settings}>
            <div className="col">
              <div className={styles.haricard}>
                <img src="/images/haridwar.png" alt="Haridwar" className="w-100"/>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <img src="/images/rishikesh.png" alt="Haridwar" className="w-100"/>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <img src="/images/gorakhpur.png" alt="Haridwar" className="w-100"/>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <img src="/images/manali.png" alt="Haridwar" className="w-100"/>
              </div>
            </div>
           
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Ourpopular
