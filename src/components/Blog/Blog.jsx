import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const Blog = ({ posts = [] }) => {
  return (
    <div className="container">
      <Head>
        <title>My Blog | Home</title>
        <meta name="description" content="Welcome to my blog" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="main-content">
        <header className="blog-header">
          <h1 className="blog-title">My Blog</h1>
          <p className="blog-description">Thoughts, stories and ideas</p>
        </header>
        
        <div className="posts-grid">
          {posts.length > 0 ? (
            posts.map(post => (
              <article key={post.id} className="post-card">
                <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                  <a className="post-link" aria-label={`Read ${post.title}`}>
                    <div className="post-image-container">
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={350}
                          height={200}
                          className="post-image"
                          priority={false}
                        />
                      ) : (
                        <div className="post-image-placeholder" />
                      )}
                    </div>
                    <div className="post-content">
                      <span className="post-category">{post.category || 'Technology'}</span>
                      <h2 className="post-title">{post.title}</h2>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-footer">
                        <time dateTime={post.date} className="post-date">
                          {formatDate(post.date)}
                        </time>
                        <span className="read-more">Read more →</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <p>No blog posts available at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          font-family: 'Inter', sans-serif;
          color: #333;
        }
        
        .main-content {
          padding: 40px 0;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .blog-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111;
        }
        
        .blog-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .post-card {
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .post-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }
        
        .post-image-container {
          position: relative;
          height: 200px;
          width: 100%;
        }
        
        .post-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        
        .post-image-placeholder {
          height: 100%;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
        }
        
        .post-content {
          padding: 25px;
        }
        
        .post-category {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #6e8efb;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .post-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          line-height: 1.3;
          color: #111;
        }
        
        .post-excerpt {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }
        
        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .post-date {
          font-size: 0.85rem;
          color: #888;
        }
        
        .read-more {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6e8efb;
          transition: color 0.2s;
        }
        
        .post-card:hover .read-more {
          color: #4a6cf7;
        }
        
        .no-posts {
          text-align: center;
          grid-column: 1 / -1;
          padding: 40px 0;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .blog-title {
            font-size: 2.2rem;
          }
          
          .posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // In a real app, you would fetch this from an API or CMS
    const posts = [
      {
        id: 1,
        title: 'Getting Started with Next.js',
        slug: 'getting-started-with-nextjs',
        excerpt: 'Learn the basics of Next.js and how to create your first application with this powerful React framework.',
        date: '2023-05-15',
        content: 'Full post content here...',
        category: 'Web Development',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 2,
        title: 'React Hooks Explained',
        slug: 'react-hooks-explained',
        excerpt: 'Understanding React hooks and how to use them effectively in your applications.',
        date: '2023-06-22',
        content: 'Full post content here...',
        category: 'JavaScript',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
      }
    ];

    return {
      props: {
        posts: posts.map(post => ({
          ...post,
          formattedDate: formatDate(post.date)
        }))
      },
      revalidate: 60 // Enable Incremental Static Regeneration
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
}

export default Blog;