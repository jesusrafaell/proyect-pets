import React, { Component } from 'react';
import NavBar from '../components/Common/Navbar';
import ListPets from '../components/container/ListPets';
import AddPet from '../components/container/AddPet';

class Home extends Component {
	constructor() {
		super();
	}
    render () {
       return (
        <div>
            <NavBar />
            <br />
            <div className="container"> 
              <ListPets />
            </div>
        </div>
       ) 
    };
}



export default Home;
