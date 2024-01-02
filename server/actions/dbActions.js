const pool = require('./dbConection.js');


class dbRequeast
{
    // funkcja sprawdzająca czy dany yżytkonk istnieje. Zwraca true jeżeli został znależiony uzytkonik i chasło jest takie jak w bazie
    async LogIn(req,res){
        try {
            const {email,password} = req.body;
            //console.log("Działa")
            //console.log(email);
            //console.log(password);
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
    // zwraca pełne donae danego urzytkonika
    async getFullData(req,res){
        const e = req.body.email;
        console.log(e);
        const sql = "SELECT users.*, privilages.TYPE FROM users LEFT JOIN userprivilages on users.id = userprivilages.id_u LEFT JOIN privilages ON userprivilages.id_p = privilages.id_p WHERE email=?";
        pool.query(sql,e,(err, rows) => {
            if(err)
            {
                console.log("Requeast error");
                res.status(400).send(err.message);
            } else {
                //console.log(rows);
                res.status(200).json(rows);
            }
        })
    }
    // zwraca listę wszstkich zadań. Ich odpowiednim wyśwotelniem zajmuje się forntend
    async getTasks(req,res){
        const type = req.body.type;
        //console.log(type);
        const sql = "SELECT * FROM tasks"
        pool.query(sql,type,(err,rows) => {
            if(err)
            {
                console.log("Requeast error");
                res.status(400).send(err.message);
            } else {
                //console.log(rows);
                res.status(200).json(rows);
            }
        })
    }
    // przyjmuje odpowiedź do zadania (czy było dobra czy zła) i zapisuje ją do tabeli userAnswer zawirającą:
    // id -> użytkonika
    // id -> zadania
    // odpowiedź (czy poprwana czy nie)
    async postAnswer(req,res){
        const userID = req.body.userID;
        const taskID = req.body.taskID;
        const answer = req.body.answer;
        console.log(userID,taskID,answer);
        const sql = "INSERT INTO userAnswers(postDate,userID,taskID,answer) VALUES(CURDATE(),"+userID+","+taskID+","+answer+")";
        pool.query(sql,(err,rows) => {
            if(err)
            {
                console.log("Requeast error");
                res.status(400).send(err.message);
            } else {
                res.status(200).send(true);
            }
        })
    }
    // zwraca listę wszstkich studętów. Używane w panelu nauczycila
    async getStudentsLists(req,res){
        const sql = "SELECT users.*, privilages.TYPE FROM users LEFT JOIN userprivilages on users.id = userprivilages.id_u LEFT JOIN privilages ON userprivilages.id_p = privilages.id_p WHERE type='S'";
        pool.query(sql,(err,rows) => {
            if(err){
                console.log("Requeast error");
                res.status(400).send(err.message);
            }else{
                res.status(200).json(rows);
            }
        })
    }
    // zwraca wszstkie wyniku ucznia
    async getStudnetsResult(req,res){
        const userID = req.body.userID;
        const sql = "SELECT tasks.*,userAnswers.answer as result,userAnswers.postDate as date FROM tasks LEFT JOIN userAnswers ON tasks.id = userAnswers.taskID WHERE userAnswers.userID = ?";
        pool.query(sql,userID,(err,rows) => {
            if(err){
                console.log("Requeast error");
                res.status(400).send(err.message);
            }else{
                res.status(200).json(rows);
            }
        })
    }
    // towry uzytkonika nie wykorzystana nie utowrzona po porstu relikt pierowtnego planu.
    async createUser(req,res){
        console.log("Nic tu na razie nie ma");
        res.status(201).send("Nic tu na razie nie ma");
    }
}
// wyeksportownaie całej kalsy przez to mogę sobię cały plik zaimportować do miennej w api.js i spokojnie z tego kodu korzystać.
module.exports = new dbRequeast();
