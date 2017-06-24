var http = require("http")
function request_handler(req,res){
	var body_text = "hello from guvi";
	res.end(body_text);
}
var svr = http.createserver(request_handler);
svr.listen(8080);