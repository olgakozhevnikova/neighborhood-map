# Neighborhood Map App

### Overview

This app shows cafes and bars in Indiranagar Bangalore, India. There is a list of cafes on the left side, where a user can search a cafe by typing its name in the input field. The google map displays markers of all the cafes. If the user clicks on a marker, he/she can see an Info Window with name and address details of a cafe.

I used Google Maps API to render the map and Foursquare API to get cafes' names and address details.

### Get started

To start the project follow the below steps:

#### Development mode

1. clone the repo `git clone https://github.com/olgakozhevnikova/neighborhood-map`
2. navigate to the folder `cd neighborhood-map`
3. install node modules `npm install`
4. run `npm start` to start the app
5. your browser will automatically open the app

#### Production mode

1. create a production build `npm run build`
2. navigate to the build directory
3. start the server with `npm run deploy`
4. this mode includes a Service Worker