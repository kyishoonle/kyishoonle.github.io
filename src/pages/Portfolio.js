import React, { Component } from 'react';
import anime from 'animejs';
import Header from '../components/Header'

class Portfolio extends Component {

    state = {
    }

    componentDidMount() {
        
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }


    render() {

        return (
            <>
            <Header />
            <div className="contact-container">
                Hi
            </div>
            </>
        );
    }
}


export default Portfolio;
  
