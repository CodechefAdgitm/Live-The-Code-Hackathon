import React from 'react'
import CClogo from '../../assets/images/codechef-logo.jpg'
import Elixerlogo from '../../assets/images/Elixer.jpeg'
import './About.css'

export default function About() {
  return (
    <section className='colorBlack' id='about'>
      <div className='wpr'>
        <div className='heading'>
          <h2>
            {' '}
            <div class='container'>
              <p class='glitch'>
                <span aria-hidden='true'>About</span>
                About
                <span aria-hidden='true'>About</span>
              </p>
            </div>
          </h2>
        </div>
        <div className='cc-info'>
          <div className='cc-img'>
            <div className='filter'>
              <img src={CClogo} alt='About Us' />
            </div>
          </div>
          <div className='cc-text'>
            <h1>CodeChef</h1>
            <p classname='about'>
              We, CodeChef ADGITM chapter is a close-knit community of diligent
              coders who come together and share best practices, new coding
              accomplishments, and plenty of resources to become the best
              problem solvers. We aim to establish and nurture young coding
              enthusiasts. Not only this but it also helps those who are novice
              to the world of computer programming. Different events, which not
              only includes coding contests and hackathons, aims to establish a
              strong coding culture amongst the student community. We aim to
              create an awareness of the potency that coding holds. Providing a
              great network and a nurturing mentorship have always been our
              thriving forces.
            </p>
          </div>
        </div>

        <div className='cc-info reverse'>
          <div className='cc-text cc-right'>
            <h1>Elixir</h1>
            <p classname='about'>
              Elixir aces as an unparalleled community consisting of the
              greatest minds of our college. It has people ranging from tech
              domains to non-tech sectors, all of whom are competent in their
              respective areas and strive together to make Elixir an astounding
              entity. With the perfect space to learn, collaborate, and explore,
              you are bound to experience many "Hello World" moments here. With
              our aim to provide our students an environment that fosters
              self-growth, we are proud to call ourselves a community FOR THE
              STUDENTS, BY THE STUDENTS, AND OF THE STUDENTS.
            </p>
          </div>
          <div className='cc-img'>
            <div className='filter'>
              <img src={Elixerlogo} alt='About Us' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
