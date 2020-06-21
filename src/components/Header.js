import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs';
import { withRouter } from 'react-router-dom'

class Header extends Component {

    state = {
        title: ''
    }

    componentDidMount() {
        let path = this.props.history.location.pathname;

        if (path === "/contact") {
            this.setState({
                title: 'Contact'
            })
        }
        if (path === "/commission") {
            this.setState({
                title: 'Commission'
            })
        }
        if (path === "/gallery") {
            this.setState({
                title: 'Gallery'
            })
        }

    }

    onBack = () => {
        window.history.back();
    }

    onNavigate = (url) => {
        this.props.history.push(url);
    }


    render() {

        return (
            <>
            <div className="head-container shadow">
                <FontAwesomeIcon icon={faChevronLeft} className="head-back" onClick={this.onBack} />
                <div className="head-title">
                    {this.state.title}
                </div>
            </div>
            </>
        );
    }
}


export default withRouter(Header);
  
