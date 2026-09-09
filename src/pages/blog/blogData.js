import AiTrendsContent from './component/AiTrendsContent';
import CloudSolutionsContent from './component/CloudSolutionsContent';
import DevOpsContent from './component/DevOpsContent';
import AiMlContent from './component/AiMlContent';
import StaffAugmentationContent from './component/StaffAugmentationContent';
import IndustryEventsContent from './component/IndustryEventsContent';

import blogAiTrends from '../../assets/blog-ai-trends.webp';
import blogCloud from '../../assets/blog-cloud.webp';
import blogDevops from '../../assets/blog-devops.webp';
import blogAiml from '../../assets/blog-aiml.webp';
import blogStaffAugmentation from '../../assets/blog-staff-augmentation.webp';
import blogIndustryEvents from '../../assets/blog-industry-events.webp';

export const blogPostsData = [
  {
    id: 1,
    slug: 'top-5-ai-trends-in-2026',
    title: 'Top 5 AI Trends Businesses Must Watch in 2026',
    category: 'AI & Trends',
    date: 'January 2026',
    author: 'Jawam Tech',
    image: blogAiTrends,
    description:
      'Artificial Intelligence is evolving faster than ever. Discover the key AI trends shaping businesses in 2026.',
    ContentComponent: AiTrendsContent,
  },
  {
    id: 2,
    slug: 'how-cloud-solutions-drive-digital-transformation',
    title: 'How Cloud Solutions Drive Digital Transformation',
    category: 'Cloud Computing',
    date: 'January 2026',
    author: 'Jawam Cloud',
    image: blogCloud,
    description:
      'Cloud computing is the backbone of digital transformation. Learn how it enables scalability and innovation.',
    ContentComponent: CloudSolutionsContent,
  },
  {
    id: 3,
    slug: 'devops-speed-meets-reliability',
    title: 'DevOps – Speed Meets Reliability',
    category: 'DevOps',
    date: 'Fabruary 2026',
    author: 'DevOps Team',
    image: blogDevops,
    description:
      'Learn how DevOps practices enhance collaboration, efficiency, and reliability.',
    ContentComponent: DevOpsContent,
  },
  {
    id: 4,
    slug: 'ai-machine-learning-driving-smarter-decisions',
    title: 'AI & Machine Learning – Driving Smarter Decisions',
    category: 'Research',
    date: 'February 2026',
    author: 'AI Lab',
    image: blogAiml,
    description:
      'AI and ML are transforming industries by enabling smarter decisions and automation.',
    ContentComponent: AiMlContent,
  },
  {
    id: 5,
    slug: 'staff-augmentation-the-smart-way-to-scale-your-saas-team',
    title: 'Staff Augmentation – The Smart Way to Scale Your SaaS Team',
    category: 'Staffing',
    date: 'February 2026',
    author: 'Talent Solutions',
    image: blogStaffAugmentation,
    description:
      'Discover how staff augmentation helps SaaS companies scale teams quickly, reduce hiring costs, and access specialized expertise.',
    ContentComponent: StaffAugmentationContent,
  },
  {
    id: 6,
    slug: 'why-attending-industry-events-is-non-negotiable-for-saas-founders',
    title: 'Why Attending Industry Events Is Non-Negotiable for SaaS Founders',
    category: 'Events & Growth',
    date: 'March 2026',
    author: 'Leadership Team',
    image: blogIndustryEvents,
    description:
      'Industry events provide SaaS founders with networking opportunities, market insights, and partnerships that drive business growth.',
    ContentComponent: IndustryEventsContent,
  },
];

export function getBlogPostById(id) {
  const numericId = Number(id);
  const found = blogPostsData.find((p) => p.id === numericId || p.slug === id);
  return found || blogPostsData[0];
}
