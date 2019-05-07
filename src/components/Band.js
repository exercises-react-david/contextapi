import React,{Component} from 'react';
import styled from 'styled-components';
import {DiskContext} from './Disk';

export default class Band extends Component {

    render() {
        return (
            <DiskContext.Consumer>
                {(value) =>{
                    return Object.keys(value.state).map(bandId => {
                        return (
                            <ListItem key={bandId}>
                                <p className="m-0">
                                    {value.state[bandId].name}
                                </p>
                                <span className="badge badge-danger">
                                        {value.state[bandId].songs}
                                </span>
                                <button onClick={()=>{value.addSong(bandId)}} className="btn btn-success" type="button">+ song</button>
                            </ListItem>
                        )
                    })
                }}
            </DiskContext.Consumer>
        );
    }
}

const ListItem = styled.li`
border: 1px solid gray;
list-style: none;
display: grid;
grid-gap: 5px;
grid-template-columns: 1fr 30px 80px;
padding: 5px;
`;