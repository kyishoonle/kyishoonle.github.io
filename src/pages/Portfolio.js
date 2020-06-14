import React, { Component } from 'react';
import anime from 'animejs';
import Header from '../components/Header'
import { Modal } from 'reactstrap';

class Portfolio extends Component {

    state = {
        isOpen: false,
        modalImg: ''
    }

    componentDidMount() {
        
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }

    setModal = (img) => {
        this.setState({
            modalImg: img,
            isOpen: true
        })
    }

    offModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {

        return (
            <>
            <Header />
            <div className="port-container">
                <div className="port-wrap">
                    <div className="row">
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                        <div className="col-sm-4">
                          <img src={"../../images/PoisonousMosquito.png"} className="port-image" onClick={() => this.setModal("../../images/PoisonousMosquito.png")} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal centered isOpen={this.state.isOpen} toggle={this.offModal}>
                 <img src={this.state.modalImg ? this.state.modalImg : ''} className="modal-img" />
            </Modal>
            </>
        );
    }
}


export default Portfolio;
  
