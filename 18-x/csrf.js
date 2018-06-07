connect()
.use(connect.bodyParser())
.use(connect.cookieParser('secret'))
.use(connect.session())
.use(connect.csrf());