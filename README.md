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

<ul>

<li> ┣ src/** </li>
<li> ┃ ┣ assets - all assets files such as images, icons, etc.** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>
<li> ┣ src/** </li>

┃ ┣ common - all components that are used at least twice**
┃ ┣ components - all components across the application**
┃ ┣ helpers - functions that are used at least twice**
┃ ┣ router - all files related to routing**
┃ ┣ services - services that are needed on front-end side (ex: APIs)**
┃ ┣ store - vuex store directory for state, mutations, getters and actions**
┃ ┣ views - components that have a matching route (ex. /home route will match Home.vue)**
┃ ┣ App.vue - main vue component**
┃ ┗ main.js - main javascript file that uses src/App.vue**
┣ index.html - entry point of the project, where src/main.js is added**
┗ vite.config.js - all configurations needed for the project\*\*
