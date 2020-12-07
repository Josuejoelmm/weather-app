import React from 'react';
import Container from 'react-bootstrap/Container';
import SelectCity from '../../pages/home/SelectCity';

export default function Layout(props) {
    return (
        <Container className="py-4">
            <div style={{background: '#ffffff'}} className="wrapper-cont border rounded-lg p-3">
                <SelectCity />
                {props.children}
            </div>
        </Container>
    )
}