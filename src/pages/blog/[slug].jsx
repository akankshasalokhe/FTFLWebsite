// pages/blog/[slug].js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Sample blog post data (unchanged from original)
const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to set up and build your first Next.js application with this comprehensive guide.",
    date: "May 15, 2023",
    category: "Development",
    readTime: "5 min read",
    image: "/reactangular.png",
    featured: true,
    slug: "getting-started-with-nextjs",
    content: `
      <p>Next.js has revolutionized the way we build React applications by providing a powerful framework that supports server-side rendering, static site generation, and many other performance optimizations out of the box.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>There are several reasons why Next.js has become the go-to framework for modern web development:</p>
      <ul>
        <li>Server-side rendering for improved SEO and performance</li>
        <li>File-based routing system</li>
        <li>API routes for building backend functionality</li>
        <li>Automatic code splitting</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>Getting started with Next.js is incredibly simple. To create a new project, run the following command in your terminal:</p>
      
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
      
      <p>This will create a new Next.js application and start the development server. You can now open your browser and navigate to http://localhost:3000 to see your application running.</p>
      
      <h2>Understanding the Project Structure</h2>
      <p>A typical Next.js project has the following structure:</p>
      
      <pre><code>my-app/
  ├── pages/
  │   ├── api/
  │   ├── _app.js
  │   └── index.js
  ├── public/
  ├── styles/
  └── package.json</code></pre>
      
      <p>The pages directory is one of the most important parts of a Next.js application. Each file in this directory becomes a route in your application based on its name.</p>
      
      <h2>Building Your First Page</h2>
      <p>Let's create a simple about page. Create a new file called about.js in the pages directory with the following content:</p>
      
      <pre><code>export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is our about page!</p>
    </div>
  )
}</code></pre>
      
      <p>Now if you navigate to http://localhost:3000/about, you'll see your new page.</p>
      
      <h2>Deploying Your Application</h2>
      <p>Next.js applications can be easily deployed to Vercel (the company behind Next.js) or any other hosting platform that supports Node.js.</p>
      
      <p>To deploy to Vercel, you can connect your GitHub repository to Vercel, and it will automatically deploy your application and set up continuous deployment for future updates.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a powerful and flexible framework for building modern web applications. Its combination of server-side rendering, static site generation, and other optimizations make it an excellent choice for projects of any size.</p>
      
      <p>As you continue your Next.js journey, explore more advanced features like dynamic routing, API routes, and middleware to build even more powerful applications.</p>
    `
  },
  {
    id: 2,
    title: "The Future of React in 2023",
    excerpt: "Exploring the latest features and updates in React and how they will change frontend development.",
    date: "April 28, 2023",
    category: "Development",
    readTime: "8 min read",
    image: "/api/placeholder/400/250?text=React",
    featured: true,
    slug: "future-of-react-2023",
    content: `
      <p>React continues to evolve and shape the frontend development landscape. As we move through 2023, several exciting developments are worth watching.</p>
      
      <h2>React Server Components</h2>
      <p>One of the most significant advancements in the React ecosystem is the introduction of Server Components. This new paradigm allows developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.</p>
      
      <p>Server Components enable:</p>
      <ul>
        <li>Zero bundle size components</li>
        <li>Direct access to backend resources</li>
        <li>Automatic code splitting</li>
        <li>Improved startup performance</li>
      </ul>
      
      <h2>Concurrent Features</h2>
      <p>React's concurrent features, introduced in React 18, continue to mature and provide new ways to build responsive applications even when performing expensive calculations.</p>
      
      <p>Key concurrent features include:</p>
      <ul>
        <li>Automatic batching of state updates</li>
        <li>Transitions to mark non-urgent state updates</li>
        <li>Suspense for data fetching</li>
        <li>New hooks like useTransition and useDeferredValue</li>
      </ul>
      
      <h2>Improved Developer Experience</h2>
      <p>The React team continues to focus on improving the developer experience with better error messages, debugging tools, and development features.</p>
      
      <p>Recent improvements include:</p>
      <ul>
        <li>Better error messages with React DevTools</li>
        <li>Strict Mode enhancements</li>
        <li>Improved Fast Refresh capabilities</li>
      </ul>
      
      <h2>Ecosystem Growth</h2>
      <p>The React ecosystem continues to grow with new frameworks, libraries, and tools building on React's foundation.</p>
      
      <p>Notable trends include:</p>
      <ul>
        <li>Meta-frameworks like Next.js, Remix, and Gatsby</li>
        <li>State management solutions like Zustand and Jotai</li>
        <li>Component libraries with improved accessibility</li>
        <li>Testing tools like React Testing Library and Playwright</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React's future looks bright with continued investment from both the core team and the community. The framework's evolution toward server-client integration and improved performance characteristics positions it well for the next generation of web applications.</p>
      
      <p>As developers, staying current with these changes and understanding how to leverage new patterns will be key to building successful applications in 2023 and beyond.</p>
    `
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Find the current post based on the slug
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  // If the post is not found, show a loading state or 404 page
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Head>
          <title>Post Not Found | Blog</title>
        </Head>
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md mx-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = BLOG_POSTS.filter(
    p => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Extract headings for table of contents
  const extractHeadings = (content) => {
    const headingRegex = /<h[2-3]>(.*?)<\/h[2-3]>/g;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push(match[1]);
    }
    return headings;
  };

  const headings = extractHeadings(post.content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Head>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/blog">
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group">
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </button>
            </Link>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Insights</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents (Desktop) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Contents
              </h3>
              <ul className="space-y-2">
                {headings.map((heading, index) => (
                  <li key={index}>
                    <a 
                      href={`#heading-${index}`} 
                      className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-500 pl-3"
                    >
                      {heading}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Share buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </h3>
                <div className="flex space-x-3">
                  <button 
                    onClick={handleShare}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Share article"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
                <AnimatePresence>
                  {copied && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-2 text-sm text-green-600 font-medium"
                    >
                      Link copied to clipboard!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Article Header */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100"
            >
              <div className="h-72 md:h-96 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-700 text-sm font-medium rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
                
                <p className="text-lg text-gray-600 mb-8 font-medium border-l-4 border-blue-500 pl-4 py-1 bg-blue-50 rounded-r">
                  {post.excerpt}
                </p>
                
                {/* Mobile Table of Contents Toggle */}
                <div className="lg:hidden mb-6">
                  <button 
                    onClick={() => setShowToc(!showToc)}
                    className="flex items-center text-blue-600 font-medium text-sm bg-blue-50 px-4 py-2 rounded-lg w-full justify-between"
                  >
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Table of Contents
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${showToc ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {showToc && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 bg-gray-50 p-4 rounded-lg overflow-hidden"
                      >
                        <ul className="space-y-2">
                          {headings.map((heading, index) => (
                            <li key={index}>
                              <a 
                                href={`#heading-${index}`} 
                                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 block py-1 pl-2 border-l-2 border-gray-300 hover:border-blue-500"
                                onClick={() => setShowToc(false)}
                              >
                                {heading}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="prose max-w-none">
                  {/* Add IDs to headings for anchor links */}
                  {post.content.split(/(<h[2-3]>.*?<\/h[2-3]>)/).map((section, index) => {
                    if (section.match(/<h[2-3]>(.*?)<\/h[2-3]>/)) {
                      const headingText = section.replace(/<[^>]*>/g, '');
                      return section.replace(
                        /<h([2-3])>(.*?)<\/h[2-3]>/,
                        `<h$1 id="heading-${index}" class="group flex items-center scroll-mt-20">$2 <a href="#heading-${index}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></a></h$1>`
                      );
                    }
                    return section;
                  }).join('')}
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Web Development", "JavaScript"].map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Author Bio */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-sm">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-600">
                    {post.author} is a passionate developer with expertise in modern web technologies. 
                    With years of experience in the industry, they enjoy sharing knowledge and insights 
                    with the developer community through writing and speaking engagements.
                  </p>
                  <div className="flex mt-4 space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <motion.article 
                      key={relatedPost.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="h-40 relative overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-medium rounded-full shadow-sm">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <span>{relatedPost.date}</span>
                          <span className="mx-1">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-300 group-hover:underline">
                            Read more
                            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Newsletter Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl p-8 text-white mb-8 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 z-0"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIySDE4djEyaDE4em02IDBWMjJoNnYxMmgtNnptLTYgNlY0MEgxOFY0MGgxOHYtNnptNiA2VjQwaDZ2NmgtNnptLTYtMTJIMTh2LTZoMTh2NnptNiAwSDQ4di02aDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Stay Updated with Tech Insights</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">Get the latest articles, news and updates delivered to your inbox. No spam, just quality content.</p>
                
                {subscribed ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white text-green-700 py-4 px-6 rounded-lg inline-flex items-center shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Thank you for subscribing!
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;