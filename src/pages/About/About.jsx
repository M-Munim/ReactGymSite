import React from 'react'
import Header from '../../components/Header'
import headerImg from '../../assets/headerImg.jpg'
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title={"About Us"} image={headerImg}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat doloremque ex ipsum quam tempora quod cumque, cum et ducimus ut.</Header>


      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={about1} alt="" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! Debitis expedita quasi doloremque possimus ipsam quidem, a id.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! Debitis expedita quasi doloremque possimus ipsam quidem, a id.</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-image">
            <img src={about2} alt="" />
          </div>

          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! Debitis expedita quasi doloremque possimus ipsam quidem, a id.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! </p>
          </div>
        </div>
      </section>


      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! Debitis expedita quasi doloremque possimus ipsam quidem, a id.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima laboriosam, temporibus, totam labore tenetur aliquam, distinctio quibusdam culpa recusandae veniam! Debitis expedita quasi doloremque possimus ipsam quidem, a id.</p>
          </div>

          <div className="about_section-image">
            <img src={about3} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About