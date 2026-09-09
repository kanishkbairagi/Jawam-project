import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'Software Development',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Artificial Intelligence',
  'DevOps and Cloud Services',
  'Custom Software Solutions',
  'Third-party Integration',
  'Full Stack Development',
  'QA and Testing',
  'Data Analytics',
  'CRM Customization',
];

export default function Icons() {
  const [selected, setSelected] = useState('Software Development');
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 300));
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 300);
  };

  return (
    <section className="bg-[#0F172A] px-4 md:px-6 lg:px-8 py-8">
    
    </section>
  );
}
