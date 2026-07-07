import Article from './Article';

function ArticleList({ posts }) {
  return (
    <section className="article-list">
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </section>
  );
}

export default ArticleList;