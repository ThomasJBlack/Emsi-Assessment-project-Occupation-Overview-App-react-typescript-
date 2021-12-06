import React from "react";
import { useState, useEffect } from "react";

import OccupationOverview from "./components/OccupationOverview";

const App: React.FC = () => {
    // console.clear(); // for clearer debugging

    // const sections = [
    //     // test data
    //     { id: "location", text: "Occupation Overview" },
    //     { id: "summary", text: "Occupation Summary for Computer Programmers" },
    //     { id: "trends", text: "Regional Trends" },
    //     { id: "industry", text: "Industries Employing Computer Programmers" },
    // ];

    const [overview, setOverview] = useState();

    useEffect(() => {
        fetch("https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32")
            .then((res) => res.json())
            .then((data) => {
                setOverview(data);
                // console.log(data);
            });
    }, []);

    return (
        <div className="App">
            {overview ? (
                <OccupationOverview apiData={overview} />
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default App;
