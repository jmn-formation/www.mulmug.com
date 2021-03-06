import React from 'react'
import { Row, Col } from 'reactstrap';
import Header from './header.js'
import Footer from './footer.js'



function MentionsLegales() {


    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>

                {/* MENTIONS LÉGALES */}

                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                    <h4 style={styleTitre}>Mentions légales</h4>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>Éditeur du site</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG SAS</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>14 Rue de Solférino 92100 Boulogne Billancourt</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>R.C.S 848 614 293 R.C.S. Nanterre</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Capital: 2 000 €</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Url du site internet: www.mulmug.com</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Tél: 01 02 03 04 05</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>E-mail: contact@mulmug.com</p>
                    </Col>
                </Row>

                <Row style={{ display: 'flex', justifyContent: 'center' }} >
                    <hr style={{ width: '80%', marginTop: 10, marginBottom: 10 }} />
                </Row>

            </div>

            <Footer />

        </div>

    )
}

var styleTitre = {
    color: '#1F8A9E',
    textAlign: 'center',
    marginBottom: 30
};

export default MentionsLegales;