<img src="./src/assets/svg/logo.svg" alt="BCredi" align="right">

# BCredi Frontend Challenge

> <cite>"Superbly inspirational phrase here"</cite> - Really Smart, Someone 🌟

<p>
  This project was developed as part of my recruitment proccess at <strong>BCredi</strong>. The intent of this project is to provide a snmall sample of my development skills as a software developer to the amazing peeps that are evaluating me. 😉
</p>
<p>
  As the developer responsible for this project I must say that I tried to show the best of my abilities here, but due to time restraints, I had to use a few libraies to speed up the development proccess. I'd like to add that if possible I'd have coded the whole project only using JavaScript, HTML and CSS, not only because it's something the evaluators would like to see, but seeing that I really enjoy coding stuff by myself.
</p>
<p>
  About the tecnologies used in this project I decided to go with VueJS, the main reason for that decision is that it's the framework that I'm most familiar with. The bad side of this approach is that I couldn't show as many vanilla Javascript code as possible.
</p>
<p>
  I also would like to add that, as asked in the test, I didn't over commit on componentizing the application, I tried to keep it simplier for the sake of code purity, but I followed the basic recommendations for developing a SPA.
</p>

## Installing / Getting started

```shell
# Clone this repository
git clone https://github.com/victorhsantiago/bcredi-frontend-challenge.git victorhsantiago

# Access its directory
cd victorhsantiago/bcredi-frontend-challenge

# Install its dependencies
yarn

# Get a cup of water #hydrateYourself

# Start the development mode
yarn serve
```

The application will be running at http://localhost:8080

## Developing

### Built With
<ul>
  <li>VueJS <code>2.6.11</code></li>
</ul>

### Prerequisites
<ul>
  <li>NodeJS <code>8.9+</code> <em>(v10+ recommended)</em></li>
</ul>

## Tests

Run the following command in your terminal to test the application:

```shell
yarn test:unit
```
## Building

Run the following command to build to production:
```shell
yarn build
```

## Deploying

This app is hosted by Github Pages, to host it on your own repo follow the instructions bellow:

<ol>
  <li>
    Set correct <code>publicPath</code> in <code>vue.config.js</code>.
    It should look like this:

    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'

  </li>
  <li>
    Edit the <code>deploy.sh</code> with the follow content replacing what is inside <code><</code> and <code>></code> characters:

    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd dist
    git init
    git add -A
    git commit -m 'deploy'

    git branch -M main
    git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    cd -
  </li>
  <li>
    Run the <code>deploy.sh</code> to publish the app.
  </li>
</ol>
