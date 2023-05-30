# SWE-432 HW-3 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name:*jaime pena* 
* **Student G-Number:*01300925* 
* **Heroku Deployment URL:*https://jaime-pena-swe432-hw3.herokuapp.com/*

### Documentation of your Web App and React Components

*Here please describe your (at least) 3 different React components as well as the overall purpose of your web application. We provide an example below of what we expect this documentation to look like.*

**General App Description:** This web application provides information about cities loaded from a centralized database at www.citiesinfo.org. This app can help people find reference information about various city attributes such as population, capitals, and other demographic information.

* **Endpoint 1:** Retrieves a specific exercise object from firebase based on id number
  * API Endpoint: GET '/exercise/:id'
  * Example: GET '/exercise/0001'
  * Expected Output:
  {

    "bodyPart": "waist",
    "id": "0001",
    "equipment": "body weight",
    "target": "abs",
    "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    "name": "3/4 sit-up"
}

* **Endpoint 2:** Retrieve  5 workouts that do require gym equipment
  * API Endpoint: GET '/inGym/:bodyPart?/:numberOfExercises?'
  * Example: GET '/inGym/'
  * Expected Output:(random output, objects will always be different) {
        "bodyPart": "chest",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1285.gif",
        "id": "1285",
        "target": "pectorals",
        "equipment": "dumbbell",
        "name": "dumbbell one arm bench fly"
    },
    {
        "target": "serratus anterior",
        "equipment": "smith machine",
        "bodyPart": "chest",
        "name": "smith incline shoulder raises",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0759.gif",
        "id": "0759"
    },
    {
        "equipment": "barbell",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0458.gif",
        "id": "0458",
        "name": "floor fly (with barbell)",
        "target": "pectorals",
        "bodyPart": "chest"
    },
    {
        "target": "pectorals",
        "bodyPart": "chest",
        "equipment": "cable",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2144.gif",
        "name": "cable seated chest press",
        "id": "2144"
    },
    {
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1280.gif",
        "id": "1280",
        "bodyPart": "chest",
        "target": "pectorals",
        "name": "dumbbell incline one arm fly on exercise ball",
        "equipment": "dumbbell"
    }
] 

* **Component 1:** inGym
	* API Endpoint(s):
  		* GET '/inGym/'
  * Expected display: A list of workout GIFs witht their respective names. Each workout was selected as an exercise that requires gym equipment

  * **Component 2:** MinimalEquipment
  * API Endpoint(s):
      * GET '/minimalEquipment/'
  * Expected display: A list of workout GIFs witht their respective names.Each workout was selected as an exercise that does not require gym equipment

  * **Component 3:** GetInfo
  * API Endpoint(s):
      * GET /exercise/:id'
  * Expected display: This component gets the id as a property and fetches the information for that particular exercise. After retrieveing, the information is displayed below each GIF as a list of properties.

## Project Overview

This repo contains a barebones Node.js app using [Express 4](http://expressjs.com/) and a barebones React app with a single component. You will use this as the "base" version of your Microserivce + Front-end application for HW Assignment #3. You will simply create a copy of this repo through GitHub classroom and then work in that repo. 

## Homework Assignment 3 Detailed Instructions

You can find the deatiled instructions for HW Assignment #3 on the [course webpage](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/) and (optionally) the [Heroku CLI](https://cli.heroku.com/) installed. You only need the Heroku CLI installed if you plan to deploy the project from the CLI instead of the Heroku web interface. See the [HW Assignment #3 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for more details.

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm run setup
$ npm start
```

You can also indepedently start the express and React servers using the following commands:

```sh
$ npm run start-express
$ npm run start-react
```

After executing these commands, your express backend should now be running on [localhost:6000](http://localhost:6000/) and your React frontend should now be running at [localhost:3000](http://localhost:3000/). You can visit this page in your web browser to view your front-end user interface. You can also access your microservice endpoints (e.g., [localhost:6000/cities](http://localhost:6000/cities). Please see the [HW #3 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for more information on how this works.

## Deploying to Heroku

Check out [our instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f22/hw3) for deploying your application to Heroku. You can use the button below for quick access to your Heroku account.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Testing with Continuous Integration

**Note that you are not required to test your project with Jest for HW3, however, we have enabled this functionality in case you would like to use it. If you would like to remove the tests, you can remove the `.github` directory from the repo.**

Currently, this repo is set up to run the Jest tests in the `app.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Additional Resources

For more information about using Node.js on Heroku, see these Heroku Dev Center articles:

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Express Documentation](https://expressjs.com/en/5x/api.html)
- [Supertest Documentation](https://www.npmjs.com/package/supertest)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
