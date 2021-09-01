import React, { useState, FormEvent } from 'react';
import { MessageData } from '../types/message_data';
import './contact.css';



type ContactProps = {
    name: string,
    email: string,
    lat: number,
    lon: number,
    city: string,
    state: string,
    onSendMsg: (msg: MessageData) => void,
}


const Contact: React.FC<ContactProps> = ({name, email, lat, lon, city, state, onSendMsg}: ContactProps) => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const updateField = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();


        const newData = {
            ...formData,
        }
        switch (event.currentTarget.name) {
            case 'name': 
            case 'email':
            case 'subject':
            case 'message': 
                newData[event.currentTarget.name] = event.currentTarget.value;
        }

        setformData(newData);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSendMsg(formData);
        setformData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    return (
        <article className="portfolio__contact container">
            <div className="row">
                <div className="section-title md-12 mb-5">
                <h2>Contact</h2>
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-stretch">
                    <section className="col-lg-3 p-2">
                        <p>Map data goes here</p>
                    </section>
                </div>
                <section className="portfolio__contact__contact__form_block col-lg-6 col-md-6 d-flex shadow-lg p-3 mb-5 bg-white rounded">
                    <form className="portfolio__contact__form container" onSubmit={onSubmit}>
                    <div className="row d-flex">
                        <div className="form-group col-md-6 col-sm-12 p-2">
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control"
                                placeholder="Your name here"
                                id="name" 
                                data-rule="minlen:4" 
                                data-msg="Please enter at least 4 chars" 
                                onChange={updateField}
                                value={formData.name}
                            />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-6 col-sm-12 p-2">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="you@email.com"
                            id="email" 
                            data-rule="email" 
                            data-msg="Please enter a valid email" 
                            onChange={updateField}
                            value={formData.email}
                        />
                        <div className="validate"></div>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="form-group col-md-12 col-sm-12">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                className="form-control" 
                                id="subject" 
                                placeholder="subject"
                                data-rule="minlen:4" 
                                onChange={updateField}
                                value={formData.subject}
                            />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="row col-medium-12 d-flex align-items-stretch">
                        <div className="form-group col-md-12">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                className="form-control" 
                                name="message" 
                                id="message"
                                placeholder="Body of the message"
                                rows={10} 
                                data-rule="required" 
                                data-msg="Please write something for us"
                                onChange={updateField}
                                value={formData.message}
                            ></textarea>
                            <div className="validate"></div>
                        </div>

                    </div>
                    <div className="form-row col-medium-12 d-flex align-items-stretch pt-5">
                        <div className="form-group col-md-12">
                            <button onClick={onSubmit} className="btn btn-primary btn-md">Send Email</button>
                        </div>
                    </div>                                
                    </form>
                </section>
            </div>

        </article>
    );
}



export default Contact;