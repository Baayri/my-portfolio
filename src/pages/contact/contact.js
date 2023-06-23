import React, {useState} from 'react';
import './contact.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <section id={"contact"} className={"Content"}>
                <h1>CONTACT</h1>

                <div className={"contactForm"}>
                    <form onSubmit={handleSubmit}>

                        <div className={"FormItem"}>
                            <label htmlFor="name">Name</label>
                            <input id={"name"} type="text" placeholder={"Enter Your Name"} value={name} onChange={(e) => setName(e.target.value)} autoComplete={"off"}/>
                        </div>

                        <div className={"FormItem"}>
                            <label htmlFor="email">Email</label>
                            <input id={"email"} type="email" placeholder={"Enter Your Email"} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete={"off"}/>
                        </div>

                        <div className={"FormItem"}>
                            <label htmlFor="message">Message</label>
                            <textarea id={"message"} placeholder={"Enter Your Message"} value={message} onChange={(e) => setMessage(e.target.value)} autoComplete={"off"}/>
                        </div>

                        <button style={{margin: 0}} className={"Button"} type="submit">Gönder</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;