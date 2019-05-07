import React,{Component} from 'react';
import styled from 'styled-components';

export default class Band extends Component {

    render() {
        const {name,songs} = this.props.band;

        return (
           <ListItem classname="list-group-item d-flex justify-content-between align-items-center">
                <p className="m-0">
                    {name}
                </p>
                <span className="badge badge-danger">
                    {songs}
                </span>
           </ListItem>
        );
    }
}

const ListItem = styled.li`
border: 1px solid gray;
list-style: none;
display: grid;
grid-template-columns: 1fr 30px;
padding: 5px;
`;