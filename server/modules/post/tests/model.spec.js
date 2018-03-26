import Post from '../model';

describe('Post Model', () => {
  test('should have proper fields', () => {
    // Given
    const fields = Object.keys(Post.base.modelSchemas.post.obj);
    const { collection } = Post.base.modelSchemas.post.options;

    // Then
    expect(fields).toContain('authorId');
    expect(fields).toContain('title');
    expect(fields).toContain('description');
    expect(fields).toContain('body');
    expect(collection).toBe('PostList');
  });

  test('should have proper validation rules', () => {
    // Given
    const post = new Post();

    // When
    post.validate((error) => {
      // Then
      expect(error.errors.decription).toBeUndefined();
      expect(error.errors.authorId.message).toBe('Path `authorId` is required.');
      expect(error.errors.title.message).toBe('Path `title` is required.');
      expect(error.errors.body.message).toBe('Path `body` is required.');
    });
  });
});
