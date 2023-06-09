# Crypto Token List Mobile App

A Mobile App that shows the price of many token list, using PINTU API [See here using expo](exp://exp.host/@samdyra/pintu-mobile?release-channel=default)
Link expo = exp://exp.host/@samdyra/pintu-mobile?release-channel=default

> **Warning**
> Due to CORS issues when using pintu's API (trade price changes API) the author 
> build a custom server that passthrough the response from the API. 
> Therefore, the custom server that author made may be broken, and need to rebuilded to function again.
> Please dont hesitate to contact author if by any chance there is an error on the production.

> **Warning**
> Due to restrictments in iOS Expo app, the link and barcode only works on android. Contact author to get the iOS app if needed

![expo barcode](https://qr.expo.dev/expo-go?owner=samdyra&slug=pintu-mobile&releaseChannel=default&host=exp.host)

## Features

- Mobile App for android and iOS to track crypto token list price
- Sort by name, highest performance, or lowest performance

## How this Website is Made
- Written fully using react-native expo (typescript)
- Used Hooks and Context to manage global state
- Used React Query and Axios to fetch data
- Fully linted using custom linting rules
- CI/CD linked in to Expo

## Techstacks
- React
- Typescript
- Tailwind
- React Query

## Contributing

#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/samdyra/pintumobile/issues) to report any bugs or file feature requests.

#### Developing

PRs are welcome. To begin developing, do this:
Make sure you have installed the [Expo CLI](https://docs.expo.dev/get-started/installation/)

```
expo
$ git@github.com:samdyra/pintumobile.git
$ cd pintumobile/
$ yarn
$ expo install
$ expo start

```
