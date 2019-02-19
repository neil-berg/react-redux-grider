import React from 'react';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';

class App extends React.Component {
  state = { images: [], selectedImage: null };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, orientation: 'squarish' }
    });
    this.setState({
      images: response.data.results.slice(1, 10),
      selectedImage: response.data.results[0]
    });
  };

  onImageSelect = selectedImage => {
    const selectedIndex = this.state.images.findIndex(
      image => image.id === selectedImage.id
    );
    const firstChunk = this.state.images.slice(0, selectedIndex);
    const secondChunk = this.state.images.slice(selectedIndex + 1);
    const newImages = [...firstChunk, this.state.selectedImage, ...secondChunk];
    this.setState({ images: newImages, selectedImage });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageDetail selectedImage={this.state.selectedImage} />
        <ImageList
          images={this.state.images}
          onImageSelect={this.onImageSelect}
        />
      </div>
    );
  }
}

export default App;
