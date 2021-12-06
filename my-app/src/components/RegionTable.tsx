import styled from "styled-components";
import React from "react";

const TableRow = styled.tr`
    width: 93vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;

    font-size: 12px;
`;
const Left = styled.td`
    display: flex;
    justify-content: left;
`;
const Right = styled.td`
    display: flex;
    justify-content: space-between;
    text-align: right;
`;
const RightBox = styled.div`
    width: 10vw;
`;

interface RegionTableProps {
    trend_comparison: {
        start_year: number;
        end_year: number;
        regional: number[];
        state: number[];
        nation: number[];
    };
}

const RegionTable: React.FC<RegionTableProps> = ({ trend_comparison }) => {
    const { start_year, end_year, regional, state, nation } = {
        ...trend_comparison,
    };
    const area_data: Array<Array<number>> = [regional, state, nation];

    const area_titles = ["Region", "State", "Nation"]; // sort of hard-coded. Would like to change api data structure.
    return (
        <table>
            <thead id="tableHeader" key={start_year}>
                <TableRow>
                    <Left>Region</Left>
                    <Right>
                        <RightBox>{start_year} Jobs</RightBox>
                        <RightBox>{end_year} Jobs</RightBox>
                        <RightBox>Change</RightBox>
                        <RightBox>% Change</RightBox>
                    </Right>
                </TableRow>
            </thead>
            <tbody>
                {area_data.map((region, index) => (
                    <TableRow key={region[0]}>
                        <Left>
                            <div>{area_titles[index]}</div>
                        </Left>
                        <Right>
                            <RightBox>{region[0].toLocaleString()}</RightBox>
                            <RightBox>
                                {region[region.length - 1].toLocaleString()}
                            </RightBox>
                            <RightBox>
                                {(
                                    region[region.length - 1] - region[0]
                                ).toLocaleString()}
                            </RightBox>
                            <RightBox>
                                {(
                                    ((region[region.length - 1] - region[0]) /
                                        region[0]) *
                                    100
                                ).toFixed(1)}
                                %
                            </RightBox>
                        </Right>
                    </TableRow>
                ))}
            </tbody>
        </table>
    );
};

export default RegionTable;
