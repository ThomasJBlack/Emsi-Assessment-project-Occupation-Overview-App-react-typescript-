// import styled from "styled-components";
import React from "react";

import RegionTable from "./RegionTable";
import LineChart from "./LineChart";

interface TrendChartsProps {
    trend_comparison: {
        start_year: number;
        end_year: number;
        regional: number[];
        state: number[];
        nation: number[];
    };
}

const TrendCharts: React.FC<TrendChartsProps> = ({ trend_comparison }) => {
    // const jpd: number = 100 * (jobs.regional / jobs.national_avg); // Regional Job percent above National Avg
    return (
        <div>
            <div id="title">
                <h3>Regional Trends</h3>
                <LineChart trend_comparison={trend_comparison} />
                <RegionTable
                    key="reagionTable"
                    trend_comparison={trend_comparison}
                />
            </div>
        </div>
    );
};

export default TrendCharts;
