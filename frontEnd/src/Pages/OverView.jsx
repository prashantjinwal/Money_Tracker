import {useEffect, useState} from "react"
import axios from "axios"
import Stack from "../Components/dynamic/Stack"
import AccountStack from "../Components/dynamic/AccountStack"

const OverView = function  (){

//  const [test, settest] = useState([]);
//     useEffect(()=>{
//         axios.get('/api/test')
//         .then((Response)=>{settest(Response.data)})
//         .catch((err)=>{
//             console.error(err);
//         },[])
//     })

    return (
        <div  className="bg-black w-full h-full text-white md:p-[3em]  p-[1.5em]">
            {/* <h2>OverView</h2>
            <h2>TEST : {test.length}</h2>
            <p>
                {
                    test.map((T)=>(
                        <div key={T.id} >
                            <p>{T.content}</p>
                        </div>
                    ))
                }
            </p> */}

        <div className="flex flex-wrap gap-5  md:flex-nowrap md:gap-5 ">
            <Stack StackHeaderName={"Expenses"} StackValue={4450} />
            <Stack StackHeaderName={"Income"} StackValue={55110} />
            <Stack StackHeaderName={"Balance"} StackValue={25430} />
        </div>
        <div className="mt-[2em] flex flex-wrap gap-5 md:flex-nowrap  ">
            <AccountStack/>
            <Stack StackHeaderName={"Balance"} StackValue={25430}/>
        </div>


        </div>
    )
}

export default OverView