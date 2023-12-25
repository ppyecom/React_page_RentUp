import React, { useRef, useState } from 'react'
import Back from '../common/Back'
import img from '../images/pricing.jpg'
import './contact.css'
import PopUpContact from '../popups/popUpContact'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();
    const [popUp, setPopUp] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [inputSubject, setInputSubject] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault(); // Evitar que la página se recargue al enviar el formulario
        emailjs.sendForm('service_pzlqcwj', 'template_44ansca', form.current, 'iwfI-b6K5eaDGMXdv').then((result) => {
          console.log(result.text);
          }, (error) => {
                console.log(error.text);
          });
        setPopUp(true); // Mostrar el pop-up

        setInputName("")
        setInputEmail("")
        setInputSubject("")
        setInputMessage("")
    };

    const handleChangeName = (event) => {
        setInputName(event.target.value);
      };

    const handleChangeEmail = (event) => {
        setInputEmail(event.target.value);
      };

    const handleChangeMessage = (event) => {
        setInputMessage(event.target.value)
    }

    const handleChangeSubject = (event) => {
        setInputSubject(event.target.value)
    }

  return (
    <>
        <section className='contact mb'>
            <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img}/>
            <div className="container">
                <form className='shadow' ref={form} onSubmit={handleSubmit}>
                    <h4>Fillup The Form</h4>
                    <div>
                        <input type="text" name="user_name" placeholder='Name' onChange={handleChangeName} value={inputName}/>
                        <input type="email" name="user_email" placeholder='Email' onChange={handleChangeEmail} value={inputEmail}/>
                    </div>
                    <input type="text" placeholder='Subject' onChange={handleChangeSubject} value={inputSubject}/>
                    <textarea name="message" id="" cols="30" rows="10" onChange={handleChangeMessage} value={inputMessage}></textarea>
                    <button type="submit">Submit Request</button>
                </form>
                
            </div>
            {popUp && (
            <PopUpContact trigger={popUp} setTrigger={setPopUp}>
                <h3>Envio de Mensaje</h3>
                <p>Mensaje enviado, Pronto estaremos en contacto contigo.</p>
            </PopUpContact>
            )}
        </section>

    </>
  )
}

export default Contact