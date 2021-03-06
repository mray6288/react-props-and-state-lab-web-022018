import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super();
    console.log(props)
    this.props = props
    this.state = {
      isAdopted: props.isAdopted
    }

  }

  adoptPet = () => {
    this.setState({
      isAdopted: true
    })
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({this.props.pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.state.isAdopted ?
            <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
            : <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
