const express = require('express')
const path = require('path')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use((req, res) => {
    console.log('모든 요청에 실행하고 싶어요.')
    next()
})
app.get('/', (req, res) => {
    // HTML 서빙
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
    res.send('Opened Express Server')
})

app.post('/', (req, res) => {
    res.send('Express POST')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
