import styled from "styled-components";
import React from "react";

const TableRow = styled.tr`
    width: 93vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid lightgrey;

    font-size: 12px;
    color: #48a7f5;
`;
const Left = styled.td`
    display: flex;
    justify-content: left;
`;
const Right = styled.td`
    display: flex;
    justify-content: right;
    text-align: right;
`;

const RightBox = styled.div`
    width: 10vw;
`;

interface IndustryTableProps {
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

const IndustryTable: React.FC<IndustryTableProps> = ({
    employing_industries,
}) => {
    return (
        <table>
            <thead id="tableHeader" key="industryTableHead">
                <TableRow>
                    <Left>Industry</Left>
                    <Right>
                        <div>
                            Occupation Jobs in Industry (
                            {employing_industries.year})
                        </div>
                        <div>
                            % of Occupation in Industry (
                            {employing_industries.year})
                        </div>
                        <div>
                            % of Total Jobs in Industry (
                            {employing_industries.year})
                        </div>
                    </Right>
                </TableRow>
            </thead>
            <tbody>
                {employing_industries.industries.map(
                    ({ naics, title, in_occupation_jobs, jobs }) => (
                        <TableRow key={title.toString()}>
                            <Left>
                                <div>{title}</div>
                            </Left>
                            <Right>
                                <RightBox>
                                    {in_occupation_jobs.toLocaleString()}
                                </RightBox>
                                <RightBox>
                                    {(
                                        (in_occupation_jobs /
                                            employing_industries.jobs) *
                                        100
                                    ).toFixed(1)}
                                    %
                                </RightBox>
                                <RightBox>
                                    {(
                                        (in_occupation_jobs / jobs) *
                                        100
                                    ).toFixed(1)}
                                    %
                                </RightBox>
                            </Right>
                        </TableRow>
                    )
                )}
            </tbody>
        </table>
    );
};

export default IndustryTable;
