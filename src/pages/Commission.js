import React, { Component } from 'react';
import anime from 'animejs';
import Header from '../components/Header'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Commission extends Component {

    state = {
        stage: 1,
        stageName: 'Portrait'
    }

    componentDidMount() {
        
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }

    onPrev = () => {
        switch (this.state.stage) {
            case 1:
                this.setState({
                    stage: 3,
                    stageName: 'Caricature'
                });
                break;
            case 2: 
                this.setState({
                    stage: 1,
                    stageName: 'Portrait'
                });
                break;
            case 3: 
                this.setState({
                    stage: 2,
                    stageName: 'Realistic'
                })
                break;
            default: 
                this.setState({
                    stage: 1,
                    stageName: 'Portrait'
                })
                break;
        }
    }

    onNext = () => {
        switch (this.state.stage) {
            case 2:
                this.setState({
                    stage: 3,
                    stageName: 'Caricature'
                });
                break;
            case 3: 
                this.setState({
                    stage: 1,
                    stageName: 'Portrait'
                });
                break;
            case 1: 
                this.setState({
                    stage: 2,
                    stageName: 'Realistic'
                })
                break;
            default: 
                this.setState({
                    stage: 1,
                    stageName: 'Portrait'
                })
                break;
        }
    }


    render() {

        const state = this.state;

        return (
            <>
            <Header />
            <div className="comm-container">
                <div className="comm-wrap">
                    <div className="comm-top">
                        <FontAwesomeIcon icon={faChevronLeft} className="comm-back" onClick={this.onPrev} />
                        <div className="comm-title">{state.stageName}</div>
                        <FontAwesomeIcon icon={faChevronRight} className="comm-next" onClick={this.onNext} />
                    </div>
                    {
                        state.stage === 1 ?
                        <>
                            <div className="comm-img-wrap">
                                <img src={"../../images/Dr.Strange.png"} className="comm-image" />
                            </div>
                            <div className="comm-details">
                                Price: $100
                            </div>
                        </> : ''
                    }
                    {
                        state.stage === 2 ?
                        <>
                            <div className="comm-img-wrap">
                                <img src={"../../images/PoisonousMosquito.png"} className="comm-image" />
                            </div>
                            <div className="comm-details">
                                Price: $150
                            </div>
                        </> : ''
                    }
                    {
                        state.stage === 3 ?
                        <>
                            <div className="comm-img-wrap">
                                <img src={"../../images/PirateGhost.png"} className="comm-image" />
                            </div>
                            <div className="comm-details">
                                Price: $200
                            </div>
                        </> : ''
                    }
                </div>
            </div>
            </>
        );
    }
}


export default Commission;
  
