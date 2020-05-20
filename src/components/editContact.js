import React, { Component } from 'react'
import './AddContact.css';
import { Consumer } from '../Context';
import TextInputItems from './TextInputItems';
import axois from 'axios';

class editContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    async componentDidMount() {
        const {id} =this.props.match.params;
        try{
            const res= await axois.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        const contact =res.data;
        // console.log(contact);
        this.setState(
            {
                name: contact.name,
                email: contact.email,
                phone: contact.phone
            }
        )
        }
        catch(e){
            console.log(e);
        }
    }

    onChange = (e) => this.setState({ [e.target.name] : [e.target.value] });
    onSubmit = async(dispatch, e) => {
        const { name, email, phone } = this.state;
        e.preventDefault();
        const {id} =this.props.match.params;
        const updContact = {
            name,
            email,
            phone
        }
       const res=await axois.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
        dispatch({type: 'UPDATE_CONTACT',payload: res.data});

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
                                    <div className="HeadingCon">Edit Contact</div>
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
                                                <input type="submit" value="Update Contact" />
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
export default editContact;