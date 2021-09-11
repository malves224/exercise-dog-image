import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doguinhoUrl: '',
    };
  }

  componentDidMount() {
    this.fetchDoguinho('https://dog.ceo/api/breeds/image/random');
  }

  async fetchDoguinho(urlForFetch) {
    const fetchDog = await fetch(urlForFetch);
    const fetchDogJson = await fetchDog.json();
    this.setState({
      doguinhoUrl: fetchDogJson.message,
    });
    localStorage.setItem('lastUrlDog', fetchDogJson.message);
  }

  render() {
    const { doguinhoUrl } = this.state;
    return (
      <div className="cardDog">
        <img src={ doguinhoUrl } alt="" />
      </div>
    );
  }
}

export default Body;
