import React, { useState, useEffect } from 'react';
import './Guides.css';
import GuideCardPage from '../../components/GuideCardPage/GuideCardPage';
import { useLocation, useNavigate } from 'react-router-dom';

const guidesContent = [
  {
    title: 'Blockchain',
    image: '/photo/Group_32.svg',
    time: '9',
    heading: 'Create Your First Blockchain: A Hands-On Workshop',
    description:
      "Learn decentralization,crypto,and consensus principles, whether you're a newbie or a pro dev.",
  },
  {
    title: 'AI',
    image: '/photo/Group_34_AI.svg',
    time: '12',
    heading: 'Demystifying AI: From Sci-Fi to Reality',
    description:
      "Explore AI's evolution and real-world applications, from ML to industry transformations.",
  },
  {
    title: 'AI',
    image: '/photo/Group_85_AI_computer.svg',
    time: '12',
    heading: 'Demystifying Computer: A to Z',
    description:
      "Explore AI's evolution and real-world applications, from ML to industry transformations.",
  },
  {
    title: 'DevOps',
    image: '/photo/Group_87.svg',
    time: '12',
    heading: 'How to think Like an Engineer(For Noobs)',
    description:
      "Explore AI's evolution and real-world applications, from ML to industry transformations.",
  },
  {
    title: 'Web',
    image: '/photo/Group_39_Web.svg',
    time: '12',
    heading:
      'Progressive Web Application: Bridging the Gap Between Web & Mobile',
    description:
      "Explore AI's evolution and real-world applications, from ML to industry transformations.",
  },
  {
    title: 'DevOps',
    image: '/photo/devopsImg2.svg',
    time: '12',
    heading: 'How to Think Like an Engineer(For Noobs)',
    description:
      'create fast, responsive, and offline-friendly web applications',
  },
];

const Guides = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredGuides, setFilteredGuides] = useState(guidesContent);
  const [click, setClick] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') || 'all';
    if (category === 'all') {
      setFilteredGuides(guidesContent);
      setClick('all');
    } else {
      setFilteredGuides(
        guidesContent.filter(guide => guide.title === category)
      );
      setClick(category);
    }
  }, [location.search]);

  useEffect(() => {
    const preloadId = Math.random().toString(36).substring(2, 8);
    let isMounted = true;
    const uniqueImages = [...new Set(guidesContent.map(guide => guide.image))];
    const preloadImages = uniqueImages.map(image => {
      const img = new Image();
      img.src = image;
      img.onerror = () =>
        isMounted && console.error(`[${preloadId}] Failed to preload: ${image}`);
      return img;
    });
    return () => {
      isMounted = false;
      preloadImages.forEach(img => (img.src = ''));
    };
  }, []);

  const filterGuides = category => {
    navigate(`?category=${category}`);
  };

  return (
    <div className='wrapper'>
      <h2
        className='guide-header header-primary'
        onClick={() => filterGuides('all')}
      >
        Guidelily Guides
      </h2>
      <div className='guide-container'>
        <ul className='guides-menu'>
          {['AI', 'DevOps', 'Web', 'Blockchain'].map(category => (
            <li
              key={category}
              onClick={() => filterGuides(category)}
              className={click === category ? 'active' : ''}
            >
              {category}
            </li>
          ))}
        </ul>
        <GuideCardPage
          filteredGuides={filteredGuides}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default React.memo(Guides);
