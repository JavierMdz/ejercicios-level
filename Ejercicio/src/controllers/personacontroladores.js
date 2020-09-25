const controller ={};

controller.list=('/', function(req, res) {
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM tablaxd',(err,rows));
    });
});

module.exports = controller;