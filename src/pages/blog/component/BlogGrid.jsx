import { Link } from 'react-router-dom';
import { blogPostsData } from '../blogData';

export default function BlogGrid() {
  const blogPosts = blogPostsData;

  return (
    <div className="w-full max-w-[980px] mx-auto pb-12 md:pb-4 lg:pb-12 mt-10 md:mt-[50px] lg:mt-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog-post?id=${post.id}`}
            state={{ postId: post.id }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
              border
              border-slate-100/20
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
              flex
              flex-col
              hover:-translate-y-1
              block
              text-left
            "
          >
            <div className="w-full h-36 md:h-40 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="
                text-[#00A3FF]
                text-[15px]
                md:text-[16px]
                font-bold
                mb-2
                leading-snug
              ">
                {post.title}
              </h3>

              <p className="
                text-slate-100
                text-xs
                md:text-[13px]
                leading-relaxed
              ">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}