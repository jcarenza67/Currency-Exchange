# (Currency Exchange)

#### (Currency exhange rate application.)

#### By (Joseph Wilfong)

## Technologies Used

* _ESlint_
* _Babel_
* _Webpack_
* _Node.js_
* _npm_
* _HTML_
* _CSS_
* _JavaScript_
* _Jest_
* _API's_
* _Bootstrap_



## Description

_A currency exchange application that allows users to convert between different currencies._

## Links

[This is the link to the Github repository](https://github.com/jcarenza67/Currency-Exchange) 


## Setup/Installation Requirements

* _Click the link provided above_
* _Click the green dropdown button that says "Code"_
* _Copy the repository HTTPS, clone it to your Desktop directory by typing ***git clone***, paste the copied URL right after **clone**, and then press enter_
* _Make sure the following files are in your .gitignore file: 
***node_modules/***
***.DS_Store***
***dist/***
***coverage/***
***.env***_
* _Then ***git add/push*** the .gitignore file ***separately*** to your repository_
* _Create a .env file in the root directory of the project_
* _Go to [this website](https://www.exchangerate-api.com/) and sign up for a free API key_
* _In the .env file, add the following code: API_KEY=[YOUR_API_KEY_GOES_HERE]_
* _Before doing anything else, make sure you have ***Node.js*** installed on your computer. If you do not, you can download it [here](https://nodejs.org/en/download/)_
* _Install all packages with ***npm install***._
* _After you have installed all packages, make sure you have dotenv installed (in your ***package.json*** under devDependencies). If you do not, you can install it with ***npm install dotenv-webpack***_
* _Your ***webpack.config.js*** file should look like this:_
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new Dotenv(),
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```
* _Then when you are setting up the ***url*** for your ***API*** call, your code should look something like this:_
  
  ```
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  ```
* _Build the project using webpack with ***npm run build***_
* _Start a development server with ***npm run start***_
* _Lint JS files in the src folder with ***npm run lint***_
* _Run tests with Jest using ***npm run test***_

***_Please contact me at josephwilfong91@gmail.com if you have any questions, ideas, or concerns._***


## Known Bugs

* _none_

## License


_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

_Copyright (c) _2023_ _Joseph Wilfong_
