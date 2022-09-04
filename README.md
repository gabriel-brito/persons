# Persons Contact List

[Pipedrive](https://www.pipedrive.com) Front End Developer Assignment

## WARNING!!!

You MUST pass your own `base url` and your own `api_token` to the `.env.local` file.

Example of &nbsp; `.env.local` file.
```
REACT_APP_BASE_URL="https://example.pipedrive.com/v1"
REACT_APP_API_TOKEN="qwerty12345"
```

## Live Demo

If you want to see a live version, visit here: [demo](https://persons-seven.vercel.app/).

## Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Whats inside?
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Components](https://styled-components.com/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Requirements

- [x] It must be a &nbsp;[SPA](https://en.wikipedia.org/wiki/Single-page_application)
- [x] It must show a paginated list of Persons fetched from the API
- [X] The user can see more details about a person by clicking on one of them
- [x] The user is able to use a search filter in the Persons list using the API
- [X] The user can create a new Person using a form and store them using the API
- [X] The user can delete a Person from the list using the API
- [X] It should look like the provided mock-ups

## Available Scripts

In the project directory, you can run:

### `npm run dev or yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test or yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build or yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject or yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Improvements

- there some "any's" on the project. The vast majority is from the API response and data that is dependent by it. Is necessary to Type field by field.
- Is needed to create a Jest config file to make unecessary to import "jest-styled-components" test by test.
- The API doesn't have the amount of persons (pages etc), so you can't make a "last page" on the Pagination.
- Speaking about pagination: is missing a "First Page" button.
