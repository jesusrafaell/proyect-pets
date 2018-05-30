import React, { Component } from 'react';
import axios from 'axios';

class AddPet extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			age: '',
			breed: '',
			weight: '',
			height: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange = e => {
		switch (e.target.name) {
			case 'name':
				this.setState({name: e.target.value});
				break;
			case 'email':
				this.setState({email: e.target.value});
				break;
			case 'age':
				this.setState({age: e.target.value});
				break;
			case 'breed':
				this.setState({breed: e.target.value});
				break;
			case 'weight':
				this.setState({weight: e.target.value})
				break;
			default:
				this.setState({height: e.target.value});
				break;			
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		axios.post('/api/pets/', this.state)
			.then(e => console.log('Send Pet'));
	}

//action="/api/pets" method="post"
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
			  <div className="form-row align-items-center">
			    <div className="col-auto">
			      <label className="sr-only" for="name">Name</label>
			      <input type="text" className="form-control mb-2" name="name" onChange={this.handleOnChange} placeholder="Dog Name" required/>
			    </div>
			    <div class="col-auto">
			      <label className="sr-only" for="email">Email</label>
			       <input type="text" className="form-control" name="email" onChange={this.handleOnChange} placeholder="Your Email" required/>
			    </div>
			    <div class="col-auto">
			      <label className="sr-only" for="email">Age</label>
			       <input type="text" className="form-control" name="age" onChange={this.handleOnChange} placeholder="Dog Age" required/>
			    </div>
			    <div class="col-auto">
			      <label className="sr-only" for="breed">Breed</label>
			       <input type="text" className="form-control" name="breed" onChange={this.handleOnChange} placeholder="Breed" required/>
			    </div>
			    <div class="col-auto">
			      <label className="sr-only" for="weight">Weight</label>
			       <input type="text" className="form-control" name="weight" onChange={this.handleOnChange} placeholder="Dog Weight"/>
			    </div>
			    <div className="col-auto">
			      <label className="sr-only" for="height">Height</label>
			       <input type="text" className="form-control" name="height" onChange={this.handleOnChange} placeholder="Dog Height"/>
			    </div>
			    <div className="col-auto">
			      <button type="submit" className="btn btn-success mb-2">Add</button>
			    </div>
			  </div>
			</form>
		)
	};

}

export default AddPet;
