import Table from "../components/Table"

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-400", score: 5 },
        { name: "Apple", color: "bg-red-400", score: 3 },
        { name: "Banana", color: "bg-yellow-400", score: 1 },
        { name: "Lime", color: "bg-green-400", score: 4 },
    ]
    
    const config = [
        {
            label: "Name",
            render: (row)=> row.name,
            cmp: (row1, row2)=> row1.name.toString().localeCompare(row2.name.toString()),
        },
        {
            label: "Color",
            render: (row)=> <div className={`p-3 w-1/2 mx-auto ${row.color}`}></div>,
        },
        {
            label: "Score",
            render: (row)=> row.score,
            cmp: (row1, row2)=> row1.score.toString().localeCompare(row2.score.toString()),
        }
    ]
    return (
        <div>
            <Table data={data} config={config}/>
        </div>
    )
}

export default TablePage