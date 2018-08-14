import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
            isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <div>
            <Navbar light expand="sm" className="mb-5 navbar-custom" >
                <Container>
                    <NavbarBrand href="/">
                        Shopping List
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="hover-custom ml-auto" navbar>
                            <NavItem>
                                <NavLink className="hover-custom" href="https://youtube.com">
                                    Youtube
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;
