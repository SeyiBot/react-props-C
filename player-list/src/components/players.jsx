// import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

    // PlayerCard Component with props added
const PlayerCard = ({name, team, nationality, jerseyNumber, age, position, imageURL})=>{
    return(
        
            <Card style={{ width: '200px', marginBottom:'5%'}}>
            <Card.Img style={{ width:'200px'}} variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    TEAM: {team}
                    <br />
                    NATIONALITY: {nationality}
                    <br />
                    JERSEY NUMBER: {jerseyNumber}
                    <br />
                    AGE: {age}
                    <br />
                    POSITION: {position}
                </Card.Text>
            </Card.Body>
            </Card>
        
    )

}
// default props
    PlayerCard.defaultProps = {
        name: 'Seyi',
        nationality: 'Nigeria',
        jerseyNumber: '30',
        age: '23',
        position:'forward'
    }
export default PlayerCard




