# Crosslend Coding Test

## Project Requirements
```
- Create a Vue application that lists a set of documents
- Filter by Date functionality
- Sort by Date functionality
- Sort by Name functionality
- Fetch data from crosslend API
- Responsive Layout
```

## Project Architecture
I opted to build an architecture that supports more than a simple application.
I believe this structure can easily scaled if it was demanded on the project.
The main points of this architecture are:
- State Management:
  It's using Vuex to manage the state of the application. It's divided in modules to make the store modular and scalable. Currently it has three modules:
  - Documents Module: manage the data and actions related to documents coming from the API
  - User Module: manage the data and actions related to the logged user data, that comes from the API
  - Ui Module: manage the behavior of ui components, like Navbar and Footer.

- Lazy Loading:
  The routes create separeted bundles to make the initial bundle smaller, speeding up the application loading process.

- Services and Helpers:
  The application is taking advantage of services and helper modules, that are sets of functions used all around the application. This approach makes the code more reusable and avoid complex logic and data manipulations inside of components, making the code easier to maintain.

- Bootstrap Framework and SASS:
  The application is using bootstrap sass variables and mixins to customize the framework and avoid writing too much css code to style. By doing a good customization of bootstrap sass variables it can speed up the development process and make the code easier to maintain.

- .ENV:
  It's using environments variables to avoid hardcoding constants that needs to be changed depending on the environment where the application is running.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
