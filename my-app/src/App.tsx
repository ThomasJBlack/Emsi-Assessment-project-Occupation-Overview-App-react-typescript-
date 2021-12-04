import React from "react";

import OccupationOverview from "./components/OccupationOverview";

const App: React.FC = () => {
    console.clear(); // for clearer debugging
    return (
        <div className="App">
            <OccupationOverview />
        </div>
    );
};

export default App;
