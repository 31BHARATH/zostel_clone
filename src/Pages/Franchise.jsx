import React from 'react'
import { franchise } from '../data';
import './Franchise.css';
export default function Franchise() {
  return (
    <div>
     <section className="app3">
      <div className="container3">
      <h1 className="h3">Zostel Franchises</h1>
        <div className="containers3">
        <p> Lead a passionate life without compromising on your ambitions or revenue.Lease a property or 
          repurpose your existing business to open a Zostel franchise .
        </p>
        </div>
        <div className="cards3 flex flex-wrap">
          {
            franchise.map((card, i) => (
              <div key={i} className="card">
              <h3>
                {card.title1}
              </h3>
              <h4>
                {
                  card.title2
                }
              </h4>
              <p>
                {
                  card.text
                }
              </p>
              <button className="btn3">Explore</button>
            </div>
            ))
          }
        </div>
      </div>
     </section>
    </div>
  )
}
