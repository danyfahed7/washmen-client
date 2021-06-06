import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import 'leaflet/dist/leaflet.css';

import { Header } from './components/Header'
import { RangeFilter } from './components/RangeFilter'
import { fetchPartners } from './services/PartnerService';
import { Partners } from './components/Partners'
import { MapComponent } from './components/MapComponent'

import L from 'leaflet';

class App extends Component {
  
  state = {
    range: 0,
    partners: [],
    numberOfPartners: 0,
    root: [51.5144636, -0.142571],
    lat: 51.5144636,
    lng: -0.142571,
    showMap: false
  }

  
  fetchPartners = () => {
    fetchPartners(this.state.range, this.state.root)
      .then((partners) => {
        this.setState({partners: partners, numberOfPartners: partners.length })
      });
  }

  displayMap = () => {
      if(this.state.showMap == true){
        this.state.showMap = false;
        this.setState({showMap: false })
      } else {
        this.setState({showMap: true })        
        this.state.showMap = true;
      }
  }

  onChangeForm = (e:any) => {
    let range = this.state.range
    if (e.target.name === 'range') {
        range = e.target.value;
    }
    let root = this.state.root
    let lat = this.state.lat
    if (e.target.name === 'lat') {
      lat = e.target.value;
      root = [lat, root[1]]
    }
    let lng = this.state.lng
    if (e.target.name === 'lng') {
      lng = e.target.value;
      root = [root[1], lng]
    }
    this.setState({range})
    this.setState({lat})    
    this.setState({lng})
    this.setState({root})
  }

  handleKeyPress = (event:any) => {
    if(event.key === 'Enter'){
      this.fetchPartners()
    }    
  }

  render() {
    L.Icon.Default.imagePath='images/'
    return (
      <div className="App">
        <Header></Header>
        <RangeFilter onChangeForm={this.onChangeForm} 
                    fetchPartners={this.fetchPartners}
                    handleKeyPress={this.handleKeyPress}
                    displayMap={this.displayMap} ></RangeFilter>
        <div className="row mrgnbtm">
          <Partners partners={this.state.partners}></Partners>
        </div>
        
        <div className="map-container-custom">
        {this.state.showMap && (this.state.partners.length > 0) && (<MapComponent range={this.state.range} root={this.state.root} partners={this.state.partners}></MapComponent>)}
          
        </div>
      </div>
    );
  }
}

export default App;
