var sql = require('./sql.js');


var db = new sql.Database();

var query = "create table test (id int,name char);";

db.run(query);

var ins = "insert into test values(1,'Reena');";

ins+= "insert into test values(2,'Meena');";
ins+= "insert into test values(3,'Heena');";

db.exec(ins);
var result = [];
var q = 'select * from test;';
function fn(row)
{
	result.push(row);
}
db.each(q,{},fn);

module.exports = JSON.stringify(result);
