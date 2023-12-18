
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


/** Custom Hook */
import { useFetchQestion } from '../quize/hooks/FetchQuestion'
import { updateResult } from '../quize/hooks/setResult'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQestion() 

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked}))
    }, [checked])
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <>Ajay</>,
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}






























// import React, {useEffect, useState} from "react";
// import data from '../database/data';
// export default function Questions(){

//    const [checked, setChecked] = useState(undefined)

//    const question = data[0]

//    useEffect(()=>{
//     console.log(question)
//    })
//     function onSelect(){
//       // setChecked(true)
//         console.log('radio button change')
//     }
//     return(
//         <div className="questions">
//           <h2 className="text-light">Simple Question 1</h2>
//           <ul key={question.id}>
//             {
//                 question.options.map((q, i)=>(

//                     <li key={i}>
//                 <input 
//                 type="radio"
//                 value={false}
//                 name="options"
//                 id={`q${i}-option`}
//                 onChange={onSelect()}
//                 />

//              <label className="text-primary" htmlFor={`q${i}-option`}>option</label> 
//           <div className="check"></div>
//             </li>


//                 ))
//             }
     
//           </ul>

//         </div>
//     )
// }