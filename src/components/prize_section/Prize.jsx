import React from 'react';
import './prize.css'
import trophy from './images/trophy.png';
import second from './images/2nd.png';
import third from './images/third.png';
import other from './images/other.png';
import simple from './images/simple.png';

export default function Prize() {
  return (
    <div>
      <div className="prize-section">
      <div className='prizeTotal'>
        <h1>Total prize pool <br/><span>$5000</span></h1>
      </div>
        <div className="container1">
            <div className="prize1 prize">
                <div className="first-cup rotate">
                    <img src={trophy} alt=""/>
                </div>
                <h2>Overall First</h2>
                <a href="">T&C</a>
                <p>Coil Prize, SAWO community box, Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 1150 coupon - applicable on all courses, Clerky LifeTime Package worth $800, $35</p>
            </div>

            <br/>
            <br/>
            
            <div className="prize2 prize">
                <br/>
                <br/>
                <h2>Overall Second</h2>
                <div className="first-cup second-cup">
                    <img src={second} alt=""/>
                </div>
                <a href="">T&C</a>
                <p>Coil Prize, SAWO community box, Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 800 coupon - applicable on all courses, $20</p>
            </div>
            <br/>
            <br/>
            <div className="prize3 prize">
                <div className="third-cup">
                    <img src={third} alt=""/>
                </div>  
                <h2>Overall Third</h2>
                <a href="">T&C</a>
                <p>Coil Prize, SAWO community box, Devfolio Swag kit, Taskade LifeTime Access, Streamyard Essential Plan, Egghead 1 year plan (all the courses), GFG 500 coupon - applicable on all courses, $15</p>
            </div>
            <br/>
            <br/>
            <div className="prize45 prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Solana</h2>
                <a href="">T&C</a>
                <p>rising teknoking: $250 <br/>$USDC 250 for the best project that goes into depth, demonstrating higher-order code. <br/> master glasseater: $500<br/>$USDC 500 for the best advanced project that is almost ready for full-time development.</p>
            </div>
            <br/>
            <br/>
            <div className="polygon prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Polygon</h2>
                <h2>Hackathon Season Prize</h2>
                <a href="">T&C</a>
                <p>Polygon will be giving away a cash prize for the best hack built on top of Ethereum ($200) during the hackathon. For teams that integrate Polygon in their hacks as well the prize money will be higher (Rs.15000) along with eligibility for internship/full-time role interviews and a chance to land seed funding of upto 5000 USD

                </p>
            </div>
            <br/>
            <br/>    
            <div className="tezos prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Etherenum</h2>
                <h2>Season Prizer</h2>
                <a href="">T&C</a>
                <p>$150 for best Dapp built on Tezos,Continuity grant opportunity up to 5,000 USD for an outstanding project and Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits.</p>
            </div>
            <br/>
            <br/>
            <div className="filecoin prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Ethereum + Polygon Track</h2>
                <h2>Hackathon Season Prize</h2>
                <a href="">T&C</a>
                <p>Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Best hack built on Etherenum + polygon will be awarded a cash prize of $200</p>
            </div>
            <br/>
            <br/>
            <div className="sawo prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Filecoin</h2>
                <a href="">T&C</a>
                <p>Read about the bounty details and find code templates for Filecoin here: <a href="https://nsb.dev/filecoin-bounty" target="_blank">https://nsb.dev/filecoin-bounty</a>.Best use of Filecoin and/or IPFS: $250</p>
            </div>
            <br/>
            <br/>
            <div className="celo prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Replit</h2>
                <h2>Season Prize</h2>
                <a href="">T&C</a>
                <p>Winning Project deployed on Replit: $50</p>
            </div>
            <br/>
            <br/>
            {/* <div className="coil prize">
                <div className="others">
                    <img src={other} alt=""/>
                </div>
                <h2>Coil API Prize</h2>
                <a href="">T&C</a>
                <p>3 Coil Prizes for overall winners and Coil Prizes for all who integrate coil API</p>
            </div> */}
            {/* <br/>
            <br/>
            <div className="more prize">
                <div className="others">
                    <img src={simple} alt=""/>
                </div>
                <h2>More Prizes</h2>
                <a href="">T&C</a>
                <p>More prizes will be revealed soon..</p>
            </div>  
            </div> */}
        </div>

        <div className='shape'>
            
        </div>
    </div>
    </div>
  )
}
