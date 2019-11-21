const { app, pool } =require('./connect')
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(bodyParser.urlencoded({
	extended: false
}))
const user = require('../user')
const hsrm_line = require('../highSpeed-line')

app.all('*', (req, res, next) => {
    //这里处理全局拦截，一定要写在最上面
    next()
})
app.all('/', (req, res) => {
    pool.getConnection((err, conn) => {
        res.json({ type: 'test'})
        pool.releaseConnection(conn) // 释放连接池，等待别的连接使用
    })
})
app.use('/api', user)
app.use('/api', hsrm_line)
app.listen(3000, () => {
    console.log('hsrm后台node服务启动成功','端口: localhost:3000')
})