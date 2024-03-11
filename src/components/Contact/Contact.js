import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import Particle from "../Particle";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            emailjs
                .sendForm(
                    "service_33h4j0b",
                    "template_cavtn5m",
                    form.current,
                    "ZhhE_oead4Ki6wSnl"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        // Reset the form and button state after sending email
                        form.current.reset();
                        setFormData({});
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Particle />
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done'>{notDone && "Please, fill all the input field"}</span>
                        <Button type="submit" className="button">Click Once</Button>
                        <span className='done'>{done && "Thanks for contacting Danwycliff Njoka be sure I have received your mail. If you are testing this functionality then I am confirming this thing is working perfectly fine. If you have any serious query then I will reply. Also if you need me, you can contact me on Linkedin or any other sites."}</span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
