import Contact from './Contact';
import React, { Component } from 'react'
import { Consumer } from '../Context.js';
import './contacts.css';
class Contacts extends Component {
    render() {
        return (
            <Consumer >
                {value => {
                    const { contacts } = value;
                    return (
                        <div>
                            <div className="contact-heading"><span className="make-red">Contact</span> list</div>
                            {contacts.map(contact =>
                                <Contact key={contact.id} contact={contact} />)
                            }
                        </div>
                    )
                }}
            </Consumer>)
    }
}
export default Contacts;
