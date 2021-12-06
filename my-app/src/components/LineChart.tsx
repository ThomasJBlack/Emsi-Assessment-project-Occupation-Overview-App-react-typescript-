import styled from "styled-components";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChartWrapper = styled.div`
    max-width: 93vw;
    margin: 0 auto;
`;

interface LineChartProps {
    trend_comparison: {
        start_year: number;
        end_year: number;
        regional: number[];
        state: number[];
        nation: number[];
    };
}

const LineChart: React.FC<LineChartProps> = ({ trend_comparison }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Percent Change",
            },
        },
    };

    const generateChartData = () => {
        const labels: number[] = [];

        const range = trend_comparison.end_year - trend_comparison.start_year;
        for (let i = 0; i <= range; i++) {
            // x-axis (year)
            labels.push(trend_comparison.start_year + i);
        }
        return {
            labels,
            datasets: [
                {
                    label: "Region",
                    data: trend_comparison.regional.map((count) =>
                        (
                            ((count - trend_comparison.regional[0]) /
                                trend_comparison.regional[0]) *
                            100
                        ).toFixed(1)
                    ),
                    borderColor: "rgb(17, 11, 100, 0.5)",
                    backgroundColor: "rgba(17, 11, 100, 0.5)",
                },
                {
                    label: "State",
                    data: trend_comparison.state.map((count) =>
                        (
                            ((count - trend_comparison.state[0]) /
                                trend_comparison.state[0]) *
                            100
                        ).toFixed(1)
                    ),
                    borderColor: "rgb(26, 23, 177)",
                    backgroundColor: "rgb(26, 23, 177)",
                },
                {
                    label: "Nation",
                    data: trend_comparison.nation.map((count) =>
                        (
                            ((count - trend_comparison.nation[0]) /
                                trend_comparison.nation[0]) *
                            100
                        ).toFixed(1)
                    ),
                    borderColor: "rgba(27, 163, 216, 0.5)",
                    backgroundColor: "rgba(27, 163, 216, 0.5)",
                },
            ],
        };
    };

    return (
        <LineChartWrapper>
            <Line options={options} data={generateChartData()} />
        </LineChartWrapper>
    );
};

export default LineChart;
