import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

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
            // Please use your own credentials from emailjs or I will receive your email
            emailjs
                .sendForm(
                    "service_33h4j0b",
                    "service_33h4j0b",
                    form.current,
                    "ZhhE_oead4Ki6wSnl"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        React.createElement(Container, { style: { paddingTop: '50px' } },
            React.createElement(Row, null,
                React.createElement(Col, { md: 6, className: "c-left" },
                    React.createElement("h1", null, "Get in Touch"),
                    React.createElement("h1", { className: "yellow" }, "Contact me")
                ),
                React.createElement(Col, { md: 6, className: "c-right" },
                    React.createElement("form", { ref: form, onSubmit: sendEmail },
                        React.createElement("input", { type: "text", name: "from_name", className: "user", placeholder: "Name", onChange: handleChange }),
                        React.createElement("input", { type: "email", name: "reply_to", className: "user", placeholder: "Email", onChange: handleChange }),
                        React.createElement("textarea", { name: "message", className: "user", placeholder: "Message", onChange: handleChange }),
                        React.createElement("span", { className: 'not-done' }, notDone && "Please, fill all the input field"),
                        React.createElement(Button, { type: "submit", className: "button", disabled: done }, "Send"),
                        React.createElement("span", { className: 'done' }, done && "Thanks for contacting me and be sure I have received your mail. If you are testing this functionality then I am confirming this thing working perfectly fine. If you have any serious query then I will reply. Also if you need me, you can contact me on Linkedin.")
                    )
                )
            )
        )
    );
};

export default Contact;
