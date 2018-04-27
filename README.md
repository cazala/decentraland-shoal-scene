# Dentraland Shoal Scene

<img width="772" alt="screen shot 2018-04-27 at 8 46 30 pm" src="https://user-images.githubusercontent.com/2781777/39389147-4971736e-4a5c-11e8-95dc-b1b676f0e625.png">

This is an experiment using [Decentraland's SDK](https://developers.decentraland.org/). The idea was to bring the fish from [my personal site](https://caza.la) to the Metaverse.

The state is kept on a server (so every visitor would see the fish on the same positions) and the scene is being render on the server as well and broadcasted to each client. I used a modified flocking algorithm to make the creatures shoal together, and added a big blue one that chases the smaller ones.

Here's a short video of the result: [LINK](https://twitter.com/juancazala/status/990013897515130881)

# Try it out!

First make sure to install Decentraland's SDK if you haven't yet

```
npm install -g decentraland
```

Then clone this repo and jump in

```
git clone https://github.com/cazala/decentraland-shoal-scene
cd decentraland-shoal-scene
```

Now install/build/run the server

```
cd server
npm install
npm run build
npm start
```

Finally on a different terminal go back to the root directory and run `dcl preview`

```
cd ..
dcl preview
```
