import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <footer>
        <div className='flex'>
          <div className='left-box'>
            <h2 className='footer-heading'>Contact Us</h2>
            <p className='mail'>Email: </p>
            <p className='center'>
              <a href='mailto:codechef.adgitm@adgitmdelhi.ac.in'>
                codechef.adgitm@adgitmdelhi.ac.in
              </a>
            </p>
            <p className='center'>
              <a
                href='mailto:codechefadgitmchapter@gmail.com
'
              >
                codechefadgitmchapter@gmail.com
              </a>
            </p>
            <p className='mail'>Phone: </p>
            <p className='center'>
              <a href='tel:+917355743158'>Ansh Saxena: +917355743158</a>
            </p>
            <p className='center'>
              <a
                href='tel:+91 92131 16476
'
              >
                Tanisha Bansal: +919213116476
              </a>
            </p>
            <p className='center'>
              <a href='tel:+91 99539 30377'>Mansi Sharma: +919953930377</a>
            </p>
          </div>
          <div>
            <h2 className='footer-heading follow'>Follow Us</h2>
            <ul className='social-links'>
              <li>
                <a
                  href='https://www.linkedin.com/company/codechefadgitm/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-linkedin fa-xl'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/hackathon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-instagram fa-xl'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/codechefadgitm/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-x-twitter fa-xl'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>
            &copy; {new Date().getFullYear()} Live the code Hackathon 2.0 All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
