import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doguinhoUrl: 'carregando...',
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
    const urlForFetch = 'https://dog.ceo/api/breeds/image/random';
    return (
      <section className="section">
        <button
          onClick={ () => this.fetchDoguinho(urlForFetch) }
          type="button"
        >
          Change dóginho
        </button>
        <div className="card-dog">
          <img src={ doguinhoUrl } alt="" />
        </div>
      </section>
    );
  }
}

export default Body;
