# Blog App API
> My personal playground for building an entire app from the initial UX design to full product deployment using a bunch of random stuff I wanted to learn: API Edition

Does whatever a Blog App does

This project is a WIP

## Developing

### Built With
* [Express](https://www.express.com/) for the server
* [Jest](https://facebook.github.io/jest/) for unit testing
* [Apollo Server](https://www.apollographql.com/server/) for setting up graphql servers
* [Mongoose](http://mongoosejs.com/) for ODM and validating Mongo schema
* [MongoDB](https://www.mongodb.com/) for No-SQL database

### Prerequisites

Download Node 8 or above from [here](https://nodejs.org/en/)

### Setting Up

Run the following commands to set up the project:

```shell
git clone https://github.com/bmpieretti/helix-plus-api.git
cd helix-plus-api
npm i
```

This will clone the repo, take you into the cloned directory, and start installing the npm dependencies

### Running Locally

In order to run the app locally run the following command:

```shell
  npm run start
```

This starts up a nodemon server and server up the graphiql db over [http://localhost:3000/graphiql](http://localhost:3000/graphiql), and also starts up a mongo connection over [mongodb://localhost:27017](mongodb://localhost:27017)

## Tests

This module is unit tested via Jest, and the unit test suite can be run via:

```shell
npm test
```

A test watch option for Jest can be run via:

```shell
npm run test:watch
```

Test coverage can be viewed when running:

```shell
npm run test:coverage
```

## API

### posts

The posts query returns an array of posts, and takes no arguments for now.

### post(id: String)

The post query returns a single post object with the given post id.

### savePost(authorId: String, title: String, description: String, body: String)

The savePost mutation takes and authorId matching a currently unimplemented authorId, the title of the post, the description of the post, and the body of the post which will be markdown formatted string.

## Licensing

This project is fully open source and can be used and modified freely. Check out the [license](https://github.com/bmpieretti/helix-plus-client/blob/master/LICENSE) for more info.

## Related Links
* [helix-plus-client](https://github.com/bmpieretti/helix-plus-client.git)
