import React, { Component } from 'react'
import API from "../../utlis/API";


class signUp extends Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''  
    }
    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        API.saveUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
            
        console.log(this.state)
    }
    render() {
        return (
            <div className= "container">
                <form onSubmit={this.handleSubmit} className="white">
                   <h5 className="grey-text text-darken-3">Register</h5>
                   <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="firstName">First Name</label>
                       <input type="text" id="firstName" onChange={this.handleChange} />
                   </div>
                   <div className="input-field">
                       <label htmlFor="lastName">Last Name</label>
                       <input type="text" id="lastName" onChange={this.handleChange} />
                   </div>
                   <div className="input-field">
<<<<<<< HEAD
                       <button className="btn blue lighten-1 z-depth-0" 
                       href={"/forum"} >Register</button>
=======
                       <button className="btn blue lighten-1 z-depth-0">Register</button>
>>>>>>> 9495f7b4212a0af35bff5b3359d06331051e05a1
                   </div>
                </form>
            </div>
        )
    }
}

export default signUp