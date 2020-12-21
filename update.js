// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

//users から id で検索
let sql = "UPDATE users SET ? WHERE ?;";
let params = [
    { email: "test@test.com" },
    { id: 1 },
];
con.query(sql, params, (err, results) => {
    if (err) throw err;
    console.log(sql);
    console.log(result);
});

//DB接続終了
con.end();