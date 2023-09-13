import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Welcome = () => {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button variant="primary">Welcome</Button>
                    </p>
            </div>
        </>
    );
}

export default Welcome