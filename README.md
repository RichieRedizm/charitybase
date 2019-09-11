# Lightful Full Stack Take Home Exercise

Lightful is preparing a new application that lets grant giving bodies find charities to give money called Grant Giver.

It intends to distribute money to charities that currently do not recieve much in grants.

Write an application in React that:

1. Queries the GraphQL API at https://charitybase.uk/. You can sign up over there and get an API key and then use the [Playground](https://charitybase.uk/api-portal/playground) to explore the API.

2. Displays the details of the charities it finds or says it cannot find them. Charities should be ordered by their income (least income first - the API supports this). Their income and spending in the last year should be displayed. Details should be anything relevant to a grant giving organisation in terms of contact: their address, email and telephone number if available.

3. Gives the details of the grants the charity has recieved. This is in the API.

4. Gives the total amount they have received in grants and shows what amount of their total income this represents. You'll need to calculate this.

You shouldn't spend more than a few hours on this. We are looking for clear, maintainable code which adheres to good design principles.

This Git repository is bootstrapped with `create-react-app` for a basic setup. It has all the libraries needed to begin.

For documentation for Apollo, a GraphQL client we use, see:
- https://www.apollographql.com/docs/react/essentials/get-started/
- https://developer.okta.com/blog/2018/10/11/build-simple-web-app-with-express-react-graphql

However if you wanted to use some other GraphQL library to talk to the API, then you are welcome to.

## Our Definition of Done

This is the real definition of done used by the Platform team. Any code making it to production would be expected to meet it.
- Code has automated tests in Jest.

# Further Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
