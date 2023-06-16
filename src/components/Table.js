

function Table({ data }) {
    const renderedRows = data.map((row, index)=> {
        // row is a object
        // let renderedRowContent = [];

        // for(let key in row){
        //    renderedRowContent.push(<td>{row[key]}</td>);
        // }

        let renderedRowContent = Object.values(row).map((val, index)=> {
            return(
                <td key={index} className="p-3">{val}</td>
            )
        })

        return (
            <tr key={index} className="border-b">
                {renderedRowContent}
            </tr>
        )
    })

    const renderedHeadContent = Object.keys(data[0]).map((val, index)=> {
        return(
            <th key={index}>{val}</th>
        )
    })
    
    return (
        <div>
            This is a table consisting {data.length} rows:
            <br></br>
            <br></br>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">{renderedHeadContent}</tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table