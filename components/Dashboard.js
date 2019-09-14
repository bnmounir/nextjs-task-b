import React from 'react';
import CellData from './CellData';
import uuidv4 from 'uuid/v4';

const Dashboard = ({ data }) => {
    let team_indices = Object.keys(data.away_team);
    let away_team = Object.values(data.away_team);
    let home_team = Object.values(data.home_team);

    let tableBoard = [];
    let rowHeader = [
        <CellData key={uuidv4()} data={'Indices'} />,
        ...team_indices.map(e => <CellData key={uuidv4()} data={e} />)
    ];
    let rowAway = [
        <CellData key={uuidv4()} data={'Team Away'} />,
        ...away_team.map(e =>
            typeof e === 'boolean' ? (
                e === true ? (
                    <CellData key={uuidv4()} data={'Yes'} />
                ) : (
                    <CellData key={uuidv4()} data={'No'} />
                )
            ) : (
                <CellData key={uuidv4()} data={e} />
            )
        )
    ];
    let rowHome = [
        <CellData key={uuidv4()} data={'Team Home'} />,
        ...home_team.map(e =>
            typeof e === 'boolean' ? (
                e === true ? (
                    <CellData key={uuidv4()} data={'Yes'} />
                ) : (
                    <CellData key={uuidv4()} data={'No'} />
                )
            ) : (
                <CellData key={uuidv4()} data={e} />
            )
        )
    ];
    tableBoard.push(
        <thead key={uuidv4()} className='thead-dark'>
            <tr key={uuidv4()}>{rowHeader}</tr>
        </thead>
    );
    tableBoard.push(
        <tbody key={uuidv4()}>
            <tr key={uuidv4()}>{rowAway}</tr>
        </tbody>
    );
    tableBoard.push(
        <tbody key={uuidv4()}>
            <tr key={uuidv4()}>{rowHome}</tr>
        </tbody>
    );

    return (
        <div className='container'>
            <div>
                <table className='table'>{tableBoard}</table>
            </div>
        </div>
    );
};

export default Dashboard;
