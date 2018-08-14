import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid';
import "../App.css";

class ItemModal extends Component {
    state = { 
        modal: false,
        name:  ''
    }
    
    toggle = () => {
        this.setState({
           modal: !this.state.modal 
        });
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            id: uuid(),
            name: this.state.name
        }
        
        this.props.addItem(newItem);
        
        this.toggle();
    }
    
    render() {
        return(
            <div>
                <Button className="submit-btn" onClick={this.toggle}> 
                Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item"> 
                                    Item
                                </Label>
                                <Input type="text" name="name" id="item" placeholder="Add shopping item" onChange={this.onChange} style={{marginBottom:'2rem'}}/>
                                <Button color="dark" block >
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({ item: state.item });


export default connect(mapStateToProps, { addItem })(ItemModal);