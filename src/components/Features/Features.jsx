import React from "react"
import "./Features.css"
import data from "./FeatureApi"
import Card from "./Card"

const Features = () => {
    return (
        <>
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Features</h4>
                    <h1>My Skills</h1>
                </div>

                <div className='grid'>
                    {/* {data.map((val, index) => {
                    return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                    })} */}

                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/64/000000/html-5.png' alt='' />
                        <h2>HTML</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/80/000000/css3.png' alt='' />
                        <h2>CSS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/64/000000/javascript-logo.png' alt='' />
                        <h2>JavaScript</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTcXZCZOy-t4zRSvmp2Ib9UO-D4aylGFuug&usqp=CAU' alt='' />
                        <h2>Bootstrap CSS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oYLCs8ywymDcdJhGVqUwuKb3uINzxrXe5w&usqp=CAU' alt='' />
                        <h2>Tailwind CSS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/64/000000/react-native.png' alt='' />
                        <h2>React JS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/64/WNoJgbzDr3i2/express-js.png' alt='' />
                        <h2>Express JS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWzE17mxHt-cUVNazNGQhcGwzVCZFkR-QaQ&usqp=CAU' alt='' />
                        <h2>Node JS</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvwc24Hq-a0ssnlRc8SQm6h8gCYXD6oVjCw&usqp=CAU' alt='' />
                        <h2>Firebase</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi-UxGs4sTXyd91CFtv5sFijJfuQotb61rg&usqp=CAU' alt='' />
                        <h2>mongoDB</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVTULp_1gwl5Qrs4CK3Is1wr0OqwxKSum3A&usqp=CAU' alt='' />
                        <h2>Netlify</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHA6Ug9OAg84SG5eND7mzQbxcMdQtYFCUYw&usqp=CAU' alt='' />
                        <h2>Vercel</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow'>
                        <img src='https://img.icons8.com/ios/80/stripe' alt='' />
                        <h2>Stripe</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBZYbMoIv0_joV80G3LomwsLYCjKVKSM8qA&usqp=CAU' alt='' />
                        <h2>Figma</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                    <div className='box btn_shadow reusable'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRdwQ9XKG4IQgKglv8pPsihXPtjPYXv8Wkw&usqp=CAU' alt='' />
                        <h2>VS Code</h2>
                        <a href='/'>
                            <i className="lni lni-arrow-right-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features