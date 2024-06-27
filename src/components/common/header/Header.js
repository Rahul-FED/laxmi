import React from 'react'
import MainNavbar from '../mainnavbar/MainNavbar'
import styles from './header.module.scss'

const Header = () => {
  return (
    <>
        <MainNavbar/>
        <section className={styles.sectionwrapper}>
     <div className="container">
     <div className={styles.innersection}>
        <div className="row g-3">
            <div className="col">
                <div>
                    <h1 className={styles.h1head}>Where would you like to <span className={styles.go}>GO</span> today ?</h1>
                </div>
                <div className="row  ">
                  <div className="col-lg-6 ">
                  <div className={styles.inputwrapcover}> 
                  <div className={styles.inputwrap}>
                      <div className='d-flex justify-content-between '>
                        <div className={styles.imgwrap}>
                        <img src="/images/location.png" alt="" className={styles.locationimg}/>
                        </div>
                        <input type="text"
                        placeholder='Enter Departure'
                        className={styles.inputbox}
                         />
                      </div>
                    </div>
                    <div className={styles.inputwrap}>
                      <div className='d-flex justify-content-between'>
                        <div className={styles.imgwrap}>
                        <img src="/images/location.png" alt="" className={styles.locationimg}/>
                        </div>
                        <input type="text"
                        placeholder='Enter Destination'
                        className={styles.inputbox}
                         />
                      </div>
                    </div>
                  </div>
                  
                  </div>
                  <div className="col-lg-6  ">
                 <div className={styles.rahul}>
                 <div className={styles.inputwrapcover}>
                   <div className=''>
                    <div className={styles.calwrap}>
                      <p className={styles.calendar}>Mon <br />11</p>
                      <p className={styles.calendar}>Tue <br />12</p>
                      <p className={styles.calendar}>Wed <br />13</p>
                      <div>
                      <img src="/images/calendar.png" alt="" className={styles.calendarimg} />
                      </div>
                    </div>
                    </div>
                    <div className=''>
                    <div className={styles.search}>
                    <div>
                    <img src="/images/search.png" alt="" />
                    </div>
                     <button className={styles.buttonsearch}>Search Buses</button>
                      <div>
                     
                      </div>
                    </div>
                    </div>
                   </div>
                 </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-lg-6">
          <div>
                    <p className={styles.optional}>Seat type (optional)</p>
                    <div className='d-flex gap-3'>
                      <button className={styles.seater}>Seater</button>
                      <button className={styles.sleeper}>Sleeper</button>
                    </div>
                  </div>
          </div>
          <div className="col-lg-6">
            <div className='d-flex align-items-center gap-3'>
            <input type="checkbox" />
            <p className='m-0'>AC buses only</p>
            </div>
          </div>
        </div>
        {/* <div>
      <img src="/images/bannerbus.png" alt="" className={styles.bannerbus}/>
      </div> */}
      </div>
      
    
     </div>
     
        </section>
    </>
  )
}

export default Header