import React, { useEffect, useState } from 'react'
import { getServerData } from '../quize/helper/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    })

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}






// below is self coded



























// import React from "react";

// export default function ResultTable(){

//     return(
//         <div>
//        <table>
// <thead className="table-header">
// <tr className="table-row">
// <td>Name</td>
// <td>Attempts</td>
// <td>Earn Points</td>
// <td>Result</td>
// </tr>
// </thead>
// <tbody>
//     <tr className="table-body">
// <td>Daily Tution</td>
// <td>03</td>
// <td>20</td>
// <td>Passed</td>
//     </tr>
// </tbody>

//        </table>
            
//             </div>
//     )
// }