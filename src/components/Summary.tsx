import styled from "styled-components";
import React from "react";

// make a helper wrapper
const Green = styled.span`
    color: green;
    border: 0;
    margin: 0;
`;

const ThreeSectionsWrapper = styled.div`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 93vw;
    text-align: center;
`;

const ThirdSectionWrapper = styled.div`
    padding: 20px;
    width: 400px;
    border: 1px solid lightgray;
    line-height: 0;
`;

interface SummaryProps {
    occupation: {
        onet: String;
        title: String;
    };
    summary: {
        jobs: {
            year: number;
            regional: number;
            national_avg: number;
        };
        jobs_growth: {
            start_year: number;
            end_year: number;
            regional: number;
            national_avg: number;
        };
        earnings: {
            regional: number;
            national_avg: number;
        };
    };
}

const Summary: React.FC<SummaryProps> = ({ occupation, summary }) => {
    const { jobs, jobs_growth, earnings } = { ...summary };
    let jpd: number = 100 * (jobs.regional / jobs.national_avg); // Regional Job percent above National Avg
    jpd = jpd - (jpd % 1); // clears decimal values. for some reasion, .toFixed(0) threw an error "right-hand side of arithmetic equation must be of type 'any'"
    return (
        <div>
            <div id="title">
                <h3>Occupation Summary for {occupation.title}</h3>
                <ThreeSectionsWrapper id="summary">
                    <ThirdSectionWrapper id="jobs">
                        <h5>{jobs.regional.toLocaleString()}</h5>
                        <h6>Jobs ({jobs.year})</h6>
                        <h6>
                            {jpd}% <Green>above</Green> National Average
                        </h6>
                    </ThirdSectionWrapper>
                    <ThirdSectionWrapper id="change">
                        <div>
                            <h5>
                                <Green>+{jobs_growth.regional}</Green>
                            </h5>
                            <h6>
                                % Change ({jobs_growth.start_year}-
                                {jobs_growth.end_year})
                            </h6>
                            <h6>
                                Nation:{" "}
                                <Green>+{jobs_growth.national_avg}</Green>
                            </h6>
                        </div>
                    </ThirdSectionWrapper>
                    <ThirdSectionWrapper id="earnings">
                        <h5>${earnings.regional}/hr</h5>
                        <h6>Median Hourly Earnings</h6>
                        <h6>Nation: ${earnings.national_avg}/hr</h6>
                    </ThirdSectionWrapper>
                </ThreeSectionsWrapper>
            </div>
        </div>
    );
};

export default Summary;
