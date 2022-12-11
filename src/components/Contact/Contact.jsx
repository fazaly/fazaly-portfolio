import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",})

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
        return {
            ...preVal,
            [name]: value,
        }
        })
    }

    const formSubmit = (event) => {
    event.preventDefault()
    alert(
        `My name is ${data.fullname}. 
        My phone number is ${data.phone}. 
        My email address is ${data.email}. 
        My Subject on  ${data.subject}. 
        Here is my message I want to say : ${data.message}. 
        `
        )
    }
    return (
        <>
        <section className='Contact' id='contact'>
            <div className='container top'>
            <div className='heading text-center'>
                <h4>CONTACT</h4>
                <h1>Contact With Me</h1>
            </div>

            <div className='content d_flex'>
                <div className='left'>
                <div className='box box_shodow'>
                    <div className='img'>
                    <img src={contact1} alt='' />
                    </div>
                    <div className='details'>
                    <h1>Md. Fazaly Rabbi</h1>
                    <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                    <p>Phone: (+88)01684-743547</p>
                    <p>Email: fazalyrabbi614@gmail.com</p> <br />
                    <span>FIND WITH ME</span>
                    <div className='button f_flex'>
                        <button className='btn_shadow' onClick={() => window.open('https://www.facebook.com/Kasem3D/', '_blank')}>
                            <i class="lni lni-facebook-filled"></i>
                        </button>
                        <button className='btn_shadow' onClick={() => window.open('https://www.linkedin.com/in/md-fazaly-rabbi-34b36b151/', '_blank')}>
                            <i class="lni lni-linkedin-original"></i>
                        </button>
                        <button className='btn_shadow' onClick={() => window.open('https://github.com/fazaly', '_blank')}>
                            <i class="lni lni-github-original"></i>
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                <div className='right box_shodow'>
                <form onSubmit={formSubmit}>
                    <div className='f_flex'>
                    <div className='input row'>
                        <span>YOUR NAME</span>
                        <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                    </div>
                    <div className='input row'>
                        <span>PHONE NUMBER </span>
                        <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                    </div>
                    </div>
                    <div className='input'>
                    <span>EMAIL </span>
                    <input type='email' name='email' value={data.email} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                    <span>SUBJECT </span>
                    <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                    </div>
                    <button className='btn_shadow'>
                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                    </button>
                </form>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default Contact;