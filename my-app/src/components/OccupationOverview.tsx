import React from "react";

const OccupationOverview = () => {
    const sections = [
        { id: "location", text: "Occupation Overview" },
        { id: "summary", text: "Occupation Summary for Computer Programmers" },
        { id: "trends", text: "Regional Trends" },
        { id: "industry", text: "Industries Employing Computer Programmers" },
    ];
    return (
        <div>
            {sections.map((section) => (
                <div key={section.id}>{section.text}</div>
            ))}
        </div>
    );
};

export default OccupationOverview;
