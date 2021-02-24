const http = require('http')
const fs = require('fs')
const path = require('path');

const express = require('express')
const nocache = require('nocache')
const cors = require('cors')
const winston = require('winston'),
  expressWinston = require('express-winston')
var history = require('connect-history-api-fallback')

if (process.env.NODE_ENV === 'production') {
  const tracer = require('dd-trace').init({
    analytics: true,
    profiling: true,
    logInjection: true,
    service: 'mobile'
  })
}

function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const app = express()

app.use(nocache())

app.use(cors())
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.json(),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  requestWhitelist: ['url', 'headers', 'body'],
  responseWhitelist: ['body'],
  ignoreRoute: (req, res) => {
    if (req.originalUrl.endsWith('/healthcheck.html')) {
      return true
    }

    return false
  }
}))

const staticFileMiddleware = express.static(__dirname + '/public')
app.use(staticFileMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true
}))
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/public/index.html'))
})

const port = normalizePort(process.env.PORT || '8080')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
})
