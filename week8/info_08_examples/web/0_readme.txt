Tutorial: https://www.youtube.com/watch?v=sFsRylCQblw

1. Use [lighthouse] to audit [1_test.html]: 
https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=zh-TW

2. Create a manifest.json in the [web] folder: 
https://www.youtube.com/watch?v=sFsRylCQblw&t=300s

2a. Install icon generator for the [icons] field in the manifest.json: "(sudo) npm i -g pwa-asset-generator"

2b. "(sudo) pwa-asset-generator logo.png icons > tmp.txt"

3. Use the tools of [workbox] to quickly develop PWA:
3a. "(sudo) npm i -g workbox-cli"
3b. Use "workbox wizard" to generate three service worker files 
