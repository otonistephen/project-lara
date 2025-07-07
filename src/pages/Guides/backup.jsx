import React, { useState, useEffect } from 'react';
import './Guides.css';
import GuideCardPage from '../../components/GuideCardPage/GuideCardPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { images } from '../../assets/images';

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
  const [click, setClick] = useState(null);

  const [currentCategory, setCurrentCategory] = useState();

  const filterGuides = category => {
    if (category === 'all') {
      setFilteredGuides(guidesContent);
      setClick('all');
    } else {
      const filtered = guidesContent.filter(guide => guide.title === category);
      setFilteredGuides(filtered);
      setClick(category);
    }
    navigate(`?category=${category}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    setCurrentCategory(category);
  }, [location.search]);

  useEffect(() => {
    if (currentCategory === 'all') {
      setFilteredGuides(guidesContent);
    } else if (currentCategory) {
      setFilteredGuides(
        guidesContent.filter(guide => guide.title === currentCategory)
      );
    }
  }, [currentCategory]);

  // useEffect(() => {
  //   const preloadImages = guidesContent.map(guide => {
  //     const img = new Image();
  //     img.src = guide.image;
  //     img.onload = () =>console.log('successful preload:', guide.image)
  //     img.onerror = () =>
  //       console.error(`Failed to preload image: ${guide.image}`);
  //     return img;
  //   });

  //   return () => {
  //     preloadImages.forEach(img => {
  //       img.src = '';
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;
  //   console.log('Starting image preload at:', new Date().toISOString());
  //   console.log(
  //     'Image paths:',
  //     guidesContent.map(guide => guide.image)
  //   );
  //   const preloadImages = guidesContent.map(guide => {
  //     const img = new Image();
  //     console.log('Attempting to preload:', guide.image);
  //     img.src = guide.image;
  //     img.onload = () =>
  //       isMounted && console.log('Successfully preloaded:', guide.image);
  //     img.onerror = () =>
  //       isMounted && console.warn('Failed to preload image:', guide.image);
  //     return img;
  //   });
  //   return () => {
  //     isMounted = false;
  //     console.log('Cleaning up preload images');
  //     preloadImages.forEach(img => {
  //       img.src = '';
  //     });
  //   };
  // }, []);
  useEffect(() => {
    const preloadId = Math.random().toString(36).substring(2, 8);
    let isMounted = true;
    console.log(
      `Starting image preload [${preloadId}] at:`,
      new Date().toISOString()
    );
    console.log(
      `Image paths [${preloadId}]:`,
      guidesContent.map(guide => guide.image)
    );
    const uniqueImages = [...new Set(guidesContent.map(guide => guide.image))];
    const preloadImages = uniqueImages.map(image => {
      const img = new Image();
      console.log(`[${preloadId}] Attempting to preload:`, image);
      img.src = image;
      img.onload = () =>
        isMounted &&
        console.log(`[${preloadId}] Successfully preloaded:`, image);
      img.onerror = () =>
        isMounted &&
        console.warn(`[${preloadId}] Failed to preload image:`, image);
      return img;
    });
    return () => {
      isMounted = false;
      console.log(`[${preloadId}] Cleaning up preload images`);
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, []);

  useEffect(() => {
    console.log('Guides component mounted at:', new Date().toISOString());
  }, []);

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
          <li
            onClick={() => filterGuides('AI')}
            className={click === 'AI' ? 'active' : ''}
          >
            AI
          </li>
          <li
            onClick={() => filterGuides('DevOps')}
            className={click === 'DevOps' ? 'active' : ''}
          >
            DevOps
          </li>
          <li
            onClick={() => filterGuides('Web')}
            className={click === 'Web' ? 'active' : ''}
          >
            Web
          </li>
          <li
            onClick={() => filterGuides('Blockchain')}
            className={click === 'Blockchain' ? 'active' : ''}
          >
            Blockchain
          </li>
        </ul>

        <GuideCardPage
          guidesContent={guidesContent}
          filteredGuides={filteredGuides}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Guides;
