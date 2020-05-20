import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './contact.css';
import { Consumer } from '../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    myfunction = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }
    deleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    render() {

        const { showContactInfo } = this.state;
        const { id, name, email, phone } = this.props.contact;
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value
                        return (
                            <div>
                                <div className="storedet">
                                    <div id="name">{name}  <span onClick={this.myfunction} className="icon">&#8711;</span>
                                    <span onClick={this.deleteClick.bind(this, id, dispatch)} className="xicon">&#8855;</span>
                                    <Link to={`/contact/edit/${id}`}><span className="xicon">&#x270E;</span></Link>
                                </div>
                                {showContactInfo ? (<ul><li className="bnone">Email: {email}</li><li>Number: {phone}</li></ul>) : null}
                            </div>
                        </div>
        )
    }
}
        </Consumer >)
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;