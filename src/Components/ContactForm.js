import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm, ValidationError } from '@formspree/react';
import * as dotenv from 'dotenv' 
dotenv.config()

const ContactForm = () =>{
//     const [state, handleSubmit] = useForm("xpzbanza");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
    const [success, setSuccess] = useState(false);

    const contactForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false);
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, contactForm.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    const successMsg = {
        width: "fit-content",
        width: "-moz-fit-content",
        height: "fit-content",
        height: "-moz-fit-content",
        marginTop: "10px",
        marginBottom: "10px",
        textAlign: "center",
        color: "rgba(75,181,67, 1)"
    }
    return(
        <form ref={contactForm} onSubmit={sendEmail} method="POST">
            {(success === true ? 
            <p style={successMsg}>Email sent successfully</p> :
            null)}
            <input type="text" id="fullname" name="sender_name" placeholder="Your name"/>
            {/* <ValidationError 
                prefix="Fullname" 
                field="fullname"
                errors={state.errors}
            /> */}
            <input type="email" id="email" name="sender_email" placeholder="Your email"/>
            {/* <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            /> */}
            <textarea id="message" name="message" placeholder="Your message" rows="5" />
            {/* <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            /> */}
            {/* <input type="submit" value="send" disabled={state.submitting}/> */}
            <input type="submit" value="send"/>
        </form>
    )
}
export default ContactForm;