import React from "react";

interface HeaderProps {
    occupation: {
        onet: String;
        title: String;
    };
    region: {
        id: String;
        title: String;
    };
}

const Header: React.FC<HeaderProps> = ({ occupation, region }) => {
    return (
        <div id="header">
            <h2>Occupation Overview</h2>
            <div id="location">
                {occupation.title} in {region.title}
            </div>
        </div>
    );
};

export default Header;
