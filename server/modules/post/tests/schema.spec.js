import schema from '../schema';
import removeWhitespace from '../../../test/SchemaTestUtils';

describe('Post Schema', () => {
  test('should have proper validation rules', () => {
    // Given
    const postSchema = `
      type Post {
        id: String!
        authorId: String!
        title: String
        description: String
        body: String
      }

      type Query {
        posts: [Post],
        post(id: String!): Post
      }

      type Mutation {
        savePost(authorId: String!, title: String, description: String, body: String): Post
      }
    `;

    // Then
    expect(removeWhitespace(schema)).toBe(removeWhitespace(postSchema));
  });
});
