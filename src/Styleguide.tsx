import React from 'react';
import Button from './components/Button';

const Styleguide: React.FC = () => {
    return (
        <>
            <div>
                <h1>Styleguide</h1>
                <p>Welcome to the styleguide page. Here you can find the design guidelines and components used in this project.</p>
            </div>
            <div>
                {/* Boutons */}
                <h2>Buttons</h2>
                <Button text="Primary button" />
                <Button text="Secondary button" variant="secondary" />
                <Button text="Danger button" variant="danger" />
                <Button text="Warning button" variant="warning" />
                <Button text="Disabled button" variant="disabled" />
            </div>
        </>
    );
};

export default Styleguide;