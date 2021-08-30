# Mike-survey

Mike-survey is a `local storage persisted`, `configurable `, `script-loaded` and `self-manageable` survey popup written in React, styled using Sass and boostrapped by create-react-app.
The main goal behind this project is to be SEO friendly, to achieve scalability and being easy to integrate to any website.

## Table of Contents
  * [Integrate to your website](#integrate-to-your-website)
  * [Commands](#commands)
  * [Engineering mike-survey](#engineering-mike-survey)
    + [Design step](#design-step)
    + [Architeturing the solution](#architeturing-the-solution)
    + [Thoughts on solutions and future increments](#thoughts-on-solutions-and-future-increments)

## Integrate to your website

jsDelivr CDN was used to make it available anywhere, so simply paste the following code on your HTML file:

```
  <script src="https://cdn.jsdelivr.net/gh/luischoma/mike-survey@master/build/static/js/runtime-main.06e9664d.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/luischoma/mike-survey@master/build/static/js/main.83796ed1.chunk.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/luischoma/mike-survey@master/build/static/js/2.3a79e98e.chunk.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luischoma/mike-survey@master/build/static/css/main.19b54ac9.chunk.css"></link>
```

Bear in mind the popup rules:
 - If clicked outside the survey, it will dismiss but will popup again on next render from where it stopped
 - If the 'X" sign is clicked, the survey won't show anymore
 - If the survey is completed, it won't show anymore

 To reset the survey state, please, clear your LocalStorage; Or simply delete the `mike-survey` key from it

## Commands
As said earlier, this project was built with create-react-app and thanks to it running a few commands is quite simple. See table below to check your needs:

| command   | action                                            |
|-----------|---------------------------------------------------|
| npm start | starts the app on port 3000 with hot reload       |
| npm build | builds the minified app on /build directory       |
| npm test  | run all test files                                | 

## Engineering mike-survey

### Design step
When it comes to front-end developing, I personally find it easier when a style guideline is already documented; So the first step on 
constructing this app was to build a design-system like on Figma;
I've tried my best to design as modular as I could, so I could base my components on Atomic Design;

You can check the color palette and views' sketchs [here](https://www.figma.com/file/AiRvaK6jMaP66FQq9gQidv/mike-survey?node-id=0%3A1)

### Architeturing the solution
The user can dismiss or close the tab anytime he wants, with that in mind it was clear that the app should be able to persist data somehow;
It became clear right away that `local storage` would serve as the database;

I wanted to achieve ease on configuration as well, which means that any static change to the app should be as easy as editting a JSON file;
So I kept that in mind to make this survey `configurable`;

Since I had figured the `local storage` would be my ally, I could easily make the survey `self-manageable`, which means that the popup itself
will determine when to be visible and when no to be; 

At the end, I knew I'd like this survey to run on any website, so I needed to find a way of injecting to any page, and so I did; 
This survey is `loaded by a script` and inject itself on a self-created div;

Last but not least, I've created my folder structure inside `src/`, that follows as: 

```
├── src
│   ├── components
│   │   ├── atoms
│   │   ├── hooks
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── pages
│   ├── services
│   ├── survey-config
```

| foolder    | content                                                                                         |
|------------|-------------------------------------------------------------------------------------------------|
| components | all components followin atomic design and custom hooks                                          |
| services | local storage related methods                                                                     |
| survey-config  | all survey configs, such as initial state and static content                                | 

### Thoughts on solutions and future increments

Here you'll find a little bit of my thinking behind some decisions and what I think that would be nice features for future versions of the survey;

#### Managing state
On this version, I've chosen to take care of the state on my own, which means that I have not used any library or tool and actually created a
state object which I altered on demand;
The rational behind this decision is based on the size of the application and the deadline I estipulated to build the solution (7 days);

Due to the scope being originally a 4 step popup, the goal was to make it as modular as possible so the state logic would transport
easily as the system scales to a third-party lib such as Redux;

#### The 2s load rule
As the scope desired the the survey to load 2s after the page is loaded, when the script loads it also adds a listener on `DOMLoaded` event;
This is one possible solution and probably the most common one, but on further versions the possibility of listening to FCP and/or TTI events would also fit  the solution well;



 :)

