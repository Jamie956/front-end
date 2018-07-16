res.header("Access-Control-Expose-Headers", "access-token"); //定义请求头
req.headers["access-token"]; //获取请求头
res.header("access-token", now); //设置请求头
res.sendStatus(401); //设置状态
req.body; //获取post过来的data
res.json(true); //返回数据
