const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const mysql = require('mysql')

let pool = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'jegyzetek'
    }
)

app.route('/notes')
    .get((req, res) => {
        const q = 'select * from notes'
        pool.query(q, (error, results) => {
            if (!error) {
                res.send(results)
            } else res.send(error)
        })
    })
    .post((req, res) => {
        const q = 'insert into notes (title,content) values (?,?)'
        pool.query(q, [req.body.title, req.body.content],
            (error, result) => {
                if (!error) {
                    res.send(result)
                } else res.send(error)
            })
    })

app.route('/notes/:id')
    .get((req,res)=>{
        const q='select * from notes where id=?'
        pool.query(q,[req.params.id],
            (error,result)=>{
                if (!error,result) {
                    res.send(result)
                }else res.send(error)
            })
    })
    .delete((req,res)=>{
        const q='delete from notes where id=?'
        pool.query(q,[req.params.id],
            (error,result)=>{
                if (!error) {
                    res.send(result)
                }else res.send(error)
            })
    })
    app.listen(5000,()=> console.log('servert started on port 5000...'))