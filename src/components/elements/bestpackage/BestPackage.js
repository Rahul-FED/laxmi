"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './bestpackage.module.scss'

const BestPackage = () => {
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
    <section className={styles.bestpackage}>
      <div className="container">
        <div className="row">
         
<div className="d-flex align-items-center gap-3">
  <div className="d-flex align-items-center">
    <img src="/images/packages.png" alt="" />
  </div>
  <h2 className={styles.besthead}>Best Packages For You</h2>
</div>
          <Slider {...settings}>
            <div className="col">
              <div className={styles.haricard}>
                <div className={styles.innderadv}>
                <img src="/images/bestpackage1.png" alt="bestpackage1" className="w-100"/>
                <div className={styles.advtext}>Adventure awaits; shot of a young mountains
                <div className={styles.viewboxend}>
                 <div className="d-flex gap-3 align-items-center pt-2">
                 <p className={styles.moretxt}>View More</p>
                 <div className={styles.viewmorebox}>
                 <img src="/images/viewmore.png" alt="" className={styles.viewmoreimg}/>
                 </div>
                 </div>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <div className={styles.innderadv}>
                <img src="/images/bestpackage2.png" alt="bestpackage1" className="w-100"/>
                <div className={styles.advtext}>Adventure awaits; shot of a young mountains
                <div className={styles.viewboxend}>
                 <div className="d-flex gap-3 align-items-center pt-2">
                 <p className={styles.moretxt}>View More</p>
                 <div className={styles.viewmorebox}>
                 <img src="/images/viewmore.png" alt="" className={styles.viewmoreimg}/>
                 </div>
                 </div>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <div className={styles.innderadv}>
                <img src="/images/bestpackage3.png" alt="bestpackage1" className="w-100"/>
                <div className={styles.advtext}>Adventure awaits; shot of a young mountains
                <div className={styles.viewboxend}>
                 <div className="d-flex gap-3 align-items-center pt-2">
                 <p className={styles.moretxt}>View More</p>
                 <div className={styles.viewmorebox}>
                 <img src="/images/viewmore.png" alt="" className={styles.viewmoreimg}/>
                 </div>
                 </div>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={styles.haricard}>
                <div className={styles.innderadv}>
                <img src="/images/bestpackage4.png" alt="bestpackage1" className="w-100"/>
                <div className={styles.advtext}>Adventure awaits; shot of a young mountains
                <div className={styles.viewboxend}>
                 <div className="d-flex gap-3 align-items-center pt-2">
                 <p className={styles.moretxt}>View More</p>
                 <div className={styles.viewmorebox}>
                 <img src="/images/viewmore.png" alt="" className={styles.viewmoreimg}/>
                 </div>
                 </div>
                </div>
                </div>
                </div>
              </div>
            </div>
           
           
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default BestPackage
