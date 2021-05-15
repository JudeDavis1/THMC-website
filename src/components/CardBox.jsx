import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class CardBox extends Component {
    state = {  };
    render() { 
        return (
            <Card className={this.props.className} align={this.props.align}>
                <Card.Header align='left'>{this.props.heading}</Card.Header>
                <Card.Body align='left'>
                <Card.Img style={{
                    alignSelf: 'top'
                }} className={this.props.imageClassName} variant='bottom' src={this.props.image} />
                    <div style={{paddingTop: '10pt'}}><Button onClick={this.props.onMoreInfoButtonClick} style={{width: '100%', fontSize: '2vh'}} variant='primary'>See more</Button></div>
                </Card.Body>
            </Card>
        );
    }
}
 
export default CardBox;