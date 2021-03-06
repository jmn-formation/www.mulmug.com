import React, { useState } from 'react';
import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


function Header(props) {

    // CREATION DU DROPDOWN

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [goToPage, setGoToPage] = useState(false)



    if (goToPage === true) {

        if (props.token) {
            return <Redirect to='/homepageconnectedparent' />
        } else {
            return <Redirect to='/signinscreen' />
        };
    };


    return (
        <div style={{ background: "linear-gradient(#54C5B4, #1F8A9E)" }}>
            <Row style={{ display: 'flex', flexDirection: 'row', paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={12} md={4} >
                    <Link to='/'><img alt="" width='80%' src="./logomulmugwhite.png" /></Link>
                </Col>
                <Col xs={12} md={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Link to="/Mulmugplusabond" style={{ textDecorationLine: 'none' }}><p style={{ backgroundColor: '#FFC700', color: '#FFFFFF', fontWeight: 'bold', paddingRight: 5, width: 140, borderRadius: 10, textAlign: 'center', margin: 5 }}>MULMUG PLUS</p></Link>
                    <div style={{ width: 100, color: '#FFFFFF', margin: 5 }}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                            ><Button color="link" style={{ textDecorationLine: 'none', width: '100%', color: '#FFFFFF', padding: 0, border: 'none' }}>Mon compte</Button>
                            </DropdownToggle>
                            <DropdownMenu style={{ width: 200, marginRight: 90 }}>
                                <Link to="/SigninScreen" style={{ textDecorationLine: 'none', color: '#1F8A9E' }}><p onClick={toggle}>Me connecter | M'inscrire</p></Link>
                                <p onClick={() => { toggle(); setGoToPage(true) }} style={{ textDecorationLine: 'none', color: '#1F8A9E', cursor: 'pointer' }}>Mon profil et Pilotage</p>
                                <p onClick={toggle}>Me d??connecter</p>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </div >

    )
}

function mapStateToProps(state) {
    return { token: state.token }
};
export default connect(
    mapStateToProps,
    null
)(Header);
