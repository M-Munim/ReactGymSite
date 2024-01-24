import img from '../assets/valImg.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
    return (
        <section className="values">
            <div className="container values_container">
                <div className="values_left">
                    <div className="values_image">
                        <img src={img} alt="values img" />
                    </div>
                </div>
                <div className="values_right">
                    <SectionHead icon={<GiCutDiamond />} title="Values" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quibusdam dolores doloribus! Ut, natus illo obcaecati aspernatur maxime repellat ea, ratione doloremque, perferendis placeat qui?</p>

                    <div className="values_wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return <Card className="values_value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values