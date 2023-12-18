import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}























// import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'

// export default function ResultTable() {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
//             setData(res)
//         })
//     })

//   return (
//     <div>
//         <table>
//             <thead className='table-header'>
//                 <tr className='table-row'>
//                     <td>Name</td>
//                     <td>Attemps</td>
//                     <td>Earn Points</td>
//                     <td>Result</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 { !data ?? <div>No Data Found </div>}
//                 {
//                     data.map((v, i) => (
//                         <tr className='table-body' key={i}>
//                             <td>{v?.username || ''}</td>
//                             <td>{v?.attempts || 0}</td>
//                             <td>{v?.points || 0}</td>
//                             <td>{v?.achived || ""}</td>
//                         </tr>
//                     ))
//                 }
                
//             </tbody>
//         </table>
//     </div>
//   )
// }