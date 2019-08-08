# Rocket.Chat.Game-SDK-Demo

This is the demo that shows how the AppEmbeddedSDK works. Below are the steps to help you start.

1. Clone the Apps.engine repo and checkout the `alpha` branch
```bash
git clone git@github.com:RocketChat/Rocket.Chat.Apps-engine.git
cd Rocket.Chat.Apps-engine
git checkout -b alpha origin/alpha
```

2. Install the depencies and compile the project
```bash
npm install
npm run compile
``` 

2. Import AppEmbeddedSDK
```js
import { AppEmbeddedSDK } from '[the path to apps.engine]/apps.engine/client/AppEmbeddedSDK';
```

3. Create instance and call the API
```js
async getUserInfo() {
  const sdk = new AppEmbeddedSDK();
  const user = await sdk.getUserInfo();
  console.log(JSON.stringify(user, null, 4));
}
```

Please see [here](https://github.com/lolimay/Rocket.Chat.Game-SDK-Demo/blob/126463f20f5e5ecf7841c162a298a10ce2700a16/src/containers/App.js#L45) for the detail.
