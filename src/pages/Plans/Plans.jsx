import React from 'react'
import Header from '../../components/Header'
import img from "../../assets/headerImg.jpg"
import Card from '../../UI/Card'
import { plans } from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
      <Header title="Membership Plan" image={img}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam, aliquam, molestiae velit voluptate ratione enim excepturi voluptatibus sequi atque, dignissimos illo ea adipisci.
      </Header>

      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/month</h2>
                <h4>Features</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section >
    </>
  )
}

export default Plans