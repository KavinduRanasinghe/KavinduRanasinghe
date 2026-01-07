import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { 
  Mail, Linkedin, Download, Github, Moon, Sun, Award, 
  Briefcase, Star, ArrowRight, FileText, Globe, 
  MapPin, Calendar, ChevronRight, Menu, X, Rocket, Code, 
  Megaphone, Users, Layout as LayoutIcon, Mic, Radio, Eye, Terminal, ExternalLink, BookOpen, Filter,
  Cpu, Database, Server, Layers, Image as ImageIcon, Video, Presentation, Clock, GraduationCap, CheckCircle,
  Quote, Send, ChevronLeft
} from 'lucide-react';

// --- Assets Imports ---
import profilePic from './assets/profile.png';

// Gallery Imports
import ieeeWebmasterImg from './assets/gallery/ieee_webmaster.jpg';
import maySedsImg from './assets/gallery/may_seds.jpg';
import mlsaImg from './assets/gallery/mlsa.jpg';
import roboticsLabImg from './assets/gallery/RoboticsLab.png';
import sedsExcomImg from './assets/gallery/seds_excom.jpg';
import stemupImg from './assets/gallery/stemup.jpg';
import stemup1Img from './assets/gallery/stemup1.jpg';
import techxImg from './assets/gallery/techx.jpg';
import wayaxtremeImg from './assets/gallery/wayaxtreme1_0.jpg';
import xtremeAmbassadorImg from './assets/gallery/xtremeambassador.jpg';


import wasana from './assets/endorsements/wasana.png';
import muniba from './assets/endorsements/muniba.png';
import saood from './assets/endorsements/saood.png';

// ==========================================
// 1. DATA SECTION
// ==========================================

const profile = {
  name: "Kavindu Ranasinghe",
  role: "Software Engineer & Researcher",
  email: "kavindu.ranasinghe07@gmail.com",
  linkedin: "https://www.linkedin.com/in/kavindu-ranasinghe",
  github: "https://github.com/KavinduRanasinghe",
  image: profilePic
};

const highlights = [
  { date: "2025", text: "Appointed Section Lead for IEEEXtreme 19.0, leading national initiatives.", type: "Leadership" },
  { date: "Present", text: "Conducting research on real-time IoT data streaming for GIS applications.", type: "Research" },
  { 
    date: "2024", 
    text: "Secured 2nd Runners Up at Predicta Datathon, organized by IEEE Student Branch of University of Peradeniya.", 
    type: "Award",
    link: "https://ieee.soc.pdn.ac.lk/events/predicta#h.8qvoeey5ijtl"
  },
    { date: "2024", text: "Developed 'SusFaceGen', a GenAI tool for law enforcement facial composites.", type: "Project" }
];

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    school: "University of Westminster",
    period: "Jan 2021 - Present",
    desc: "Focusing on Software Engineering, Data Science, and AI."
  },
  {
    degree: "BSc Applied Sciences",
    school: "Wayamba University of Sri Lanka",
    period: "2022 - 2025",
    desc: "Focused on Mathematics, Statistics, Computing, and Management Information Systems."
  },
  {
    degree: "Secondary Education",
    school: "Ananda College Colombo",
    period: "2012 - 2020",
    desc: "Completed GCE Advanced Level in Physical Science stream."
  },
  {
    degree: "Primary Education",
    school: "Central College Bibiladeniya",
    period: "2007 - 2011",
    desc: "Completed early primary education."
  }
];

const certifications = [
  { name: "Mathematics for ML & Data Science", issuer: "DeepLearning.AI", icon: <Cpu size={18} /> },
  { name: "Linear Algebra for ML & Data Science", issuer: "DeepLearning.AI", icon: <Cpu size={18} /> },
  { name: "AI/ML Engineer - Stage 1", issuer: "SLIIT", icon: <Code size={18} /> },
  { name: "AI/ML Engineer - Stage 2", issuer: "SLIIT", icon: <Code size={18} /> }
];

