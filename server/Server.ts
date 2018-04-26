import { createServer } from 'http'
import { Server as WebSocketServer } from 'ws'
const { Sea } = require('shoaling')

import { connectedClients, updateAll } from './ConnectedClients'
import { WebSocketTransport } from 'metaverse-api'
import RemoteScene, { render } from './RemoteScene'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const server = createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', function connection(ws, req) {
  const client = new RemoteScene(WebSocketTransport(ws))
  client.on('error', (err: Error) => {
    console.error(err)
    ws.close()
  })
  connectedClients.add(client)
  ws.on('close', () => connectedClients.delete(client))
  console.log(`Client connected at ${req.connection.remoteAddress}`)
})

server.listen(8087, function listening() {
  console.log(`Listening on 8087`)
})

// Sea
const sea = new Sea(70, 1200, 300, 1200, 200)
sea.start(64)
sea.on('update', (fish: any) => fish.velocity.mul(0.97))
setInterval(() => {
  render(sea)
  updateAll()
}, 100)
