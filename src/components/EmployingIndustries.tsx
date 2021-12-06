// import styled from "styled-components";
import React from "react";
import IndustryTable from "./IndustryTable";

interface EmployingIndustryProps {
    occupation: {
        onet: String;
        title: String;
    };
    employing_industries: {
        year: 2015;
        jobs: 12352;
        industries: [
            {
                naics: String;
                title: String;
                in_occupation_jobs: number;
                jobs: number;
            },
            {
                naics: String;
                title: String;
                in_occupation_jobs: number;
                jobs: number;
            },
            {
                naics: String;
                title: String;
                in_occupation_jobs: number;
                jobs: number;
            },
            {
                naics: String;
                title: String;
                in_occupation_jobs: number;
                jobs: number;
            },
            {
                naics: String;
                title: String;
                in_occupation_jobs: number;
                jobs: number;
            }
        ];
    };
}

const EmployingIndustry: React.FC<EmployingIndustryProps> = ({
    employing_industries,
    occupation,
}) => {
    // const jpd: number = 100 * (jobs.regional / jobs.national_avg); // Regional Job percent above National Avg
    return (
        <div>
            <div id="title">
                <h3>Industries Employing {occupation.title}</h3>
                <IndustryTable employing_industries={employing_industries} />
                {/* <RegionTable
                    key="reagionTable"
                    trend_comparison={trend_comparison}
                /> */}
                {/* superimpose these? */}
            </div>
        </div>
    );
};

export default EmployingIndustry;
