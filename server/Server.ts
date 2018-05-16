import { Server as WebSocketServer } from 'ws'
import { WebSocketTransport } from 'metaverse-api'
import RemoteScene, { render } from './RemoteScene'

// Server
const app = require('express')()
const server = require('http').createServer(app)
const wss = new WebSocketServer({ server })
const clients: Set<RemoteScene> = new Set()

wss.on('connection', (ws, req) => {
  const transport = WebSocketTransport(ws)
  const client = new RemoteScene(transport)
  client.on('error', (err: Error) => ws.close())
  clients.add(client)
  ws.on('close', () => clients.delete(client))
})

server.listen(8087, () => console.log(`Listening on 8087`))

// Sea
const { Sea } = require('shoaling')
const sea = new Sea(38, 1200, 300, 1200, 200)
sea.start(64)
sea.on('update', (fish: any) => fish.velocity.mul(0.97))
setInterval(() => {
  render(sea)
  clients.forEach(client => client.forceUpdate())
}, 100)
