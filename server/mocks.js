import casual from 'casual';

export default {
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => ({ firstName: args.firstName, lastName: args.lastName })
  }),
  Author: () => ({ firstName: () => casual.firstName, lastName: () => casual.lastName }),
  Post: () => ({ title: casual.title, text: casual.sentence(3) })
};
