import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props){
      this.state = {
        imageSearch: '',
        searchSuccess: false,
    }
  }
  
  getImages = (e) => {
    e.preventDefault();
    console.log(this.state.imageSearch);
    axios.get('http://localhost:3002/images',
      {params: {
        imageSearch: this.state.imageSearch,
      }})
      .then(images => {
        console.log(images);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    let allCarouselItems = this.state.imagesToRender.map((img, index) +> {
      <Carousel.Item>
      
    })
    return (
    <>
      <h1>Amazing Images</h1>
      <form onSubmit={this.getImages}>
        <label>What Would You Like To See
          <input onChange={e => this.setState({imageSearch: e.target.value})} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
