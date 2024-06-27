import React from 'react'
import styles from './making.module.scss'

const Making = () => {

    const data=[
        {
            image:"/images/making1.png",
            para:"Charging Points"
        },
        {
            image:"/images/making2.png",
            para:"Live Bus Tracking"
        },
        {
            image:"/images/making3.png",
            para:"Fire Extinguishers"
        },
        {
            image:"/images/making4.png",
            para:"Blanket"
        },
        {
            image:"/images/making5.png",
            para:"Luggage Safety"
        },
        {
            image:"/images/making6.png",
            para:"Water Bottle"
        },
    ]
  return (
    <section className='py-3'>
       <div className="container">
       <div className="row justify-content-center">
        <div className="col-10">
        <div className="container">
            <div className="row g-4">
            <div>
                <div>
                <img src="" alt="" />
                </div>
                <div>
                    <div className='d-flex gap-3'>
                     <div>
                     <img src="/images/makinghead.png" alt="" />
                     </div>
                        <div>
                        <h2 className={styles.makinghead}>Making your bus journey better</h2>
                         <p className={styles.makingpara}>Check out all our bus amenities</p>
                        </div>
                    </div>
                </div>
               

            </div>
             {
                data.map((item,index)=>(
                    <>
                    <div className="col-lg-4">
                    <div className={styles.chargecard}>
                  
                        <div className='d-flex justify-content-between align-items-center gap-4'>
                            <div className={styles.makebg}>
                                <img src={item?.image}alt="" className={styles.making1}/>
                            </div>
                            <p className={styles.maketxt}>{item?.para}</p>
                              <img src="/images/chargrbg.png" alt="" className='text-end'/>
                        </div>
                    </div>
                </div>
                    </>
                ))
             }
            </div>
        </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Making