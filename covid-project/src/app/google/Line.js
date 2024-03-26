import React from 'react';
import {
  Chart,
  Axis,
  LineSeries,
  Tooltip,
} from 'react-charts';

const Line = () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [
                    { primary: 'Jan', secondary: 30 },
                    { primary: 'Feb', secondary: 10 },
                    { primary: 'Mar', secondary: 50 },
                ],
            },
            {
                label: 'Series 2',
                data: [
                    { primary: 'Jan', secondary: 20 },
                    { primary: 'Feb', secondary: 40 },
                    { primary: 'Mar', secondary: 30 },
                ],
            },
        ],
        [],
    );

    const primaryAxis = React.useMemo(
        () => ({
            getValue: datum => datum.primary,
        }),
        [],
    );

    const secondaryAxes = React.useMemo(
        () => [
            {
                getValue: datum => datum.secondary,
            },
        ],
        [],
    );

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                    tooltip: true,
                }}
            >
                <Axis id="primary" position="bottom" />
                <Axis id="secondary" position="left" />
                <LineSeries />
                <Tooltip />
            </Chart>
        </div>
    );
};

export default Line;
