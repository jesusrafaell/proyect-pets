import React from 'react';
import axios from 'axios';
import './PetPage.css';
import store from '../../store';

class PetPage extends React.Component {
		constructor(pros, context) {
			super(pros, context);
			this.state = this.props.pet; //Update Pet
			this.handleOnChange = this.handleOnChange.bind(this);
			this.updatePet = this.updatePet.bind(this);
		}
	
		handleOnChange = e => {
     this.setState({[e.target.name]: e.target.value});
		}
 

		updatePet = e => {
			e.preventDefault();
			axios.put(`/api/pets/${this.state._id}`, this.state)
				.then(e => {
						//Redux store modif isEditing
						store.dispatch({
							type: "FINISH_EDITING",
							isEditing: false
						});
				})
				.catch(error => console.log(error));
		}

		render () {
				return (
					<div>
						<form onSubmit={this.updatePet} className="form-1">
							<img className="content-center img-pet" src={this.props.imgPet} alt={this.state.name} />
          		<div className="col-sm- 3 mx-auto info-pet card card-body">  	
								<div className="form-group float-label-control">
              		<label for="name">Pet Name </label>
               		<input className="form-control col-6" onChange={this.handleOnChange} type="text" name="name" placeholder={this.state.name}/>
               	</div>
               	<div className="form-group float-label-control">
               		<label for="email">Email</label>
                	<input className="form-control col-6" onChange={this.handleOnChange} type="email" name="email" placeholder={this.state.email} />
               	</div>
               	<div className="form-group float-label-control">
          	    	<label for="age">Age</label>
									<input className="form-control col-6" onChange={this.handleOnChange} type="text" name="age" placeholder={this.state.age} />
								</div>
								<div className="form-group float-label-control">
                   <label for="breed">Breed</label>
                   <input className="form-control col-6" onChange={this.handleOnChange} type="text" name="breed" placeholder={this.state.breed} />
								</div>
                <div className="form-group float-label-control">
										<label for="weight">Weight</label>
										 <input className="form-control col-6" onChange={this.handleOnChange} type="text" name="weight" placeholder={this.state.weight} />
								</div>  
								 <div className="form-group float-label-control">
                 	<label for="height">Height</label>
                  <input className="form-control col-6" onChange={this.handleOnChange} type="text" name="height" placeholder={this.state.height} />
                 </div>  
								<button type="submit" className="col-3 text-center btn btn-primary">Save</button>     
							</div>
          	</form>
					</div>
				);
		}
}

export default PetPage;
