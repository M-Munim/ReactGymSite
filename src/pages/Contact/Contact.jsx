import Header from '../../components/Header'
import img from "../../assets/headerImg.jpg"
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={img}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure deleniti, repudiandae nostrum velit exercitationem dignissimos officiis minus fugit. Doloribus ipsum eum laborum rerum recusandae accusantium neque? Soluta rerum laudantium id?
            </Header>

            <section className="contact">
                <div className="container contact_container">
                    <div className="contact_wrapper">
                        <a href="mailto:support@muhammadmunimoff330@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>

                        <a href="http://m.me/" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>

                        <a href="https://wa.me/+923302021926" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact