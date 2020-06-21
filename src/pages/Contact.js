import React, { Component } from 'react';
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faArtstation, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import { Switch } from 'react-router';

class Contact extends Component {

    state = {
    }

    componentDidMount() {
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }

    onClick = (type) => {
        switch (type) {
        case 'fb':
            window.location.href = "";
            break;
        default: 
            this.props.history.push('/');
            break;
        }
    }


    render() {

        return (
            <>
            <Header />
            <div className="contact-container">
                <div className="contact-wrap">
                    <div className="">
                        <FontAwesomeIcon icon={faFacebook} className="contact-fb shadow" onClick={() => this.onClick('fb')}/>
                        <FontAwesomeIcon icon={faArtstation} className="contact-as" onClick={() => this.onClick('as')}/>
                        <a href="mailto:kyishoonle96@gmail.com"><img src="../../images/icon_gmail.svg" className="contact-mail" /></a>
                        <img src="../../images/icon_ig.svg" className="contact-ig" onClick={() => this.onClick('ig')} />
                        
                    </div>
                </div>
            </div>
            </>
        );
    }
}


export default Contact;
  
