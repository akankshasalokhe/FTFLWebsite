// pages/blog/[slug].js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

// Sample blog post data (would typically come from an API or CMS)
const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to set up and build your first Next.js application with this comprehensive guide.",
    date: "May 15, 2023",
    author: "Jane Smith",
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
    author: "John Doe",
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
  // Other posts would follow the same structure
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  // Find the current post based on the slug
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  // If the post is not found, show a loading state or 404 page
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Head>
          <title>Post Not Found | Blog</title>
        </Head>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/blog">
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </button>
            </Link>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Blog</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12 border border-gray-100">
          <div className="h-64 md:h-80 relative overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-white text-blue-700 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Web Development", "JavaScript"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <section className="bg-white rounded-2xl p-6 mb-12 shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
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
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <motion.article 
                  key={relatedPost.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-full">
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center">
                        Read more
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">Get the latest articles, news and updates delivered to your inbox. No spam.</p>
            
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white text-green-700 py-4 px-6 rounded-lg inline-flex items-center"
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
                  className="flex-grow border border-white px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default BlogPost;