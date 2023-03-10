const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const nunjucks = require('nunjucks')
const dotenv = require('dotenv')
// process.env.COOKIE_SECRET 없음
dotenv.config() // process.env
// process.env.COOKIE_SECRET 있음
const pageRouter = require('./routes/page')

const app = express()
app.set('port', process.env.PORT || 8001)
app.set('view engine', 'html')
nunjucks.configure('views', { express: app, watch: true })

app.use(morgan('dev')) // 실제 운영할 땐, combined로 변경
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
)

app.use('/', pageRouter)
app.use((req, res, next) => {
    // 404 NOT FOUND
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404
    next(error)
})
app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {} // 에러 로그를 서비스한테 넘겨준다.
    res.status(err.status || 500)
    res.render('error')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
