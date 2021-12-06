import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Summary from "./Summary";
import TrendCharts from "./TrendCharts";
import EmployingIndustries from "./EmployingIndustries";

const OccupationOverviewWrapper = styled.div`
    margin: 3vw;
    font-size: 20px;
    line-height: 25px;
`;

interface OccupationOverviewProps {
    apiData: {
        occupation: {
            onet: String;
            title: String;
        };
        region: {
            id: String;
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
        trend_comparison: {
            start_year: number;
            end_year: number;
            regional: number[];
            state: number[];
            nation: number[];
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
    };
}

const OccupationOverview: React.FC<OccupationOverviewProps> = ({ apiData }) => {
    return (
        <OccupationOverviewWrapper>
            <Header
                key="header"
                occupation={apiData.occupation}
                region={apiData.region}
            />
            <Summary
                key="summary"
                occupation={apiData.occupation}
                summary={apiData.summary}
            />
            <TrendCharts
                key="trendCharts"
                trend_comparison={apiData.trend_comparison}
            />
            <EmployingIndustries
                key="employingIndustries"
                employing_industries={apiData.employing_industries}
                occupation={apiData.occupation}
            />
        </OccupationOverviewWrapper>
    );
};

export default OccupationOverview;
