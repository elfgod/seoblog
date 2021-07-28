# SEO BLOG NextJS + Node + MongoDB  

## inside backend folder installations
npm i express mongoose body-parser cookie-parser  
npm i morgan dotenv nodemon cors  
npm i express-validator jsonwebtoken express-jwt  
npm i formidable lodash slugify string-strip-html  
npm i shortid // username autogenerator  

## inside frontend folder installations
- npm install next react react-dom  
- npm install bootstrap --save  
- npm install reactstrap --save 

## MongoDB commands
sudo systemctl start mongod  
sudo systemctl stop mongod  
sudo systemctl restart mongod  

## Software Installations
- install MongoDB  
- install Robo 3T  

## .ENV Config backend root folder  
NODE_ENV=development   
PORT=8000  
CLIENT_URL=http://localhost:3000  
DATABASE_CLOUD=PASTE HERE YOUR CLOUD MONGO URI ( for cloud production db)  
DATABASE_LOCAL='mongodb://localhost:27017/seo-blog' (for local production db)  
JWT_SECRET=secretKeyToGenerateTheTokenAnythingGoesHere  

## .ENV Config frontend root folder
- create a next.config.js file  
module.exports = {  
    publicRuntimeConfig: {  
        APP_NAME: 'SEOBLOG',  
        API_DEVELOPMENT: 'http://localhost:8000/api',  
        PRODUCTION: false  
    }  
};  

##

