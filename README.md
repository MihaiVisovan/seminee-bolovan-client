# requirements

- node
- npm
- nodemon (optional)

# setup

- Clone repository
- run 'npm install'

# run project locally

npm run dev

# build project

npm run build

# preview of prod

npm run preview

# project structure

src/common - all components that are used at least twice\
src/components - all components across the applications\
src/helpers - functions that are used at least twice\
src/router - all files related to routing\
src/services - services that are needed on front-end side (ex: APIs)\
src/store - vuex store directory for state, mutations, getters and actions\
src/views - components that have a matching route (ex. /home route will match Home.vue)\
src/App.vue - main vue component\
src/main.js - main javascript file that uses src/App.vue\
index.html - entry point of the project, where src/main.js is added\
vite.config.js - all configurations needed for the project\
