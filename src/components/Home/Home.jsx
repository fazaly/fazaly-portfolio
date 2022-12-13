import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
            <div className='left top'>
                <h3>WELCOME TO MY WORLD</h3>
                <h1>
                Hi, I'm <span>Fazaly Rabbi</span>
                </h1>
                <h2>
                a
                <span>
                    <Typewriter words={[" Front-End Developer."," React JS Developer."," MERN Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </span>
                </h2>

                <p>Web developer from Chottogram, Bangladesh. I have rich experience in UI/UX design and building and customization and authorization and authentication, also I'm good at WordPress.</p>

                <div className='hero_btn d_flex'>
                    <div className='col_1'>
                        <h4>FIND WITH ME</h4>
                        <div className='button'>
                        <button className='btn_shadow' onClick={() => window.open('https://www.facebook.com/Kasem3D/', '_blank')}>
                            <i className="lni lni-facebook-filled"></i>
                        </button>
                        <button className='btn_shadow' onClick={() => window.open('https://www.linkedin.com/in/md-fazaly-rabbi-34b36b151/', '_blank')}>
                            <i className="lni lni-linkedin-original"></i>
                        </button>
                        <button className='btn_shadow' onClick={() => window.open('https://github.com/fazaly', '_blank')}>
                            <i className="lni lni-github-original"></i>
                        </button>
                        </div>
                    </div>
                    <div className='col_1'>
                        <h4>BEST SKILL ON</h4>
                        <button className='btn_shadow'>
                            <i className="lni lni-javascript"></i>
                            <h5 className="skill-title">JavaScript</h5>
                        </button>
                        <button className='btn_shadow'>
                            <i className="lni lni-react"></i>
                            <h5 className="skill-title">React JS</h5>
                        </button>
                        <button className='btn_shadow'>
                            <i className="lni lni-nodejs"></i>
                            <h5 className="skill-title">Node JS</h5>
                        </button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='right_img'>
                <img src={hero} alt='' />
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default Home;