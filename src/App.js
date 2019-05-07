import React,{Component} from 'react';
import Bands from './components/Bands';

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
            <div className="container">
                <Bands
                  bands={this.state.bands}
                />
            </div>
        );
    }
}
