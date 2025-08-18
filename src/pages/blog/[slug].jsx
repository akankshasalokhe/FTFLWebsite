import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="loading">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="container">
        <Head>
          <title>Post Not Found | My Blog</title>
        </Head>
        <main className="main-content">
          <h1>Post Not Found</h1>
          <p>The post you're looking for doesn't exist.</p>
          <Link href="/blog" legacyBehavior>
            <a className="back-link">← Back to all posts</a>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="main-content">
        <article className="blog-article">
          <header className="article-header">
            <span className="article-category">{post.category || 'Technology'}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <time dateTime={post.date} className="article-date">
                {formatDate(post.date)}
              </time>
              <span className="article-read-time">5 min read</span>
            </div>
            {post.imageUrl && (
              <div className="article-image">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={800}
                  height={400}
                  priority
                />
              </div>
            )}
          </header>
          
          <div className="article-content">
            {post.content}
            
            <h2>Introduction</h2>
            <p>This is where your blog post content would go. You can use Markdown or a rich text editor to format your content.</p>
            
            <h3>Subheading</h3>
            <p>More detailed content here...</p>
            
            <pre><code>{`// Example code block
function example() {
  return "Hello World";
}`}</code></pre>
          </div>
          
          <footer className="article-footer">
            <Link href="/blog" legacyBehavior>
              <a className="back-link">← Back to all posts</a>
            </Link>
          </footer>
        </article>
      </main>
      
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .main-content {
          padding: 40px 0;
        }
        
        .blog-article {
          margin-bottom: 60px;
        }
        
        .article-header {
          margin-bottom: 40px;
        }
        
        .article-category {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #6e8efb;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        
        .article-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }
        
        .article-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          color: #666;
          font-size: 0.9rem;
        }
        
        .article-image {
          margin: 30px 0;
          position: relative;
          height: 400px;
        }
        
        .article-image img {
          border-radius: 8px;
          object-fit: cover;
        }
        
        .article-content {
          line-height: 1.7;
          font-size: 1.1rem;
        }
        
        .article-content h2 {
          font-size: 1.8rem;
          margin: 40px 0 20px 0;
        }
        
        .article-content h3 {
          font-size: 1.4rem;
          margin: 30px 0 15px 0;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
        }
        
        .article-content pre {
          background: #f6f8fa;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
          margin: 20px 0;
        }
        
        .article-content code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.9rem;
        }
        
        .article-footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid #eee;
        }
        
        .back-link {
          color: #6e8efb;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
        
        .loading {
          text-align: center;
          padding: 100px 0;
          font-size: 1.2rem;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }
          
          .article-content {
            font-size: 1rem;
          }
          
          .article-image {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all possible slugs
  const posts = [
    { slug: 'getting-started-with-nextjs' },
    { slug: 'react-hooks-explained' }
  ];
  
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));
  
  return {
    paths,
    fallback: true // Enable fallback for new slugs
  };
}

export async function getStaticProps({ params }) {
  try {
    // In a real app, you would fetch this from an API or CMS
    const allPosts = [
      {
        id: 1,
        title: 'Getting Started with Next.js',
        slug: 'getting-started-with-nextjs',
        excerpt: 'Learn the basics of Next.js and how to create your first application with this powerful React framework.',
        date: '2023-05-15',
        content: '<p>This is the full content of the blog post about Next.js.</p><p>More paragraphs here...</p>',
        category: 'Web Development',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 2,
        title: 'React Hooks Explained',
        slug: 'react-hooks-explained',
        excerpt: 'Understanding React hooks and how to use them effectively in your applications.',
        date: '2023-06-22',
        content: '<p>This is the full content of the blog post about React Hooks.</p><p>More paragraphs here...</p>',
        category: 'JavaScript',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
      }
    ];
    
    const post = allPosts.find(p => p.slug === params.slug);
    
    if (!post) {
      return {
        notFound: true
      };
    }
    
    return {
      props: {
        post: {
          ...post,
          formattedDate: formatDate(post.date)
        }
      },
      revalidate: 60 // Enable Incremental Static Regeneration
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true
    };
  }
}

export default BlogPost;