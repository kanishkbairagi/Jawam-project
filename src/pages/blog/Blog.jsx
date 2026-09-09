import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './component/Hero';
import FeaturedPost from './component/FeaturedPost';
import BlogGrid from './component/BlogGrid';
import './blog.css';

export default function Blog() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#blog-grid' || location.pathname === '/blog-grid') {
      setTimeout(() => {
        const el = document.getElementById('blog-grid');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="min-h-screen mb-[-60px] md:mb-[-60px] ">
      <div className="h-12"></div>

      <section className="py-12 px-4 md:px-6 lg:px-6">
        <div className="max-w-[1150px] mx-auto">

          <Hero />
          <FeaturedPost />
          <div id="blog-grid">
            <BlogGrid />
          </div>

        </div>
      </section>
    </main>
  );
}

