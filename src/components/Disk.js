import React,{Component} from 'react';

const DiskContext = React.createContext();
export { DiskContext };

export default class DiskProvider extends Component {

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
            <DiskContext.Provider value={{
                state: this.state.bands
            }}>
            {this.props.children}
            </DiskContext.Provider>
        );
    }
}