const experience = [
  {
    company: "HCLTech Sri Lanka",
    role: "Associate Software Engineer",
    period: "May 2023 - Present",
    type: "Full-time",
    location: "Colombo, Sri Lanka",
    desc: "Specializing in full-stack development (Java, Spring Boot) for enterprise applications in an agile environment. Contributing to high-performance microservices and scalable architecture."
  },
  {
    company: "DeepLearning.AI",
    role: "Tester",
    period: "Jun 2023 - Present",
    type: "Part-time",
    location: "Remote",
    desc: "Beta testing AI courses and content quality assurance. Key contributions include testing and feedback for the AI4G (AI for Good) specialization."
  },
  {
    company: "RoboticGen",
    role: "Mentor",
    period: "Mar 2025 - Oct 2025",
    type: "Part-time",
    location: "Colombo, Sri Lanka",
    desc: "As a Level 2 Mentor, guided students in Robotics, IoT, Python Programming, and 3D Designing. Conducted 85+ sessions, helping young innovators shape their dreams and explore technology."
  },
  {
    company: "HCLTech Sri Lanka",
    role: "Software Engineer Intern",
    period: "Jan 2022 - May 2023",
    type: "Internship",
    location: "Colombo, Sri Lanka",
    desc: "Contributed to backend development and database management for large-scale software solutions. Assisted in API optimization and legacy code refactoring."
  }
];

const researchProjects = [
  {
    title: "IoT GIS Research",
    tag: "Research",
    period: "Ongoing",
    desc: "Investigating real-time sensor data streaming from mobile devices using Azure IoT Hub to generate actionable geospatial signals. Focusing on low-latency data processing pipelines.",
    tech: ["Azure IoT", "Python", "GIS", "Stream Analytics"]
  },
  {
    title: "Inventory Management System",
    tag: "Full Stack",
    period: "Jan 2025 - Present",
    desc: "A comprehensive web-based system for tracking suppliers, products, and stock. Features include dynamic inventory levels, purchase management, and automated PDF report generation.",
    tech: ["Java", "Spring Boot", "React.js", "MongoDB"],
    link: "https://github.com/KavinduRanasinghe/next-super"
  },
  {
    title: "Brain MRI Analysis",
    tag: "AI/ML",
    period: "2024",
    desc: "Designed a deep learning pipeline using CNNs for the classification and segmentation of brain MRI data. Achieved 94% accuracy in early abnormality detection on test datasets.",
    tech: ["TensorFlow", "Keras", "CNN", "OpenCV"],
    link: "https://github.com/KavinduRanasinghe/Brain-MRI--Analysis-using-CNN"
  },
  {
    title: "SusFaceGen",
    tag: "Generative AI",
    period: "2024",
    desc: "A web application leveraging Generative AI (Azure OpenAI) to assist law enforcement in generating suspect facial composites from text descriptions, replacing manual sketching methods.",
    tech: ["ASP.NET Core", "Azure OpenAI", "React", "C#"]
  },
  {
    title: "Consultation Management System",
    tag: "Desktop App",
    period: "Oct 2023 - Mar 2024",
    desc: "Built a desktop booking system for doctor-patient consultations. Features patient registration, scheduling, and CRUD operations with a user-friendly Java Swing interface.",
    tech: ["Java", "Java Swing", "MySQL"],
    link: "https://github.com/KavinduRanasinghe/consultation-management-system"
  }
];

const community = [
  { role: "Section Lead (IEEEXtreme 19.0)", org: "IEEE Sri Lanka Section", period: "Jun 2025 - Present", category: "IEEE", type: "Leadership", color: "bg-[#00629B]", logo: "https://placehold.co/200x200/00629B/ffffff?text=Xtreme", desc: "Leading the national strategy for IEEEXtreme 19.0, focusing on student engagement and competition logistics across Sri Lanka." },
  { role: "Industry Relations SubCom Member", org: "IEEE MGA SAC", period: "Present", category: "IEEE", type: "Global", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Supporting the design of the Industry Relations Platform (IRP) system at a global level." },
  { role: "Program & Delivery Coordinator", org: "IEEE SLSAC Membership Development", period: "Feb 2025 - Present", category: "IEEE", type: "National", color: "bg-[#00629B]", logo: "https://placehold.co/200x200/00629B/ffffff?text=SLSAC", desc: "Coordinating membership development programs and ensuring effective delivery of initiatives like LeaderCon and IEEE Day." },
  { role: "Founding Chairperson", org: "IEEE CS SBC WUSL", period: "Jan 2025 - Present", category: "IEEE", type: "Leadership", color: "bg-orange-500", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Established the Computer Society Chapter at Wayamba University. Spearheading technical workshops and community building." },
  { role: "Microsoft Student Ambassador", org: "Microsoft", period: "Aug 2024 - Present", category: "MLSA", type: "Global Program", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", link: "https://mvp.microsoft.com/studentambassadors/certificate/7d6f5da2-ac9c-40f9-b47a-d7658099c9d6", desc: "Promoting Azure, GitHub, and Visual Studio through events and workshops. Creating inclusive learning environments to empower students with cloud and automation skills." },
  { role: "Founding Chair", org: "Microsoft Learn Student Community (WUSL)", period: "Present", category: "MLSA", type: "Community", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", desc: "Established MLSC at WUSL. Organized workshops on Azure and Power Apps to empower students with Microsoft technologies." },
  { role: "Community Lead (North Western Province)", org: "STEMUP Educational Foundation", period: "Nov 2023 - Present", category: "STEMUP", type: "Education", color: "bg-emerald-600", icon: <BookOpen size={24} />, desc: "Leading STEM education initiatives and delivering a structured curriculum covering Scratch, MicroBits, Python, and Arduino to empower students with coding and electronics skills." },
  { role: "Webmaster", org: "SEDS Wayamba", period: "2024 - Present", category: "SEDS", type: "Space Tech", color: "bg-black", icon: <Rocket size={24} />, desc: "Managing the SEDS Wayamba website and aligning content with the organization's goals for space exploration projects." },
  { role: "Community Lead (North Western Province)", org: "STEMUP Educational Foundation", period: "Aug 2024 - Aug 2025", category: "STEMUP", type: "Leadership", color: "bg-emerald-600", icon: <Users size={24} />, desc: "Led the regional community, coordinating volunteers and overseeing the delivery of STEM education programs across the province." },
  { role: "Public Visibility Team Member", org: "IEEE EMBS AXON 2025", period: "Mar 2025 - May 2025", category: "IEEE", type: "Volunteer", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Managing public relations and visibility strategies for the AXON 2025 event under the Engineering in Medicine and Biology Society." },
  { role: "Program Team Member", org: "IEEE Let'sTalk Adhoc Committee", period: "Dec 2024 - May 2025", category: "IEEE", type: "Program", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Curating content and managing sessions for the Let'sTalk series, focusing on professional development for students." },
  { role: "Chairperson - Career Compass", org: "IEEE SB WUSL", period: "Dec 2024 - Feb 2025", category: "IEEE", type: "Event Chair", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Directed the 'Career Compass' session at the Student Leadership Institute (SLI), bridging the gap between academia and industry." },
  { role: "Team Lead - DXP", org: "AIESEC in Wayamba", period: "May 2024 - Dec 2024", category: "AIESEC", type: "Leadership", color: "bg-[#037Ef3]", logo: "https://cdn.simpleicons.org/aiesec/white", desc: "Led the Digital Experience (DXP) team, driving digital engagement strategies and enhancing the online presence of AIESEC in Wayamba." },
  { role: "Ambassador (IEEEXtreme 18.0)", org: "IEEE SB WUSL", period: "Apr 2024 - Dec 2024", category: "IEEE", type: "Ambassador", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Promoted the 24-hour coding competition, mentoring teams and ensuring high participation from the university." },
  { role: "Webmaster", org: "IEEE SB WUSL", period: "Jan 2024 - Dec 2024", category: "IEEE", type: "Technical", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Maintained and developed the Student Branch website, ensuring up-to-date content and a modern user interface." },
  { role: "Chairperson - WayaXtreme 3.0", org: "IEEE SB WUSL", period: "Jun 2024 - Oct 2024", category: "IEEE", type: "Event Chair", color: "bg-[#00629B]", logo: "https://placehold.co/200x200/00629B/ffffff?text=WayaXtreme", desc: "Led the organizing committee for the university's premier hackathon, managing logistics and participant experience." },
  { role: "Volunteer", org: "STEMUP Educational Foundation", period: "Nov 2023 - Aug 2024", category: "STEMUP", type: "Education", color: "bg-emerald-600", icon: <BookOpen size={24} />, desc: "Conducted educational sessions on Scratch, MicroBits, Python, and Arduino, directly mentoring students and fostering technical literacy." }
];

const sessions = [
  { title: "Career Compass: SLI Session", org: "IEEE Student Branch WUSL", role: "Chairperson & Moderator", date: "Feb 2025", category: "Career Guidance", desc: "Chaired a key session at the Student Leadership Institute connecting students with industry leaders." },
  { title: "Arduino for Beginners (Parts 1 & 2)", org: "STEMUP Educational Foundation", role: "Instructor", date: "Apr - May 2024", category: "Workshop", desc: "Led two hands-on sessions teaching the fundamentals of Arduino and electronics to school students." },
  { title: "Python Programming Series", org: "STEMUP Educational Foundation", role: "Instructor", date: "Feb - Mar 2024", category: "Workshop", desc: "Conducted a two-part series on Python programming basics, logic, and simple automation scripts." },
  { title: "MicroBits & IoT Basics", org: "STEMUP Educational Foundation", role: "Instructor", date: "Jan 2024", category: "Workshop", desc: "Introduced young students to IoT concepts using MicroBits." },
  { title: "Scratch Programming (Parts 1 & 2)", org: "STEMUP Educational Foundation", role: "Instructor", date: "Nov - Dec 2023", category: "Workshop", desc: "Taught block-based coding to beginners to foster early interest in computer science." }
];

// --- Gallery Data ---
const galleryImages = [
  { 
    src: roboticsLabImg, 
    caption: "Robotics Lab Session" 
  },
  { 
    src: ieeeWebmasterImg, 
    caption: "IEEE Student Branch Webmaster" 
  },
  { 
    src: wayaxtremeImg, 
    caption: "Organizing WayaXtreme 1.0" 
  },
  { 
    src: xtremeAmbassadorImg, 
    caption: "IEEEXtreme Ambassador" 
  },
  { 
    src: stemupImg, 
    caption: "STEMUP Educational Session" 
  },
  { 
    src: stemup1Img, 
    caption: "Mentoring Students at STEMUP" 
  },
  { 
    src: mlsaImg, 
    caption: "Microsoft Student Ambassador Event" 
  },
  { 
    src: sedsExcomImg, 
    caption: "SEDS Executive Committee" 
  },
  { 
    src: techxImg, 
    caption: "TechX Session" 
  },
  { 
    src: maySedsImg, 
    caption: "SEDS May Gathering" 
  },
];

const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
];

const testimonials = [
  {
    text: "I am pleased to highly recommend Kavindu for his exceptional contribution as the Section Lead for IEEEXtreme 19.0. His dedication, leadership, and the meaningful initiatives he introduced greatly contributed to strengthening participation and engagement.",
    name: "Muhammad Saood Choudhary",
    role: "Region 10 Lead IEEEXtreme 19.0",
    initial: "S",
    image: saood
  },
  {
    text: "Kavindu delivered exceptional results. He managed his volunteers with clarity, kept the section consistently engaged, and handled every responsibility with professionalism. His leadership directly contributed to the section’s strong performance.",
    name: "Muniba Faheem",
    role: "Region 10 Co-Lead IEEEXtreme 19.0",
    initial: "M",
    image: muniba
  },
  {
    text: "As the Chair of EMBS Axon 2025, I had the pleasure of working with Kavindu. He played a dual role, supporting the organizing committee and stepping up as a moderator, handling the responsibility with confidence and professionalism.",
    name: "Wasana Samarasinghe",
    role: "Chair, EMBS Axon 2025",
    initial: "W",
    image: wasana

  }
];

// ==========================================
// 2. COMPONENTS SECTION
// ==========================================

const PageHeader = ({ title, subtitle }) => (
  <div className="mb-10 opacity-0 animate-fade-in-up">
    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{title}</h1>
    {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const TechStackMarquee = () => {
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div className="w-full overflow-hidden py-10 bg-white dark:bg-[#0a0a0a] border-y border-slate-100 dark:border-slate-800/50">
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="mx-6 flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm min-w-[150px] justify-center transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md cursor-default">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BottomNav = () => {
  const navItems = [
    { path: '/', label: 'About', icon: <Users size={20} /> },
    { path: '/projects', label: 'Projects', icon: <BookOpen size={20} /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { path: '/community', label: 'Volunteering', icon: <Globe size={20} /> },
    { path: '/gallery', label: 'Gallery', icon: <ImageIcon size={20} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <div className="mt-24 mb-12 border-t border-slate-200 dark:border-slate-800 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore More</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">Continue browsing the portfolio</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center justify-center p-4 rounded-xl border transition-all duration-300 group
              ${isActive 
                ? 'bg-slate-900 dark:bg-white border-transparent text-white dark:text-black shadow-lg transform scale-105' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
              }
            `}
          >
            <div className="flex flex-col items-center gap-2">
               <div className={`p-2 rounded-full transition-colors group-hover:bg-slate-100 dark:group-hover:bg-slate-800`}>
                  {item.icon}
               </div>
               <span className="text-sm font-bold tracking-wide">{item.label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const GitHubStats = () => {
  const isDark = document.documentElement.classList.contains('dark');
  const theme = isDark ? 'radical' : 'default'; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in-up animate-stagger-2">
      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0a0a0a]">
        <img 
          src={`https://github-readme-stats.vercel.app/api?username=KavinduRanasinghe&show_icons=true&theme=${theme}&hide_border=true&bg_color=00000000`} 
          alt="GitHub Stats" 
          className="w-full h-full object-cover dark:invert-0"
        />
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0a0a0a]">
        <img 
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=KavinduRanasinghe&layout=compact&theme=${theme}&hide_border=true&bg_color=00000000`} 
          alt="Top Languages" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Testimonials = () => (
  <div className="opacity-0 animate-fade-in-up animate-stagger-3 mt-12">
    <div className="flex items-center gap-3 mb-8 px-2">
      <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-500 rounded-lg">
        <Quote size={20} fill="currentColor" />
      </div>
      <h3 className="font-bold text-slate-900 dark:text-white text-2xl">Endorsements</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((test, index) => (
        <div key={index} className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover-scale flex flex-col h-full">
          <div className="mb-6 text-slate-300 dark:text-slate-700">
             <Quote size={32} />
          </div>
          <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed flex-grow">"{test.text}"</p>
          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-lg shadow-inner">
              {test.image ? (<img src={test.image} alt={test.name} className="w-full h-full object-cover rounded-full" />) : (test.initial)}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{test.name}</div>
              <div className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">{test.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// 3. PAGE COMPONENTS
// ==========================================

const Home = () => (
  <div className="space-y-16">
    <div className="opacity-0 animate-fade-in-up bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm hover-scale">
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
        <span className="text-blue-600 dark:text-blue-500">Ayubowan!</span> I'm Kavindu.
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
  I am a <strong className="font-semibold text-slate-900 dark:text-white">Software Engineer</strong> and
  <strong className="font-semibold text-slate-900 dark:text-white"> Researcher</strong> driven by curiosity, code, and a passion for innovation. 
Using Full-stack Engineering and AI/ML expertise to craft solutions that address real-world challenges.  <br/>I strongly believe that a taker mindset should transform into a giver mindset through meaningful community service, contributing back to the society that shapes us.
</p>

    </div>

    {/* Education & Certifications Section */}
    <div className="opacity-0 animate-fade-in-up animate-stagger-1 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Education */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 rounded-lg">
            <GraduationCap size={20} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-xl">Education</h3>
        </div>
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-scale">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
            <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">{edu.school}</div>
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Calendar size={14} /> {edu.period}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-500 rounded-lg">
            <Award size={20} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-xl">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover-scale group">
              <div>
                <div className="mb-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">{cert.icon}</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-1">{cert.name}</h4>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-500" />
                Verified by <span className="font-semibold">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div className="opacity-0 animate-fade-in-up animate-stagger-2">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 rounded-lg">
          <Cpu size={20} />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-xl">Tech Stack</h3>
      </div>
      <TechStackMarquee />
    </div>

    {/* GitHub Stats Section removed as requested */}

    <Testimonials />

    <div className="opacity-0 animate-fade-in-up animate-stagger-4 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover-scale mt-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 rounded-lg">
          <Star size={20} fill="currentColor" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-xl">Highlights / Updates</h3>
      </div>
      <div className="space-y-8 pl-3 border-l-[2px] border-slate-200 dark:border-slate-800 ml-3">
        {highlights.map((item, index) => (
          <div key={index} className="pl-8 relative group">
              <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-slate-50 dark:bg-[#0a0a0a] border-2 border-slate-300 dark:border-slate-700 group-hover:border-amber-500 transition-colors scale-100 group-hover:scale-125 duration-300"></div>
              <div className="flex gap-4 items-start relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                      {item.date}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 rounded-lg">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {item.text}
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center ml-2 text-blue-600 hover:underline text-sm"
                      >
                         <ExternalLink size={12} className="mr-1" /> View
                      </a>
                    )}
                  </p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div>
      <PageHeader title="Projects" subtitle="Investigating the intersection of IoT, Geospatial Data, and Generative AI." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <div key={index} className={`opacity-0 animate-fade-in-up animate-stagger-${index % 3 + 1} group bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover-scale flex flex-col h-full hover:border-blue-200 dark:hover:border-blue-900 transition-colors`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                project.tag === 'Research' 
                  ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 border border-purple-100 dark:border-purple-800' 
                  : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-100 dark:border-blue-800'
              }`}>
                {project.tag}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
              {project.desc}
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => (
  <div>
    <PageHeader title="Work Experience" subtitle="A professional journey focused on building scalable enterprise solutions." />
    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 space-y-12 my-8">
      {experience.map((job, index) => (
        <div key={index} className={`relative pl-8 md:pl-12 group opacity-0 animate-fade-in-up animate-stagger-${index + 1}`}>
          <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-white dark:bg-[#050505] border-[3px] border-blue-500 dark:border-blue-500 z-10 group-hover:scale-125 transition-transform duration-300"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {job.role}
            </h3>
            <span className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0">
              <Calendar size={12} className="mr-1.5" /> {job.period}
            </span>
          </div>
          
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm mb-4">
             <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
               <Briefcase size={14} /> {job.company}
             </span>
             <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
               <MapPin size={14} /> {job.location}
             </span>
             <span className="text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs">
               <Clock size={12} /> {job.type}
             </span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
            {job.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Community = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'IEEE', 'MLSA', 'SEDS', 'STEMUP', 'AIESEC'];

  const filteredCommunity = activeFilter === 'All' 
    ? community 
    : community.filter(item => item.category === activeFilter);

  return (
    <div>
      <PageHeader title="Volunteer Section" subtitle="Roles undertaken willingly, without pay, to give back to the community." />
      
      <div className="flex flex-wrap gap-2 mb-10 opacity-0 animate-fade-in-up">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg shadow-slate-200 dark:shadow-none scale-105' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 mb-16">
        {filteredCommunity.length > 0 ? (
          filteredCommunity.map((item, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-up bg-white dark:bg-slate-900/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all hover:translate-x-1 flex flex-col md:flex-row gap-6 items-start`} style={{ animationDelay: `${index * 50}ms` }}>
              <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-xl ${item.color} text-white shadow-lg overflow-hidden`}>
                  {item.logo ? (
                    <img src={item.logo} alt={item.org} className="w-10 h-10 object-contain" />
                  ) : (
                    item.icon
                  )}
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {item.role}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" title="View Certificate">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h4>
                  <span className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                  {item.org}
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-slate-400 dark:text-slate-500 font-semibold">{item.type}</span>
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/20 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 opacity-0 animate-fade-in-up">
            <Filter size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
            <p className="text-slate-500 dark:text-slate-400 font-medium">No volunteering history found for {activeFilter} yet.</p>
          </div>
        )}
      </div>

      {/* Talks & Workshops Section */}
      <div className="mt-16 opacity-0 animate-fade-in-up animate-stagger-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-500 rounded-lg">
            <Presentation size={20} fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Public Speaking & Workshops</h2>
        </div>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-10">
          {sessions.map((session, idx) => (
            <div key={idx} className="relative pl-8 hover-scale transition-transform origin-left">
              <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white dark:bg-[#050505] border-[3px] border-pink-500 dark:border-pink-500 z-10"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  {session.title}
                </h4>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  {session.date}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{session.org}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border border-pink-100 dark:border-pink-800">
                  {session.category}
                </span>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {session.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div>
      <PageHeader title="Gallery" subtitle="Capturing moments from my journey in volunteering, technology, and leadership." />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((img, index) => (
          <div 
            key={index} 
            onClick={() => openLightbox(index)}
            className={`break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in opacity-0 animate-fade-in-up animate-stagger-${index % 4 + 1}`}
          >
            <img src={img.src} alt={img.caption} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={24} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hidden md:block"
          >
            <ChevronLeft className="rotate-180" size={32} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].caption} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">{galleryImages[selectedImageIndex].caption}</p>
              <p className="text-white/50 text-sm mt-1">
                {selectedImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => (
  <div className="space-y-12 opacity-0 animate-fade-in-up">
    <PageHeader title="Get in Touch" subtitle="Let's discuss how we can collaborate on research, software projects, or community initiatives." />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8"></div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">Send a Message</h3>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white" placeholder="Your Name" />
                </div>
                <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white" placeholder="your@email.com" />
                </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white appearance-none cursor-pointer">
                  <option>Research Collaboration</option>
                  <option>Software Project</option>
                  <option>Community / Speaking</option>
                  <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group">
              <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white/50 dark:bg-slate-900/30 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 h-fit">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${profile.email}`} className="text-lg text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors block break-all">{profile.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">LinkedIn</p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-lg text-slate-900 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Connect on LinkedIn</a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Location</p>
                <p className="text-lg text-slate-900 dark:text-white font-medium">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Map */}
        <div className="bg-slate-200 dark:bg-slate-800 h-64 rounded-[2rem] overflow-hidden relative border border-slate-200 dark:border-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
           <img 
             src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
             alt="Colombo Map" 
             className="w-full h-full object-cover opacity-60 dark:opacity-50 hover:scale-110 transition-transform duration-700"
           />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-full shadow-2xl animate-bounce">
                 <MapPin size={32} className="text-red-500" fill="currentColor" />
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// 3. LAYOUT & MAIN APP
// ==========================================

const MobileNavbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/community', label: 'Volunteering' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="lg:hidden sticky top-0 z-40 mb-8">
      <div className="mx-4 mt-4 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg px-4 py-3 flex items-center justify-between">
         <div className="font-bold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg text-sm animate-pulse">KR</span>
            <span className="hidden sm:inline">Kavindu.</span>
         </div>
         
         <div className="flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 p-4 animate-fade-in-up">
           <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2 space-y-1">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all group
                    ${isActive 
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }
                  `}
                >
                  {item.label}
                  <ChevronRight size={16} className="opacity-50" />
                </NavLink>
              ))}
           </div>
        </div>
      )}
    </div>
  );
};

const DesktopNavbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/community', label: 'Volunteering' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1 p-2 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl">
      <div className="flex items-center gap-1 px-2">
         {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isActive 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-md' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }
              `}
            >
              {item.label}
            </NavLink>
         ))}
      </div>
      <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-1"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-300 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 ${darkMode ? 'dark' : ''}`}>
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-900 dark:opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 lg:py-16">
        
        {/* Mobile Navbar */}
        <MobileNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Desktop Navbar (Floating Top Center) */}
        <DesktopNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Add spacer for fixed header on desktop */}
        <div className="hidden lg:block h-16"></div>

        <div className="px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDEBAR (Sticky) --- */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* Profile Card */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl text-center relative overflow-hidden group hover-scale animate-slide-in-left">
                <div className="w-40 h-40 mx-auto bg-slate-100 dark:bg-slate-900 rounded-[1.5rem] mb-6 overflow-hidden relative shadow-inner border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-300 dark:text-slate-700">KR</div>
                    {/* Use a placeholder URL. If using local image, set this to: image: profilePic */}
                    <img src={profile.image} alt={profile.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">{profile.name}</h1>

                {/* Quick Action Links */}
                <div className="grid grid-cols-[80px_1fr] gap-y-3 text-sm text-left w-full max-w-[240px] mx-auto mb-10">
                  <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wide pt-1">Download</span>
                  <a href="#" className="text-blue-600 dark:text-blue-500 font-bold hover:underline flex items-center gap-1 group/link">
                    Profile Pic <Download size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>

                  <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wide pt-1">Get</span>
                  <div className="flex flex-col gap-1">
                     <a href="#" className="text-blue-600 dark:text-blue-500 font-bold hover:underline flex items-center gap-1 group/link">
                       Resume <FileText size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                     </a>
                     <a href="#" className="text-blue-600 dark:text-blue-500 font-bold hover:underline flex items-center gap-1 group/link">
                       CV <FileText size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                     </a>
                  </div>

                  <span className="text-slate-400 dark:text-slate-500 font-medium text-xs uppercase tracking-wide pt-1">Visit</span>
                  <a href="#" className="text-blue-600 dark:text-blue-500 font-bold hover:underline flex items-center gap-1 group/link">
                    Scholar <Globe size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mb-8">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"><Linkedin size={18} /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"><Github size={18} /></a>
                  <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-amber-900/30 dark:hover:text-amber-400 transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
                </div>

                <a href={`mailto:${profile.email}`} className="block w-full py-4 px-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-black rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-200 dark:shadow-none">Contact Me</a>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT AREA --- */}
          <div className="lg:col-span-8 xl:col-span-9 min-h-[500px]">
             {children}
             
             {/* Bottom Navigation */}
             {/* <BottomNav /> */}

             {/* Footer */}
             <footer className="pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 text-center mt-12 opacity-60">
              <p className="text-xs text-slate-400 dark:text-slate-600">
                © {new Date().getFullYear()} Kavindu Ranasinghe.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/community" element={<Community />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}