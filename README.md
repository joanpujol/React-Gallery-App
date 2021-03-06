# React Gallery App

![alt text](https://gdurl.com/hlNJ)

## Description ##

For this project, I'm using React to create an image gallery app.

Some of the technologies used to create this project are:

- JavaScript and JSX to build out the gallery components in a modular fashion
- React Router to make the app a Single Page Application
- Axios to fetch the Flickr API

## Access Locally

To download the project and run it on your computer you will need to execute the following commands:

```bash
    git clone https://github.com/joanpujol/React-Gallery-App.git
    cd React-Gallery-App/
    npm install
 ```

 Then, once the project dependencies are installed, you will need to include your own config.js file to the project. This file must export the Flickr API key, which will be used to fetch the images.

 ```javascript
const apiKey = 'YOUR_API_KEY';
export default apiKey
 ```

 After the previous step you can run the app with:

```bash
    npm start
```