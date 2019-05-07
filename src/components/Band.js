import React,{Component} from 'react';

export default class Band extends Component {

    render() {
        const {name,songs} = this.props.band;

        return (
           <list classname="list-group-item d-flex justify-content-between align-items-center">
                <p className="m-0">
                    {name}
                </p>
                <span className="badge badge-danger">
                    {songs}
                </span>
           </list>
        );
    }
}