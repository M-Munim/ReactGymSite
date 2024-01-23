import { Link } from "react-router-dom"
import image from '../assets/mainImg.png'

const MainHeader = () => {
    return (
        <header className="main_header">
            <div className="container main_header-container">
                <div className="main_header-left">
                    <h4>#120DaysOfWorkOut</h4>
                    <h1>Join The Best Of The Fitness World</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias explicabo quas odio deleniti fuga esse, mollitia repellendus rerum laudantium.</p>

                    <Link to='/plans' className="btn lg">Get Started</Link>
                </div>

                <div className="main_header-right">
                    <div className="main_header-circle"></div>
                    <div className="main_header-image">
                        <img src={image} alt="Main Header Img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader