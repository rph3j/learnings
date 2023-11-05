const pool = require('./dbConection.js');


class dbRequeast
{
    async LogIn(req,res){
        try {
            const {email,password} = req.body;
            console.log("Działa")
            console.log(email);
            console.log(password);
            const sql = 'SELECT password FROM users WHERE email=?';
            pool.query(sql, email, (err, rows) => {
                if(err){
                    res.status(400).send(err.message);
                } else {
                    let isValid = true;
                    if(rows.length === 0){
                        isValid = false;
                        res.status(200).json({password_valid: isValid});
                        return;
                    }else{
                        if(password != rows[0].password)
                        {
                            isValid = false;
                            res.status(200).json({ password_valid: isValid });
                            return;
                        }
                    }
                    res.status(200).json({ password_valid: isValid });
                }
            })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getFullData(req,res){
        const e = req.body.email;
        console.log(e);
        const sql = "SELECT users.*, privilages.TYPE FROM users LEFT JOIN userPrivilages on users.id = userprivilages.id_u LEFT JOIN privilages ON userprivilages.id_p = privilages.id_p WHERE email=?";
        pool.query(sql,e,(err, rows) => {
            if(err)
            {
                console.log("Connection database error");
                res.status(400).send(err.message);
            } else {
                console.log(rows);
                res.status(200).json(rows);
            }
        })
    }

    async createUser(req,res){
        console.log("Nic tu na razie nie ma");
        res.status(201).send("Nic tu na razie nie ma");
    }
}

module.exports = new dbRequeast();