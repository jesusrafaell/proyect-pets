import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';
import PetPage from './PetPage';
import AddPet from './AddPet';

class ListPets extends Component {
	constructor(){
		super();
		this.state = {
			pets: [],
			isEditing: false,
			pet: {}
		}

		this.handlePetsImg = this.handlePetsImg.bind(this);
		this.removePet = this.removePet.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		store.subscribe(() => {
			this.setState({
				pets: this.state.pets.concat(store.getState().pets),
				isEditing: store.getState().isEditing
			});
		});
	}

	componentWillMount = () => {
		axios.get('/api')
			.then(e => {
				this.setState({
					pets: e.data
				});
			})
			.catch(error => console.log(error));
	}

	removePet = (pet, key) => {
		let URL = `/api/pets/${pet._id}`;
		axios.delete(URL)
			.then(res => {
				this.setState(state => {
					state.pets.splice(key, 1);
					return {pets: state.pets}
				});
			})
			.catch(error => console.log(error));
	}

	toggleEdit = (pet) => {
		//Edit Pet => Using in PetPage
		this.setState({isEditing: !this.state.isEditing, pet});
	}

	handlePetsImg = pets => {
		let img = "";
		switch (pets.breed) {
			case 'Golden':
				img = "https://t2.ea.ltmcdn.com/es/images/8/9/4/img_cuidados_del_pelo_del_golden_retriever_20498_600.jpg";				
				break;
			case 'Harrier':
				img = "https://www.pets4homes.co.uk/images/breeds/368/large/a20f0aaec42fa751756f84f131625e7a.jpg";
				break; 
			case 'Saluki':
				img = "http://cdn2-www.dogtime.com/assets/uploads/gallery/saluki-dog-breed-pictures/1-3qstand.jpg";
				break;
			case 'Pastor Aleman': //Modificar a Pastor Aleman
				img = "https://misanimales.com/wp-content/uploads/2014/12/pastor-aleman-1.jpg";
				break;
		}
		return img;
	}

	render () {
		if(this.state.isEditing){
			return (
				<PetPage imgPet={this.handlePetsImg(this.state.pet)} pet={this.state.pet}/>
			)
		}
		return (
			<div>
				<AddPet />
				<br />
				<table className="table table-hover table-dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Imagen</th>
				    		<th>Name</th>
				    		<th>Email</th>
				    		<th>Age</th>
				    		<th>Breed</th>
				    		<th>weight</th>
				    		<th>height</th>
				    		<th>Options</th>
				    	</tr>
					</thead>
				       	 {this.state.pets.map((pets, key) => 
				       	 	<tbody>
				       	 		<tr>	
				       	 			<th>{key + 1}</th>	
				       	 			<td><img src={this.handlePetsImg(pets)} alt="pets.name"/></td>		               	 		
				       	 			<td>{pets.name}</td>
				           	 		<td>{pets.email}</td>
				           	 		<td>{pets.age}</td>
				           	 		<td>{pets.breed}</td>
				           	 		<td>{pets.weight} kg</td>
				           	 		<td>{pets.height} cm</td>
				           	 		<td>
				           	 			<button class="btn btn-danger" onClick={() => this.removePet(pets, key)}>Delete</button>
				           	 			<button class="btn btn-primary" onClick={() => this.toggleEdit(pets)}>Edit info</button>
				           	 		</td>
				       	 		</tr>
				      	 	</tbody>
				      	 	)
				       	 }
				</table>
			</div>
		)
	};
}

export default ListPets;
