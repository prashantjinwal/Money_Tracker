import {useState} from "react"

const OverView = function  (){

 const [test, settest] = useState();

    return (
        <div id="screen">
            <h2>OverView</h2>
            <h2>TEST : {test.length}</h2>
            <p>
                {
                    test.map((T)=>{
                        <div key={T.id} >
                            <p>{T.content}</p>
                        </div>
                    })
                }
            </p>

        </div>
    )
}

export default OverView