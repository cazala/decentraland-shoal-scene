import { createServer } from 'http'
import { Server as WebSocketServer } from 'ws'
const { Sea } = require('shoaling')

import { WebSocketTransport } from 'metaverse-api'
import RemoteScene, { render } from './RemoteScene'

// server
const clients: Set<RemoteScene> = new Set()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const server = createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', function connection(ws, req) {
  const client = new RemoteScene(WebSocketTransport(ws))
  client.on('error', (err: Error) => ws.close())
  clients.add(client)
  ws.on('close', () => clients.delete(client))
  console.log(`Client connected at ${req.connection.remoteAddress}`)
})

server.listen(8087, function listening() {
  console.log(`Listening on 8087`)
})

// sea
const sea = new Sea(38, 1200, 300, 1200, 200)
sea.start(64)
sea.on('update', (fish: any) => fish.velocity.mul(0.97))
setInterval(() => {
  render(sea)
  clients.forEach(client => client.forceUpdate())
}, 100)
