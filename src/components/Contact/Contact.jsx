import React, { useRef } from "react"
import contact1 from "./contact1.png"
import "./Contact.css";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6svlhk', 'template_xzkrtc7', form.current, 'q_62p3f56iW_fG_dP')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            toast.success('Message send Successfully.');
        }, (error) => {
            console.log(error.text);
        });
    };

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
                    <div className='contact-img'>
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
                </div>
                </div>

                <div className='right box_shodow'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='f_flex'>
                    <div className='input row'>
                        <span>YOUR NAME</span>
                        <input type='text' name='user_name' />
                    </div>
                    <div className='input row'>
                        <span>PHONE NUMBER </span>
                        <input type='number' name='phone' />
                    </div>
                    </div>
                    <div className='input'>
                    <span>EMAIL </span>
                    <input type='email' name='user_email'/>
                    </div>
                    <div className='input'>
                    <span>SUBJECT </span>
                    <input type='text' name='subject'/>
                    </div>
                    <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message'></textarea>
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