import React, { Component } from 'react';
import anime from 'animejs';

class Home extends Component {

    state = {
    }

    componentDidMount() {
        var textWrapper = document.querySelector('.home-letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='home-letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.home-letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i+1)
        })

        anime.timeline({loop: true})
        .add({
            targets: '.home-port',
            scale: [1, 1.2, 1],
            elasticity: 600,
            delay: 500,
            duration: 1000
        })

        anime.timeline({loop: true})
        .add({
            targets: '.home-comm',
            scale: [1, 1.2, 1],
            elasticity: 600,
            delay: 1000,
            duration: 1000
        })

        anime.timeline({loop: true})
        .add({
            targets: '.home-cont',
            scale: [1, 1.2, 1],
            elasticity: 600,
            duration: 1000,
            delay: 1500
        })
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }


    render() {

        return (
            <>
            <div className="home-container">
                <div className="home-wrap">
                    <div className="home-name">
                        <div className="text-wrapper">
                            <div className="home-letters">
                                Kyi Shoon Le
                            </div>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="home-port" onClick={() => this.onNavigate('/gallery')}>Gallery</div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-comm" onClick={() => this.onNavigate('/commission')}>Commission</div>
                        </div>
                        <div className="col-sm-4">
                            <div className="home-cont" onClick={() => this.onNavigate('/contact')}>Contact Me</div>
                        </div>
                    </div>
                </div>
                    <div className="cloud x1"></div>
                    <div className="cloud reverse x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud reverse x4"></div>
                    <div className="cloud x5"></div>
                    

                    <div className="cloud x6"></div>
                    <div className="cloud reverse x7"></div>
                    <div className="cloud x8"></div>

                    <div className="cloud fadeRight"></div>
                    <div className="cloud fadeLeft"></div>
            </div>
            </>
        );
    }
}


export default Home;
  
