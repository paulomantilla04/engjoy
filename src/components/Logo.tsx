import React from 'react';
import LogoSVG from '../assets/logo.svg';

interface Props {
    className?: string;
}

const Logo: React.FC = ({className}: Props) => {
    return (
        <div className={className}>
            <LogoSVG/>
        </div>
    );
};

export default Logo;