This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application detail

#### React,
#### Redux,
#### React Semantic ui,
#### css
#### prop-types
#### jest and enzyme for test
#### saga 

Download the repo from the git or use the Zip.
In the project directory, please run the following commands:

### `npm install` or `yarn install`
#### and then
### `npm start` or `yarn start`

To run all the test in the application
### `npm run test a` or `yarn run test a`
or a single one
### `npm run test app.test.js` or
#### `yarn run test app.test.js`

## Message Board Application - How to use?

Message board application is a SPA which contains two main sections on the main page.

Upper section contains the Message Panel, where the user(probably logged in user) would write the message.
The lower section contans the MessageList, where it displys all the messages and their replies.

User can write a message publicly, which would be visible into the Message List. In the message List section, with each message there is possiblility to Edit, Delete and Reply to the main message. Replied messages are not possible to delete. They will be deleted with the main thread.

On initial startup, a messages is shown from the mockedResponse. whcih, can be edited or deleted.
