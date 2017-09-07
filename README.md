# Pokemon Vue-er

> A Vue.js based Pokemon app that allows you to vue (sic) the details of a given Pokemon.

## Introduction

This is a project that uses Vue.js to call the pokeapi.co API and display a small amount of information about a given Pokemon. I wrote this while reading some tutorials about Vue.js, so it's far from perfect.

There are a couple of useful packages being used here:

- [axios](https://github.com/mzabriskie/axios) is used to make API calls
- [vue-gh-pages](https://github.com/KieferSivitz/vue-gh-pages) is used to deploy to GitHub pages
- [bootstrap-vue](https://bootstrap-vue.js.org/) is used to add Bootstrap 4.0beta (not that I'm using this much)

A version of this app is deployed to Surge here...

<https://pokemonvue-er.surge.sh>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build and deploy to gh-pages
npm run deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
