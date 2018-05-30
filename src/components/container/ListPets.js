import React, { Component } from 'react';
import axios from 'axios';

class ListPets extends Component {
	constructor(){
		super();
		this.state = {
			pets: []
		}
		this.handlePetsImg = this.handlePetsImg.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentWillMount = () => {
		axios.get('/api')
			.then(e => {
				this.setState({
					pets: e.data
				});
			})
			.catch(error => console.log(error));
		/*{fetch(`http://localhost:5000/api`)*/
	}

	handleDelete = (id, key) => {
		let URL = `/api/pets/${id}`;
		axios.delete(URL)
			.then(res => {
				this.setState(state => {
					state.pets.splice(key, 1);
					return {pets: state.pets}
				})
			})
			.catch(error => console.log(error));
	}

	handlePetsImg = pets => {
		switch (pets.breed) {
			case 'Golden':
				return "https://t2.ea.ltmcdn.com/es/images/8/9/4/img_cuidados_del_pelo_del_golden_retriever_20498_600.jpg";				break;
			case 'Harrier':
				return "https://www.pets4homes.co.uk/images/breeds/368/large/a20f0aaec42fa751756f84f131625e7a.jpg";
				break; 
			case 'Saluki':
				return "http://cdn2-www.dogtime.com/assets/uploads/gallery/saluki-dog-breed-pictures/1-3qstand.jpg";
				break;
			case 'Pastor Aleman': //Modificar a Pastor Aleman
				return "https://misanimales.com/wp-content/uploads/2014/12/pastor-aleman-1.jpg";
				break;
		}
	}

	render () {
		return (
			<div>
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
				    		<th></th>
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
				           	 		<td>{pets.weight}</td>
				           	 		<td>{pets.height}</td>
				           	 		<td>
				           	 			<button class="btn btn-danger" onClick={() => this.handleDelete(pets._id, key)}>Delete</button>
				           	 			<button class="btn btn-primary">Edit info</button>
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
