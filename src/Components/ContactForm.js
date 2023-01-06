import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () =>{
    const [state, handleSubmit] = useForm("xpzbanza");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return(
        <form onSubmit={handleSubmit} method="POST">
            <input type="text" id="fullname" name="fullname" placeholder="Your name"/>
            <ValidationError 
                prefix="Fullname" 
                field="fullname"
                errors={state.errors}
            />
            <input type="email" id="email" name="email" placeholder="Your email"/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea id="message" name="message" placeholder="Your message" rows="5" />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <input type="submit" name="submit" value="submit" disabled={state.submitting}/>
        </form>
    )
}
export default ContactForm;