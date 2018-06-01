import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';

class AddPet extends Component {
	constructor() {
		super();
		this.state = {};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.addToListPets = this.addToListPets.bind(this);
	}

	handleOnChange = e => {
		this.setState({[e.target.name]: e.target.value}); 			
	}

	addToListPets = e => {
		e.preventDefault();
		axios.post('/api/pets/', {
			name: this.state.name,
			email: this.state.email,
			age: this.state.age,
			breed: this.state.breed,
			weight: this.state.weight,
			height: this.state.height
		})
			.then(res => {
				this.setState({
					_id: res.data._id
				});
				store.dispatch({
					type: "ADD_TO_LISTPETS",
					pet: this.state
				});
			})
			.catch(error => console.log(error));
	}

//action="/api/pets" method="post"
	render () {
		return (
			<form onSubmit={this.addToListPets}>
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
			     	<select className="form-control selectpicker" name="breed" onChange={this.handleOnChange} required>
						<option>Select a Breed</option>
						 <option value="Golden">Golden</option>
						 <option value="Harrier">Harrier</option>
						 <option value="Pastor Aleman">Pastor Aleman</option>
						 <option value="Saluki">Saluki</option>
						 </select>
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
		);
	}
	
}


export default AddPet;
