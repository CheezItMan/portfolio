import React, { useState, FormEvent } from 'react';
import { MessageData } from '../types/message_data.type';
import './contact.css';
import GoogleMapReact from 'google-map-react';
// import Marker from './marker';

type ContactProps = {
    onSendMsg: (msg: MessageData) => void,
}

const Contact: React.FC<ContactProps> = ({onSendMsg }: ContactProps) => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [notification, setNotification] = useState('');

    const notifier = (msg: string) => {
        setNotification(msg);
    }

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
                break;
            default: 
                throw new Error("Invalid field name");
        }

        setformData(newData);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const messageData = {
            ...formData,
            notifier,
        }
        onSendMsg(messageData);
        setformData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    type GoogleMapsProps = {
        lat: number,
        lng: number,
        text: string
    }

    const Marker = ({ text }: GoogleMapsProps) => <div><i className="fas fa-map-marker-alt"></i>{text}</div>;

    const defaultProps = {
        center: {
            lat: 47.608013,
            lng: -122.335167
        },
        zoom: 11
    };

    return (
        <article className="portfolio__contact container" id="contact">
            <div className="row">
                <div className="section-title md-12 mb-5">
                    <h2>Contact</h2>
                    { notification !== ''? <h3 className="alert">{notification}</h3>: ''}
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-xs-12 col-xl-6 d-flex align-items-stretch map-container" style={{maxWidth: "35vw"}}>
                    <section className="col-xs-12 col-xl-6 d-flex shadow-lg p-3 mb-5 bg-white rounded card">
                        <div className="card-body">
                            <h4 className="card-text"><i className="fas fa-envelope" style={{marginRight: '5px', fontSize: '24px', color: "#109DDC"}}></i>Email</h4>
                            <p>email@email.com</p>
                            <h4 className="card-text"><i className="fas fa-map-marker-alt" style={{marginRight: '5px',  fontSize: '24px', color: "#109DDC"}}></i>Location</h4>
                            <p>Seattle, WA</p>
                            <div style={{ height: '100vh', width: '100%'}} className="map">
                                <GoogleMapReact
                                    bootstrapURLKeys={ {key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY} }
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <Marker
                                        lat={47.608013}
                                        lng={-122.335167}
                                        text=""
                                    />
                                    {/* <Marker /> */}
                                </GoogleMapReact>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="portfolio__contact__contact__form_block col-xs-12 col-xl-6 d-flex shadow-lg p-3 mb-5 bg-white rounded" style={{maxWidth: "90vw"}}>
                    <form className="portfolio__contact__form container" onSubmit={onSubmit}>
                    <div className="row d-flex">
                        <div className="form-group col-xl-6 col-xs-12 p-2">
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
                        <div className="form-group col-xl-6 col-xs-12 p-2">
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
                        <div className="form-group col-xs-12">
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
                    <div className="row col-xs-12 d-flex align-items-stretch">
                        <div className="form-group col-xs-12">
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
                                value={formData.message} >
                            </textarea>
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-row col-xs-12 d-flex align-items-stretch pt-5">
                        <div className="form-group col-xs-12">
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
