import { Fragment } from "react";
import { useState } from "react";
import { LuChevronUp, LuChevronDown } from 'react-icons/lu';

function Table({ data, config}) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label)=> {
        if(!sortBy){
            setSortBy(label)
        } else if(sortBy !== label){
           setSortBy(label)
        } else if(sortBy === label){
            ;
        }

        if(!sortOrder){
            setSortOrder("asc")
        } else if(sortOrder === "asc"){
            setSortOrder("desc")
        } else if(sortOrder === "desc"){
            setSortOrder("asc")
        }
    }
    
    const config_updated = config.map((column)=> {
        if(!column.cmp){
            return column;
        }

        return {
            ...column,
            header: ()=> (
                <th 
                    className="p-3 px-10 cursor-pointer hover:bg-gray-150"
                    onClick={() => handleClick(column.label)}
                >
                    <div className="flex justify-evenly">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    let data_updated = data;
    if(sortBy && sortOrder){
        const {cmp} = config.find((column) => column.label === sortBy);
        data_updated = [...data].sort((row1, row2) => {
            const reverseOrder = sortOrder === "asc" ? +1 : -1;
            return cmp(row1, row2) * reverseOrder;
        })
    }


    const renderedRows = data_updated.map((row, index)=> {
        let renderedRow = config.map((column, index)=> {
            return <td key={index} className="p-3 text-center">{column.render(row)}</td>;
        })

        return (
            <tr key={index} className="border-b">
                {renderedRow}
            </tr>
        );
    });

    const renderedHeader = config_updated.map((column, index)=> {
        if(column.header){
            return <Fragment key={index}>{column.header()}</Fragment>;
        } else{
            return <th key={index} className="p-3 px-10">{column.label}</th>
        }
    })

    
    return (
        <div>
            This is a table containing {data_updated.length} rows. Name and Score are sortable.
            <br></br>
            <br></br>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">{renderedHeader}</tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div></div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div></div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <LuChevronUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <LuChevronDown />
        </div>
      );
    }
  }

export default Table