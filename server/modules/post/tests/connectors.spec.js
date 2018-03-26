import faker from 'faker';
import Post from '../model';
import connectors from '../connectors';

describe('Post Connectors', () => {
  test('should have getPosts', async () => {
    // Given
    jest.mock('../model');

    const postData = [];
    const elementCount = faker.random.number({ min: 5, max: 10 });

    for (let i = 0; i < elementCount; i += 1) {
      postData.push({
        _id: faker.lorem.word(),
        authorId: faker.lorem.word(),
        title: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        body: faker.lorem.sentence()
      });
    }

    Post.find = jest.fn().mockResolvedValue(postData);

    // When
    const posts = await connectors.getPosts();

    // Then
    expect(posts).toEqual(postData);
  });

  test('should have getPost', async () => {
    // Given
    jest.mock('../model');

    const id = faker.lorem.word();
    const postData = {
      authorId: faker.lorem.word(),
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      body: faker.lorem.sentence()
    };

    Post.findById = jest.fn(passedId => ({
      _id: passedId,
      ...postData
    }));

    // When
    const post = await connectors.getPost(id);

    // Then
    expect(post).toEqual({ _id: id, ...postData });
  });

  test('should have savePost', async () => {
    // Given
    jest.mock('../model');

    const id = faker.lorem.word();
    const postData = {
      authorId: faker.lorem.word(),
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      body: faker.lorem.sentence()
    };

    Post.prototype.save = jest.fn(() => ({
      _id: id,
      ...postData
    }));

    // When
    const post = await connectors.savePost(postData);

    // Then
    expect(post).toEqual({ _id: id, ...postData });
  });
});
