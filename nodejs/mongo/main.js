var mongo = require('mongodb');
// var mydb = "mongodb://localhost:27017/mydb"//no auth
var mydb = "mongodb://jamie956:123456@localhost:27017/mydb"

mongo.connect(mydb ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database demo_db created successfully");
	db.close();
});