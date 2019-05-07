import React,{Component} from 'react';
import Bands from './components/Bands';
import map from "./usa-map.svg";

export default class App extends Component {

  state={
    bands: [
      {
        name: 'Megadeth',
        songs: 100
      },
      {
        name: 'ACDC',
        songs: 150
      },
      {
        name: 'Black Sabbath',
        songs: 160
      }
    ]
  }

    render() {
        return (
          <React.Fragment>
            <div className="container">
                <Bands
                  bands={this.state.bands}
                />
            </div>
            <img className="usa-map" src={map} />
          </React.Fragment>
        );
    }
  }