import React from 'react';

function Cell(props) {
    return <td>{props.value}</td>;
}

function CellHead(props) {
    return <td>{props.value}</td>;
}

function Row(props) {
    if(props.isHeaderRow === true) {
        const headerCells = props.row.map(
            (cellValue) => <CellHead value={cellValue} />
        );
        return <tr key="title">{headerCells}</tr>
    }
    else {
        const rowCells = Object.values(props.row).map(
            (cellValue) => <Cell value= {cellValue} />
        );

        return <tr>{rowCells}</tr>;
    }
}

function TableHead(props) {
    return(
        <thead>
            <Row isHeaderRow={true} row={props.head} />
        </thead>
    );
}

function TableBody(props) {
    const allRows = props.body.map(
        (row) => <Row key={row.id} row={row}/>
    );

    return(
        <tbody>
            {allRows}
        </tbody>
    );
}

function Table(props) {
    const style = {
        width: "50%",
        margin: "30px auto"
    };

    return (
        <table className="table table-dark" style={style}>
            <TableHead head={props.head} />
            <TableBody body={props.body} />
        </table>
    );
}

export default Table;