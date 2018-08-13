import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            items: [
                { id: uuid(), name: 'Eggs'},
                { id: uuid(), name: 'Milk'},
                { id: uuid(), name: 'Steak'},
                { id: uuid(), name: 'Veggies'},
            ]
        }
    }
    
    handleChange = (event) => {
        
        this.setState({name: event.target.value});
    }

    
    handleSubmit(event) {
        if(this.state.name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name: this.state.name }]
                        }));
                    } 
    }


    
    render() {
        const { items } = this.state;
        return(
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Item" value={this.state.name} onChange={this.handleChange} className="textBox"/>
                    <Button color="dark" onClick={e => this.handleSubmit(e)} className="submit-btn">
                        Submit
                    </Button>
                </form>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem className="item-box">
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => 
                                        {this.setState(state => 
                                                    ({items: state.items.filter(
                                                            item => item.id !== id)
                                                     }));
                                        }}>
                                        &times; 
                                    </Button>
                                    {name} 
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList