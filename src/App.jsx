import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activePage, setActivePage] = useState('landing');

  const portfolioData = {
    name: "Bernalyn M. Benedicto",
    shortBio: "Front-End Developer & UI/UX Designer",
    fullBio: "I'm a passionate front-end developer with expertise in React, Tailwind CSS, and modern JavaScript. With a keen eye for design and user experience, I create responsive and intuitive web applications that deliver exceptional user experiences.",
    projects: [
      {
        title: "To-do-list Web App",
        description: "A simple and responsive task management app built with React and Tailwind CSS. Users can add, update, delete, and move tasks between Ongoing and Completed sections. The interface features a soft purple gradient and modern UI styling with smooth interactions.",
        link: "https://to-do-client1-t2k0.onrender.com"
      },
      {
        title: "Task Management App",
        description: "A drag-and-drop task management application with project categorization and deadline tracking.",
        link: "https://github.com/yourusername/task-manager"
      },
      {
        title: "Portfolio Website",
        description: "This minimalist portfolio website showcasing my projects and skills using React, Vite and TailwindCSS.",
        link: "https://yourportfolio.com"
      }
    ],
    activities: [
      {
        title: "Web Development Workshop",
        description: "Organized and led a workshop teaching React fundamentals to junior developers.",
        link: "https://example.com/workshop-details"
      },
      {
        title: "Open Source Contributions",
        description: "Regular contributor to various open-source projects, focusing on UI component libraries.",
        link: "https://github.com/yourusername/contributions"
      }
    ],
    achievements: [
      {
        title: "Certificate of Participation",
        caption: "Joined a national-level web development bootcamp.",
        image: "/certificates/bootcamp.jpg"
      },
      {
        title: "Hackathon Winner",
        caption: "1st place in Inter-University Hackathon 2024.",
        image: "/certificates/hackathon.jpg"
      }
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/bernalinnnnnnnnn", username: "bernalinnnnnnnnn" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/bernalyn-benedicto-1b35a2347", username: "Bernalyn Benedicto" },
      { platform: "Instagram", url: "https://instagram.com/bernalinnnn", username: "bernalinnnn" }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const Landing = () => (
    <motion.div {...fadeInUp} className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-purple-400">
        <img src="/images/berna2.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl font-bold text-purple-800 mb-2">{portfolioData.name}</h1>
      <p className="text-lg text-purple-600 mb-6">{portfolioData.shortBio}</p>
      <button
        onClick={() => setActivePage('about')}
        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
      >
        Get To Know Me More
      </button>
    </motion.div>
  );

  const NavBar = () => (
    <nav className="fixed top-20 w-full bg-purple-50 z-40 border-b border-purple-100 py-2">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setActivePage('about')}
          className={`px-4 py-2 rounded-lg transition duration-300 ${activePage === 'about' ? 'bg-purple-500 text-white' : 'hover:bg-purple-100 text-purple-700'}`}
        >
          About Me
        </button>
        <button
          onClick={() => setActivePage('projects')}
          className={`px-4 py-2 rounded-lg transition duration-300 ${activePage === 'projects' ? 'bg-purple-500 text-white' : 'hover:bg-purple-100 text-purple-700'}`}
        >
          Projects & Activities
        </button>
        <button
          onClick={() => setActivePage('socials')}
          className={`px-4 py-2 rounded-lg transition duration-300 ${activePage === 'socials' ? 'bg-purple-500 text-white' : 'hover:bg-purple-100 text-purple-700'}`}
        >
          Socials
        </button>
      </div>
    </nav>
  );

  const Header = () => (
    <header className="fixed top-0 w-full bg-purple-50 z-50 py-4 px-6 flex items-center border-b border-purple-100">
      <div className="flex items-center cursor-pointer" onClick={() => setActivePage('landing')}>
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src="/images/berna2.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-medium text-purple-800">{portfolioData.name}</h2>
      </div>
    </header>
  );

  const AboutMeContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-4">About Me</h2>
      <p className="text-gray-700 mb-6">{portfolioData.fullBio}</p>

      <h3 className="text-xl font-semibold text-purple-700 mb-3">Skills</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "UI/UX Design", "Responsive Design"].map((skill, index) => (
          <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-purple-700 mb-3">Experience</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-purple-800">Senior Front-End Developer</h4>
          <p className="text-gray-600 text-sm">Company Name • 2021 - Present</p>
          <p className="text-gray-700 mt-1">Leading front-end development for enterprise web applications with React and modern JavaScript.</p>
        </div>
        <div>
          <h4 className="font-medium text-purple-800">UI Developer</h4>
          <p className="text-gray-600 text-sm">Previous Company • 2018 - 2021</p>
          <p className="text-gray-700 mt-1">Developed responsive interfaces and implemented UX improvements across multiple projects.</p>
        </div>
      </div>
    </motion.div>
  );

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-4">Projects</h2>
      <div className="grid gap-6 mb-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-medium text-purple-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-purple-800 mb-4">Activities</h2>
      <div className="grid gap-6 mb-8">
        {portfolioData.activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-medium text-purple-800 mb-2">{activity.title}</h3>
            <p className="text-gray-700 mb-2">{activity.description}</p>
            {activity.link && (
              <a href={activity.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                View More
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-purple-800 mb-4">Achievements</h2>
      <div className="grid gap-6">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <img src={achievement.image} alt={achievement.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium text-purple-800 mb-1">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const SocialsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-purple-800 mb-6">Connect With Me</h2>
      <div className="space-y-4">
        {portfolioData.socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg border border-purple-100 hover:bg-purple-50 transition"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-purple-600 font-medium">{social.platform.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-medium text-purple-800">{social.platform}</h3>
              <p className="text-gray-600 text-sm">{social.username}</p>
            </div>
          </motion.a>
        ))}
        <div className="mt-8 p-6 bg-purple-50 rounded-lg text-center">
          <h3 className="font-medium text-purple-800 mb-2">Contact Me</h3>
          <p className="text-gray-700 mb-4">Interested in working together? Feel free to reach out!</p>
          <a
            href="mailto:benedictobernalyn52@gmail.com"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </motion.div>
  );

  const MainContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutMeContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'socials':
        return <SocialsContent />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 font-sans text-gray-800">
      {activePage !== 'landing' && <Header />}
      {activePage !== 'landing' && <NavBar />}
      <main className={`container mx-auto px-4 ${activePage !== 'landing' ? 'pt-[180px]' : ''} pb-12`}>
        <AnimatePresence mode="wait">
          <MainContent key={activePage} />
        </AnimatePresence>
      </main>
    </div>
  );
}
