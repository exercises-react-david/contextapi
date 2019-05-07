import React,{Component} from 'react';
import Bands from './components/Bands';
import map from "./usa-map.svg";
import DiskProvider from './components/Disk';

export default class App extends Component {

    render() {
        return (
          <React.Fragment>
            <div className="container">
                <DiskProvider>
                  <Bands/>
                </DiskProvider>
            </div>
            <img className="usa-map" src={map} />
          </React.Fragment>
        );
    }
  }