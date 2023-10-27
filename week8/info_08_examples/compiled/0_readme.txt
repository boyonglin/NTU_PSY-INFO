[React Native]

0. Please follow these OS-dependent steps closely:

https://reactnative.dev/docs/environment-setup?guide=native

OS-independent parts:

1. Create a new project: (I experienced lots of errors)
"npx react-native@latest init AwesomeProject --verbose"
The entry page is [AwesomeProject/App.tsx], which is written in TypeScript.

2a. Port it to Android
"npm run android --verbose" in the [AwesomeProject] folder

2b. Port it to iOS
"npm run ios --verbose" in the [AwesomeProject] folder

3. It's also quite tedious to deploy RN Apps:
[Android] https://reactnative.dev/docs/signed-apk-android
[iOS] https://reactnative.dev/docs/publishing-to-app-store
