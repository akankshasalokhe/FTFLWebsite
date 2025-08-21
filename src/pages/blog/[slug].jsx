import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogDetail() {
  const router = useRouter();
  const { category, post } = router.query;
  
  // Sample data - in a real app this would come from an API or CMS
  const blogPost = {
    id: 1,
    title: "The Future of Web Development in 2023",
    category: "Technology",
    date: "October 15, 2023",
    author: "Jane Smith",
    authorImage: "/Team.jpeg",
    image: "/roadmaps.png",
    content: `
      <p>Web development continues to evolve at a rapid pace, with new frameworks and technologies emerging regularly. In this article, we explore the trends that are shaping the future of web development.</p>
      
      <p>One of the most significant shifts we're seeing is towards serverless architectures and edge computing. These approaches allow developers to build more scalable and resilient applications while reducing infrastructure costs.</p>
      
      <blockquote class="highlighted-quote">
        "The best way to predict the future is to create it. In web development, this means embracing new technologies while maintaining focus on user experience."
      </blockquote>
      
      <p>Another important trend is the increasing adoption of Jamstack architecture. By decoupling the frontend from the backend, developers can create faster, more secure websites that are easier to maintain and scale.</p>
      
      <h3>Key Technologies to Watch</h3>
      <p>Several technologies are gaining traction in the web development community:</p>
      <ul>
        <li>Next.js and other React-based frameworks</li>
        <li>WebAssembly for high-performance applications</li>
        <li>GraphQL for efficient data fetching</li>
        <li>AI-powered development tools</li>
      </ul>
      
      <p>As we look to the future, it's clear that web developers will need to continue learning and adapting to stay relevant in this dynamic field.</p>
    `,
    tags: ["Web Development", "Technology", "Programming", "Frontend"],
    readTime: "5 min read"
  };

  const popularPosts = [
    {
      id: 2,
      title: "10 JavaScript Tips Every Developer Should Know",
      category: "Programming",
      date: "September 28, 2023",
      image: "/Team.jpeg"
    },
    {
      id: 3,
      title: "Introduction to Next.js 13",
      category: "Web Development",
      date: "October 5, 2023",
      image: "/react.png"
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use What",
      category: "Web Design",
      date: "October 12, 2023",
      image: "/Team.jpeg"
    }
  ];

  const categories = [
    { name: "Technology", count: 15 },
    { name: "Programming", count: 12 },
    { name: "Web Development", count: 18 },
    { name: "Web Design", count: 9 },
    { name: "AI & Machine Learning", count: 7 }
  ];

  const relatedPosts = [
    {
      id: 5,
      title: "React vs Vue: Which Framework to Choose in 2023",
      category: "Web Development",
      date: "October 10, 2023",
      image: "/react.png"
    },
    {
      id: 6,
      title: "Building Scalable APIs with GraphQL",
      category: "Programming",
      date: "October 8, 2023",
      image: "/reactangular.png"
    }
  ];

  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Head>
        <title>{blogPost.title} | Muze Blog</title>
        <meta name="description" content={blogPost.description} />
      </Head>

      {/* Navigation */}
      <nav className="navigation">
        <Link href="/" className="nav-link">Home</Link>
        <span className="nav-separator"> / </span>
        <Link href={`/blog/${blogPost.category.toLowerCase()}`} className="nav-link">{blogPost.category}</Link>
        <span className="nav-separator"> / </span>
        <span className="nav-current">{blogPost.title}</span>
      </nav>

      <div className="layout">
        <main className="main-content">
          {/* Image Section */}
          <div className="image-section">
            <Image 
              src={blogPost.image} 
              alt={blogPost.title}
              width={800}
              height={400}
              layout="responsive"
              className="post-image"
              priority
            />
            <div className="image-overlay"></div>
          </div>

          {/* Content & Share */}
          <article className="content-section">
            <div className="category-badge">{blogPost.category}</div>
            <h1 className="title">{blogPost.title}</h1>
            <div className="meta">
              <div className="author-info">
                <div className="author-image">
                  <Image 
                    src={blogPost.authorImage} 
                    alt={blogPost.author}
                    width={40}
                    height={40}
                    className="author-avatar"
                  />
                </div>
                <div className="author-details">
                  <span className="author-name">{blogPost.author}</span>
                  <div className="meta-details">
                    <span className="date">{blogPost.date}</span>
                    <span className="dot-separator">•</span>
                    <span className="read-time">{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="content"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <div className="share-buttons">
              <span className="share-label">Share this post:</span>
              <button 
                className="share-btn twitter" 
                onClick={() => handleShare('twitter')}
                aria-label="Share on Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button 
                className="share-btn facebook" 
                onClick={() => handleShare('facebook')}
                aria-label="Share on Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                className="share-btn linkedin" 
                onClick={() => handleShare('linkedin')}
                aria-label="Share on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                className={`share-btn copy ${copied ? 'copied' : ''}`} 
                onClick={() => handleShare('copy')}
                aria-label="Copy link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                <span className="tooltip">{copied ? 'Copied!' : 'Copy link'}</span>
              </button>
            </div>
          </article>

          {/* Tags */}
          <div className="tags-section">
            <h3>Tags</h3>
            <div className="tags">
              {blogPost.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            <h3>You might also like</h3>
            <div className="related-grid">
              {relatedPosts.map(post => (
                <div key={post.id} className="related-card">
                  <div className="related-image">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                  <div className="related-content">
                    <span className="category">{post.category}</span>
                    <h4>{post.title}</h4>
                    <span className="date">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="sidebar">
          {/* Author Bio */}
          <div className="author-bio">
            <div className="bio-header">
              <Image 
                src={blogPost.authorImage} 
                alt={blogPost.author}
                width={60}
                height={60}
                className="bio-avatar"
              />
              <div>
                <h4>About the Author</h4>
                <span className="author-name">{blogPost.author}</span>
              </div>
            </div>
            <p>Jane is a senior web developer with over 10 years of experience in building modern web applications. She specializes in React and Node.js development.</p>
          </div>

          {/* Popular Posts */}
          <div className="popular-posts">
            <h3>Popular Posts</h3>
            <div className="popular-list">
              {popularPosts.map(post => (
                <div key={post.id} className="popular-item">
                  <div className="popular-image">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={80}
                      height={60}
                    />
                  </div>
                  <div className="popular-content">
                    <span className="category">{post.category}</span>
                    <h4>{post.title}</h4>
                    <span className="date">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              {categories.map(category => (
                <li key={category.name}>
                  <Link href={`/blog/${category.name.toLowerCase()}`}>
                    {category.name} <span>({category.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <div className="newsletter-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Subscribe to our Newsletter</h3>
            <p>Get the latest updates and news directly to your inbox.</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .navigation {
          margin-bottom: 30px;
          font-size: 14px;
          color: #666;
          display: flex;
          align-items: center;
        }
        
        .nav-link {
          color: #6B46C1;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #553C9A;
          text-decoration: underline;
        }
        
        .nav-separator {
          margin: 0 8px;
          color: #CBD5E0;
        }
        
        .nav-current {
          color: #718096;
          font-weight: 500;
        }
        
        .layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        
        .image-section {
          margin-bottom: 30px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          pointer-events: none;
        }
        
        .post-image {
          transition: transform 0.5s ease;
        }
        
        .post-image:hover {
          transform: scale(1.03);
        }
        
        .content-section {
          margin-bottom: 40px;
          position: relative;
        }
        
        .category-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #2D3748;
          line-height: 1.2;
          font-weight: 800;
        }
        
        .meta {
          margin-bottom: 30px;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .author-avatar {
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-name {
          font-weight: 600;
          color: #2D3748;
        }
        
        .meta-details {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #718096;
        }
        
        .dot-separator {
          font-size: 0.6rem;
        }
        
        .content {
          line-height: 1.8;
          color: #4A5568;
          font-size: 1.1rem;
        }
        
        .content :global(p) {
          margin-bottom: 24px;
        }
        
        .content :global(ul) {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        
        .content :global(li) {
          margin-bottom: 12px;
          position: relative;
        }
        
        .content :global(li::before) {
          content: "•";
          color: #6B46C1;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        .content :global(.highlighted-quote) {
          border-left: 4px solid #6B46C1;
          padding: 24px;
          margin: 40px 0;
          background-color: #F8FAFC;
          font-style: italic;
          font-size: 1.2rem;
          color: #2D3748;
          border-radius: 0 8px 8px 0;
          position: relative;
        }
        
        .content :global(.highlighted-quote::before) {
          content: """;
          font-size: 4rem;
          color: #6B46C1;
          opacity: 0.2;
          position: absolute;
          top: -20px;
          left: 10px;
          font-family: Georgia, serif;
        }
        
        .content :global(h3) {
          font-size: 1.5rem;
          margin: 32px 0 16px;
          color: #2D3748;
          font-weight: 700;
        }
        
        .share-buttons {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .share-label {
          font-weight: 600;
          color: #4A5568;
        }
        
        .share-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          color: white;
        }
        
        .share-btn.twitter {
          background: #1DA1F2;
        }
        
        .share-btn.facebook {
          background: #4267B2;
        }
        
        .share-btn.linkedin {
          background: #2867B2;
        }
        
        .share-btn.copy {
          background: #718096;
        }
        
        .share-btn.copy.copied {
          background: #48BB78;
        }
        
        .share-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .tooltip {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #2D3748;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .share-btn.copy:hover .tooltip {
          opacity: 1;
          visibility: visible;
          bottom: -35px;
        }
        
        .tags-section {
          margin-bottom: 40px;
        }
        
        .tags-section h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: #2D3748;
        }
        
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tag {
          padding: 8px 16px;
          background: #EDF2F7;
          border-radius: 20px;
          font-size: 0.9rem;
          color: #4A5568;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .tag:hover {
          background: #6B46C1;
          color: white;
          transform: translateY(-2px);
        }
        
        .related-posts {
          margin-bottom: 40px;
        }
        
        .related-posts h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: #2D3748;
          position: relative;
          padding-bottom: 8px;
        }
        
        .related-posts h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
          border-radius: 2px;
        }
        
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .related-card {
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
        }
        
        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-color: #CBD5E0;
        }
        
        .related-image {
          overflow: hidden;
        }
        
        .related-image :global(img) {
          transition: transform 0.5s ease;
        }
        
        .related-card:hover .related-image :global(img) {
          transform: scale(1.05);
        }
        
        .related-content {
          padding: 20px;
        }
        
        .related-content .category {
          font-size: 0.75rem;
          color: #6B46C1;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .related-content h4 {
          margin: 8px 0;
          font-size: 1.1rem;
          color: #2D3748;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        
        .related-card:hover .related-content h4 {
          color: #6B46C1;
        }
        
        .related-content .date {
          font-size: 0.8rem;
          color: #718096;
        }
        
        .sidebar > div {
          margin-bottom: 40px;
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .sidebar > div:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .sidebar h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: #2D3748;
          position: relative;
          padding-bottom: 8px;
        }
        
        .sidebar h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
          border-radius: 2px;
        }
        
        .author-bio {
          display: flex;
          flex-direction: column;
        }
        
        .bio-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .bio-avatar {
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-bio h4 {
          font-size: 1rem;
          margin: 0 0 4px;
          color: #2D3748;
        }
        
        .author-bio .author-name {
          font-size: 0.9rem;
          color: #718096;
        }
        
        .author-bio p {
          color: #4A5568;
          line-height: 1.6;
          margin: 0;
        }
        
        .popular-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .popular-item {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #E2E8F0;
          transition: background-color 0.3s ease;
          border-radius: 4px;
        }
        
        .popular-item:last-child {
          border-bottom: none;
        }
        
        .popular-item:hover {
          background-color: #F7FAFC;
        }
        
        .popular-image {
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .popular-image :global(img) {
          object-fit: cover;
        }
        
        .popular-content {
          flex: 1;
        }
        
        .popular-content .category {
          font-size: 0.7rem;
          color: #6B46C1;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .popular-content h4 {
          margin: 4px 0;
          font-size: 0.9rem;
          color: #2D3748;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        
        .popular-item:hover .popular-content h4 {
          color: #6B46C1;
        }
        
        .popular-content .date {
          font-size: 0.75rem;
          color: #718096;
        }
        
        .categories ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories li {
          margin-bottom: 8px;
        }
        
        .categories a {
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          color: #4A5568;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .categories a:hover {
          background-color: #F8FAFC;
          color: #6B46C1;
          transform: translateX(4px);
        }
        
        .categories span {
          color: #A0AEC0;
          font-size: 0.9rem;
        }
        
        .newsletter {
          position: relative;
          overflow: hidden;
          background-color: blue !important;
          // background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%) !important;
          color: white;
        }
        
        .newsletter-icon {
          position: absolute;
          top: -10px;
          right: -10px;
          opacity: 0.1;
          width: 80px;
          height: 80px;
        }
        
        .newsletter h3 {
          color: white;
          position: relative;
          z-index: 1;
        }
        
        .newsletter h3::after {
          background: white;
        }
        
        .newsletter p {
          color: #EDF2F7;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        
        .newsletter input {
          padding: 12px;
          border: none;
          border-radius: 6px;
          background: white;
          color: #2D3748;
          font-size: 0.9rem;
        }
        
        .newsletter input::placeholder {
          color: #A0AEC0;
        }
        
        .newsletter input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }
        
        .newsletter button {
          padding: 12px;
          background: #FFF;
          color: #2D3748;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .newsletter button:hover {
          background: #ED8936;
          transform: translateY(-2px);
        }
        
        @media (max-width: 968px) {
          .layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 640px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
          
          .share-buttons {
            flex-wrap: wrap;
          }
          
          .content {
            font-size: 1rem;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .main-content > * {
          animation: fadeIn 0.5s ease forwards;
        }
        
        .sidebar > * {
          animation: fadeIn 0.5s ease forwards;
        }
        
        .related-card:nth-child(1) { animation-delay: 0.1s; }
        .related-card:nth-child(2) { animation-delay: 0.2s; }
        .popular-item:nth-child(1) { animation-delay: 0.1s; }
        .popular-item:nth-child(2) { animation-delay: 0.2s; }
        .popular-item:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}