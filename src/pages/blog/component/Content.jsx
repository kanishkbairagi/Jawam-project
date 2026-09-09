import { getBlogPostById } from '../blogData';
import IndustryEventsContent from './IndustryEventsContent';

export default function Content({ postId = 6 }) {
  const post = getBlogPostById(postId);
  if (post && post.ContentComponent && post.ContentComponent !== Content) {
    const Component = post.ContentComponent;
    return <Component />;
  }
  return <IndustryEventsContent />;
}

