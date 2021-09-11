import React, { Component } from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      doguinhoUrl: undefined,
      urlDogs: [],
    };

    this.addDog = this.addDog.bind(this);
  }

  componentDidMount() {
    this.fetchDoguinho();
  }

  addDog() {
    this.setState(({ urlDogs, doguinhoUrl }) => ({
      urlDogs: [...urlDogs, doguinhoUrl], // urlDogs e o array que será adicionado um elemento, e o doguinhoUrl é o elemento que sera adicionado no array.
    }));
    this.fetchDoguinho();// atualiza o state com um novo cachorro.
  }

  async fetchDoguinho() {
    this.setState({
      loading: true,
    }, async () => {
      const urlForFetch = 'https://dog.ceo/api/breeds/image/random';
      const fetchDog = await fetch(urlForFetch);
      const fetchDogJson = await fetchDog.json();
      this.setState({
        loading: false,
        doguinhoUrl: fetchDogJson.message,
      });
    });
  }

  render() {
    const { doguinhoUrl, loading, urlDogs} = this.state;
    const imgDogElement = <img src={ doguinhoUrl } alt="" />;
    const loadingElement = <p> Loading... </p>;
    return (
      <section className="section">
        <button
          onClick={ this.addDog }
          type="button"
        >
          Change dóginho
        </button>
        <div className="card-dog">
          { urlDogs.map((dogUrl) => <img key={ dogUrl } src={ dogUrl } alt="" />)}
          { loading ? loadingElement : imgDogElement }
        </div>
      </section>
    );
  }
}

export default Body;
