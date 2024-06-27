import React from 'react'
import styles from "./footer.module.scss";
import Link from 'next/link';

const Footer = () => {
  return (
    <section className={styles.footercover}>
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <p className={styles.footerheading}>Discover</p>
          <Link href="#" className={styles.links}><li>Sign In / Sign Up</li></Link>
          <Link href="#" className={styles.links}><li>Service</li></Link>
          <Link href="#" className={styles.links}><li>Hotel</li></Link>
          <Link href="#" className={styles.links}><li>Blog</li></Link>

        </div>
        <div className="col-lg-2">
          <p className={styles.footerheading}>Help & Support</p>
          <Link href="#" className={styles.links}><li>Feedback</li></Link>
          <Link href="#" className={styles.links}><li>Track Refund Status</li></Link>
          <Link href="#" className={styles.links}><li>Sitemap</li></Link>
          <Link href="#" className={styles.links}><li>FAQs</li></Link>

        </div>
        <div className="col-lg-2">
          <p className={styles.footerheading}>Help & Support</p>
          <Link href="#" className={styles.links}><li>Sign In / Sign Up</li></Link>
          <Link href="#" className={styles.links}><li>Service</li></Link>
          <Link href="#" className={styles.links}><li>Hotel</li></Link>
          <Link href="#" className={styles.links}><li>Blog</li></Link>

        </div>
        <div className="col-lg-2">
          <p className={styles.footerheading}>Help & Support</p>
          <Link href="#" className={styles.links}><li>Sign In / Sign Up</li></Link>
          <Link href="#" className={styles.links}><li>Service</li></Link>
          <Link href="#" className={styles.links}><li>Hotel</li></Link>
          <Link href="#" className={styles.links}><li>Blog</li></Link>

        </div>
        <div className="col-lg-3">
          <p className={styles.footerheading}>Write to Us</p>
          <p >Sangam Vihar road. Jagatpur Extension Wazirabad ,Jagatpur Extension Wazirabad, Delhi,Delhi -110054</p>

        </div>
      </div>
    </div>
       <hr className='mt-2' />
      <div className="container">
        <div className="row align-items-center ">
        <div className='col-lg-9'>
        <div className='d-flex align-items-center gap-4'>
        <p className='m-0'>We’re Social Connect with us on </p>
        <div>
        <img src="/images/bottomicon.png" alt=""  className={styles.bottomicon}/>
        </div>
        </div>
       </div>
       <div className="col-lg-3">
       <div className="">
       <div className={styles.wrappergoogle}>
        <img src="/images/google.png" alt="" />
        <img src="/images/apple.png" alt="" />
       </div>
       </div>

       </div>
        </div>
      </div>
       <hr />
       <div className="container">
        <div className="row">
        <div className='d-flex gap-4'>
        <p >@2024 Laxmi Holidays</p>
        <Link href="#" className={styles.links}><li>Privacy Policy</li></Link>
        <Link href="#" className={styles.links}><li>Tearm & Conditions</li></Link>
        </div>

        </div>
       </div>
    </section>
  )
}

export default Footer