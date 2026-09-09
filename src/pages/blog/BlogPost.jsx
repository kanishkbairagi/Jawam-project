import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import Header from './component/Header';
import Content from './component/Content';
import RelatedBlogs from './component/RelatedBlogs';
import { getBlogPostById } from './blogData';
import './blogpost.css';

function BlogPost() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const activeId =
    id || searchParams.get('id') || location.state?.postId || 1;
  const post = getBlogPostById(activeId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  const PostContent = post?.ContentComponent || Content;

  return (
    <div>
      <main className="min-h-screen pt-24 mb-[-90px] md:mb-[-20px] lg:mb-[-70px]">
        <div className="w-full mx-auto px-4 md:px-6 lg:px-6 py-8 text-center">
          <Header post={post} />
          <PostContent postId={post.id} />
          <RelatedBlogs currentId={post.id} />
        </div>
      </main>
    </div>
  );
}

export default BlogPost;

