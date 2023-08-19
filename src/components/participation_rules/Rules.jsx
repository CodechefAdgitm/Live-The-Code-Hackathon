import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Rules.css'
import codeImg from '../../assets/images/codeimg.png'

export default function Rules() {
  return (
    <section className='colorBlack' id='participation'>
      <div className='heading'>
        <h2>
          {' '}
          <div class='container'>
            <p class='glitch'>
              <span aria-hidden='true'>Participation Rules</span>
              Participation Rules
              <span aria-hidden='true'>Participation Rules</span>
            </p>
          </div>
        </h2>
      </div>
      <div className='participation-rules'>
        <div className='image-container'>
          <img src={codeImg} alt='hackathon' className='image' />
        </div>

        <div className='points-container'>
          <ul className='rules-list'>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> Team size: 1-4 members
            </li>
            <li>
              {' '}
              <i class='fa-solid fa-play fa-2xs'></i> Individual participation
              is allowed
            </li>
            <li>
              {' '}
              <i class='fa-solid fa-play fa-2xs'></i> Any participant will be
              part of only 1 team
            </li>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> Teams can choose any of
              the listed themes and build a working prototype at the end of the
              coding phase
            </li>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> No development may start
              before the actual date and time of the event
            </li>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> Any teams that violate
              this rule will be automatically disqualified
            </li>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> Objection to the codes
              will be processed accordingly by the designated mentor
            </li>
            <li>
              <i class='fa-solid fa-play fa-2xs'></i> Breach of the code of
              conduct by one will result in the disqualification of the whole
              team
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
