	import React, { Component } from 'react'
import './AddContact.css';
import { Consumer } from '../Context';
import { v1 as uuid } from 'uuid';
import TextInputItems from './TextInputItems';
import axois from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onChange = (e) => this.setState({ [e.target.name] : [e.target.value] });
    onSubmit = async(dispatch, e) => {
        const { name, email, phone } = this.state;
        e.preventDefault();
       
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        await axois.post('https://jsonplaceholder.typicode.com/users',newContact);
        dispatch({ type: 'ADD_CONTACT', payload:newContact});
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
        this.props.history.push("/");
    };
    render() {
        const { name, email, phone } = this.state
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div>
                                <div id="mainContainer">
                                    <div className="HeadingCon">Add Contact</div>
                                    <div className="card">
                                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                            <TextInputItems
                                                name="name"
                                                label="Name"
                                                value={name}
                                                placeholder="Enter Name"
                                                onChange={this.onChange}
                                            />
                                            <TextInputItems
                                                name="email"
                                                label="Email"
                                                type="email"
                                                value={email}
                                                placeholder="Enter Email"
                                                onChange={this.onChange}
                                            />
                                            <TextInputItems
                                                name="phone"
                                                label="Phone"
                                                value={phone}
                                                placeholder="Enter Phone number"
                                                onChange={this.onChange}
                                            />
                                            <div className="formchild subB">
                                                <input type="submit" value="Add Contact" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
            </Consumer>
        )
    }
}
export default AddContact;