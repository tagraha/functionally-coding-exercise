## Demo

you can try the demo here
https://funtionally-exercise.herokuapp.com/

## Installation

clone the repository
```bash
git clone git@github.com:tagraha/functionally-coding-exercise.git
```

install dependencies
```bash
npm install
```

run build & start
```bash
npm run build && npm start
```

open browser & navigate to `localhost:3000`


## The App
This is the most simple React with Server Side Rendering. the main app component is located at `src/components/apps.js`. You can find webpack config on `webpack.config.js`.
once you've run `npm run build`, it will creating fresh `build` folder and `views` folder. You'll need these folder to make the app working. however, this repository is not yet integrated with react-router for navigating and react-helmet for maintaining metadata 

## Styles & Media
You can find the styling files on `assets/sass/style.scss`. you need to build/compile css files manualy. This apps needs `style.css` inside `/assets` folder. If you have sass installed on your computer globally, you can simply run `sass --watch assets/sass/style.scss:assets/style.css` and modify the style to fit your needs. it will updated `style.css` for you. 

you can use `/media` folder to store your images;