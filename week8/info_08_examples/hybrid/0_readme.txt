[Cordova]
1. Best tutorial: https://cordova.apache.org/
2. "cordova platform add android" or "cordova platform add iso"

[Capacitor]
* Best tutorial: https://capacitorjs.com/

0. Install Capacitor:
"(sudo) npm install -g @capacitor/cli @capacitor/core"

1. Create a brand-new App:
"npm init @capacitor/app" (Wizard: name, directory, App ID)
"cd my_app"
"npm install"
"npm start"
Check out [my-app/src/js/capacitor-welcome.js]

2a. Let's port it to Android: 
You need to install Android Studio first:
https://developer.android.com/studio

"npm install @capacitor/android"
"npm run build" in the [my_app] folder
"npx cap add android"
"npx cap open android"

2b. Let's port it to iOS:
You need a Mac to install XCode first and then:
"npm install @capacitor/ios"
"npm run build" in the [my_app] folder
"npx cap add ios"
"npx cap open ios"

There are some obstacles:
2b1. You need to change the [Signing & Capabilities] part in XCode to be able to compile your App.

2b2. You need to grant your App permission on your iPhone (under [General]->[VPN & Device Mangement].

2b3 You need to add the following lines into [my-app/ios/App/App/Info.plist] to get the camera API work:

<key>NSPhotoLibraryUsageDescription</key>
<string>Photo Library Access Warning</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app requires access to the photo library.</string>
<key>NSCameraUsageDescription</key>
<string>Camera Access Warning</string>

(Put the six lines right before the last two lines of the file)
