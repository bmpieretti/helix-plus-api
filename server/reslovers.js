const resolvers = {
  Query: {
    author() {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
    allAuthors() {
      return [{ id: 1, firstName: 'Hello', lastName: 'World' }];
    }
  },
  Author: {
    posts() {
      return [{
        id: 1, title: 'A Post', text: 'Some text', views: 3
      }, {
        id: 2, title: 'Another Post', text: 'Some more text', views: 2
      }];
    }
  },
  Post: {
    author() {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    }
  }
};

export default resolvers;
