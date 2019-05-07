import React,{Component} from 'react';
import Band from './Band';

export default class Bands extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.bands.map((band, key) => (
                    <Band
                        key={key}
                        band={band}
                    />
                ))}
            </React.Fragment>
        );
    }
}