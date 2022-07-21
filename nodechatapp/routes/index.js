var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// }); 


//모든 사용자 대상 채팅
router.get('/chat', function(req, res, next) {
	res.render('chat');
});

//그룹 채팅-지정채팅방 기반 채팅
router.get('/groupchat', function(req, res, next) {
	res.render('groupchat');
});


module.exports = router;
