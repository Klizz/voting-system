import React, {Component} from "react";

class Cards extends Component{
	constructor(props){
		super(props);
		this.state = {
			pets : [
				{name: "Cat", votes: 0, img: './img/cats.gif'},
                {name: "Dog", votes: 0, img: './img/dogs.gif'},
                {name: 'Bird', votes: 0, img: './img/bird.gif'},
                {name: 'Rabbit', votes: 0, img: '/img/rabbit.gif'}
			]
		}
	}

	vote (i) {
		let newPets = [...this.state.pets];
		newPets[i].votes++;
		this.setState({pets: newPets});
	}

	render(){
		return(
			<>
				<h1>Vote Your Pet!</h1>
				<div className="cards">
					{
						this.state.pets.map((pet, i) => 
							<div key={i} className="row cyan lighten-4"> 
								<div className="col s6">
									<img src={pet.img} height="250px" alt=""/>
								</div>
								<div className="col s3">
									<h3>{pet.name}</h3>
								</div>
								<div className="col s3">
                                <h1>{pet.votes}</h1> <br />
                                <button className="waves-effect waves-light btn" onClick={this.vote.bind(this, i)}>Click Here</button>
                                </div>
							</div>
						)
					}
				</div>
			</>
		);
	}
}




export default Cards;
