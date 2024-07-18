import express from "express"

const app = express()

app.get( "/api/test" ,(req, res)=>{

    const test = [
        {
            id: 1,
            content: "test1"
        },
        {
            id: 2,
            content: "test2"
        },
        {
            id: 3,
            content: "test3"
        },
        {
            id: 4,
            content: "test4"
        },
        {
            id: 5,
            content: "test5"
        }
    ];
    
    res.send(test)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
} )
