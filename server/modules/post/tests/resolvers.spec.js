import faker from 'faker';
import resolvers from '../resolvers';
import connectors from '../connectors';

describe('Post Resolvers', () => {
  test('should have posts query', () => {
    // Given
    jest.mock('../connectors');
    connectors.getPosts = jest.fn();

    // When
    resolvers.Query.posts();

    // Then
    expect(connectors.getPosts.mock.calls.length).toBe(1);
  });

  test('should have post query', () => {
    // Given
    const id = faker.lorem.word();

    jest.mock('../connectors');
    connectors.getPost = jest.fn();

    // When
    resolvers.Query.post(null, { id });

    // Then
    expect(connectors.getPost.mock.calls.length).toBe(1);
    expect(connectors.getPost.mock.calls[0][0]).toBe(id);
  });

  test('should have post query', () => {
    // Given
    const authorId = faker.lorem.word();
    const title = faker.lorem.word();
    const description = faker.lorem.word();
    const body = faker.lorem.word();

    jest.mock('../connectors');
    connectors.savePost = jest.fn();

    // When
    resolvers.Mutation.savePost(null, {
      authorId, title, description, body
    });

    // Then
    expect(connectors.savePost.mock.calls.length).toBe(1);
    expect(connectors.savePost.mock.calls[0][0]).toEqual({
      authorId, title, description, body
    });
  });
});
