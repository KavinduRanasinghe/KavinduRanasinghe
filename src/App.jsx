import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { 
  Mail, Linkedin, Github, Moon, Sun, Award, 
  Briefcase, Star, ArrowRight, Globe, 
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

const navItems = [
  { path: '/about', label: 'About', title: 'About' },
  { path: '/projects', label: 'Projects', title: 'Projects' },
  { path: '/experience', label: 'Experience', title: 'Experience' },
  { path: '/volunteering', label: 'Volunteering', title: 'Volunteering' },
  { path: '/gallery', label: 'Gallery', title: 'Gallery' },
  { path: '/contact', label: 'Contact', title: 'Contact' },
];

const appRouteSegments = navItems.map((item) => item.path.replace(/^\//, ''));

const resolveRouterBase = () => {
  if (typeof window === 'undefined') return '';

  const [firstSegment = ''] = window.location.pathname.split('/').filter(Boolean);
  return firstSegment && !appRouteSegments.includes(firstSegment) ? `/${firstSegment}` : '';
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
    desc: "Completed with a Second Lower Class Division , Focused on Mathematics, Statistics, Computing, and Management Information Systems."
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
    title: "MZ-GenAI - Mondelez",
    tag: "Desktop App",
    period: "Completed",
    desc: "A desktop application that accesses web-hosted internal GenAI chatbot services for Mondelez. Integrated Edge WebView2 and Windows APIs to function similarly to Microsoft Copilot, providing employees quick access to internal knowledge.",
    tech: ["C#", "WinForms", "WebView2", "Windows APIs"]
  },
  {
    title: "AdvocateLK",
    tag: "Backend",
    period: "Completed",
    desc: "A platform connecting legal professionals with clients in Sri Lanka. Developed a robust backend with user authentication (JWT) using clean architecture principles, and implemented comprehensive unit testing.",
    tech: ["ASP.NET Core", "EF Core", "PostgreSQL", "xUnit"]
  },
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
  { role: "Technical Activities Vice Chair", org: "IEEE Sri Lanka Student Activities Committee", period: "2026", category: "IEEE", type: "Leadership", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Serving as Technical Activities Vice Chair and supporting the organization of TechFest Sri Lanka 2026." },
  { role: "TechX Outreach Lead", org: "IEEE CS SYP", period: "2026", category: "IEEE", type: "Outreach", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Serving as Outreach Lead for IEEE CS SYP TechX, supporting visibility, community engagement, and outreach efforts around the program." },
  { role: "Section Lead (IEEEXtreme 19.0)", org: "IEEE Sri Lanka Section", period: "2025", category: "IEEE", type: "Leadership", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Led the national IEEEXtreme 19.0 effort, launched XtremeDiaries, collaborated with 23 universities, supported the full ambassador network, and helped Sri Lanka reach the 3rd highest participant count globally with 42% student-member participation." },
  { role: "Industry Relations SubCom Member", org: "IEEE MGA SAC", period: "2025", category: "IEEE", type: "Global", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Contributed to the design of the Industry Relations Platform (IRP), identified stakeholder-aligned use cases, and supported research and documentation for data-informed system planning." },
  { role: "Membership Development SLSAC Coordinator", org: "IEEE Sri Lanka Section", period: "2025", category: "IEEE", type: "National", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Planned and strategized membership development initiatives while supporting IEEE Day, LeaderCon 2025, and the planning and execution of SLYWC 2025." },
  { role: "Content Manager", org: "EMBS SL Section Chapter PV Sub Committee", period: "2025", category: "IEEE", type: "Content", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Updated marketing trackers, introduced fresh initiatives, sourced content for writers and designers, and supported cross-platform social media management across Facebook, Instagram, LinkedIn, and WhatsApp channels." },
  { role: "PV Committee Member & Moderator", org: "IEEE EMBS AXON", period: "2025", category: "IEEE", type: "Volunteer", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Volunteered with the public visibility team, moderated sessions, and supported the volunteer team throughout event delivery." },
  { role: "Founding Chair", org: "IEEE CS SBC WUSL", period: "2025", category: "IEEE", type: "Leadership", color: "bg-orange-500", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Played a key role in establishing the IEEE Computer Society Chapter at Wayamba University, organizing technical events and coordinating with IEEE leaders for smooth integration into the student branch structure." },
  { role: "Education Week Ambassador", org: "IEEE Sri Lanka", period: "May 2025", category: "IEEE", type: "Ambassador", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Supported IEEE Education Week activities in Sri Lanka and promoted the educational value and member benefits of IEEE to local communities." },
  { role: "Program Team Member", org: "YPSL Let'sTalk Adhoc", period: "2024", category: "IEEE", type: "Program", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Contributed to planning and execution of the YPSL Let’sTalk volunteer training series focused on personal development." },
  { role: "SLI Event Coordinator", org: "YPSL", period: "2024", category: "IEEE", type: "Coordinator", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Coordinated the Sri Lanka IEEE Young Professionals SLI event with the student branch and helped ensure smooth planning and delivery." },
  { role: "IEEEXtreme Awareness Session Event Chair", org: "IEEE Sri Lanka", period: "2024", category: "IEEE", type: "Event Chair", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Organized the first IEEEXtreme awareness session in Sri Lanka hosted by global program leads, coordinating logistics, outreach, and community engagement to drive participation." },
  { role: "IEEEXtreme 18.0 Student Branch Ambassador", org: "IEEE SB WUSL", period: "2024", category: "IEEE", type: "Ambassador", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Acted as the main liaison between the global IEEEXtreme program and IEEE SB WUSL, promoted the competition, organized awareness sessions, and supported coordination among teams and mentors." },
  { role: "Webmaster", org: "IEEE SB WUSL", period: "2024", category: "IEEE", type: "Technical", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Managed the official IEEE SB WUSL online presence and maintained timely updates for events, announcements, digital content, and promotional material." },
  { role: "WayaXtreme 3.0 Event Chair", org: "IEEE SB WUSL", period: "2024", category: "IEEE", type: "Event Chair", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Led the organizing committee for WayaXtreme 3.0, managing logistics, marketing, registration, participant engagement, and sponsor coordination." },
  { role: "CodeRally 4.0 Editorial Team Member", org: "IEEE Computer Society Chapter at IIT", period: "2023", category: "IEEE", type: "Editorial", color: "bg-[#00629B]", logo: "https://cdn.simpleicons.org/ieee/white", desc: "Supported editorial work for CodeRally 4.0 and contributed to organizing the competition and its event content." },
  { role: "Microsoft Student Ambassador", org: "Microsoft", period: "Aug 2024 - Present", category: "MLSA", type: "Global Program", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", link: "https://mvp.microsoft.com/studentambassadors/certificate/7d6f5da2-ac9c-40f9-b47a-d7658099c9d6", desc: "Promoting Azure, GitHub, and Visual Studio through events and workshops while creating inclusive learning opportunities around Microsoft technologies." },
  { role: "Founding Chair", org: "Microsoft Learn Student Community (WUSL)", period: "Present", category: "MLSA", type: "Community", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", desc: "Established the Microsoft Learn Student Community at WUSL, led student activities around Azure and Power Apps, and collaborated with industry experts to create valuable learning opportunities." },
  { role: "Content Planning Team Member", org: "MLSA Events", period: "2024", category: "MLSA", type: "Content", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", desc: "Helped create and organize content for MLSA-related sessions and workshops, including promotional assets, slide decks, and tutorials." },
  { role: "Taprobane V4 R&D Team Member", org: "Taprobane V4", period: "2024", category: "MLSA", type: "Research", color: "bg-[#0078D4]", logo: "https://cdn.simpleicons.org/microsoft/white", desc: "Volunteered on interdisciplinary R&D work focused on innovation and building practical technology solutions for real-world challenges." },
  { role: "Webmaster", org: "SEDS Wayamba", period: "2024 - Present", category: "SEDS", type: "Space Tech", color: "bg-black", icon: <Rocket size={24} />, desc: "Managed the SEDS Wayamba website, keeping content current and aligned with the organization’s space-focused projects and events." },
  { role: "Community Lead (North Western Province)", org: "STEMUP Educational Foundation", period: "Nov 2023 - Present", category: "STEMUP", type: "Education", color: "bg-emerald-600", icon: <BookOpen size={24} />, desc: "Leading STEM education initiatives and delivering structured learning in Scratch, MicroBits, Python, and Arduino for school students." },
  { role: "Community Lead (North Western Province)", org: "STEMUP Educational Foundation", period: "Aug 2024 - Aug 2025", category: "STEMUP", type: "Leadership", color: "bg-emerald-600", icon: <Users size={24} />, desc: "Led the regional volunteer community, coordinated program delivery, and supported STEM education outreach across the province." },
  { role: "Volunteer", org: "STEMUP Educational Foundation", period: "Nov 2023 - Aug 2024", category: "STEMUP", type: "Education", color: "bg-emerald-600", icon: <BookOpen size={24} />, desc: "Conducted student-facing educational sessions and directly mentored learners in coding, electronics, and maker-oriented activities." }
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

const heroMetrics = [
  { value: '4+', label: 'Years building software', icon: <Code size={18} /> },
  { value: '15+', label: 'Community leadership roles', icon: <Users size={18} /> },
  { value: '7', label: 'Featured projects', icon: <Layers size={18} /> },
  { value: '5+', label: 'Workshops delivered', icon: <Mic size={18} /> },
];

// ==========================================
// 2. COMPONENTS SECTION
// ==========================================

const PageHeader = ({ title, subtitle }) => (
  <div className="mb-10 rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 opacity-0 animate-fade-in-up">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-700 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
      Portfolio Section
    </div>
    <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h1>
    {subtitle && <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">{subtitle}</p>}
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
    <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-40px_rgba(14,116,144,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 md:p-10 opacity-0 animate-fade-in-up">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/15"></div>
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10"></div>
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            Engineer • Researcher • Community Builder
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 dark:text-white md:text-6xl">
            Building practical software, AI-driven products, and communities that keep growing after launch.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            Ayubowan! I'm Kavindu. I work across full-stack engineering, enterprise software, and applied AI while investing deeply in student communities, workshops, and leadership programs that create real momentum for others.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            My approach is simple: ship useful systems, stay curious, and turn personal growth into shared opportunity through research, mentorship, and service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink to="/projects" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
              Explore Projects <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white">
              Start a Conversation <Send size={16} />
            </NavLink>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-2xl shadow-cyan-950/20 dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Current Focus</p>
              <h2 className="mt-2 text-2xl font-bold">Applied engineering with visible impact</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
              <Terminal size={22} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Now</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">Building enterprise applications at HCLTech and researching real-time IoT streams for GIS-driven intelligence.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Edge</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">Strong overlap between software delivery, AI experimentation, and leadership in technical communities.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/20 to-amber-300/10 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Principle</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white">Use technology to solve immediate problems and community work to multiply the long-term effect.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-2 gap-4 md:grid-cols-4 opacity-0 animate-fade-in-up animate-stagger-1">
      {heroMetrics.map((item) => (
        <div key={item.label} className="rounded-[1.5rem] border border-white/70 bg-white/75 p-5 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
          <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-sky-600 dark:bg-white/5 dark:text-sky-300">
            {item.icon}
          </div>
          <div className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{item.value}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.label}</p>
        </div>
      ))}
    </section>

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
          <div key={index} className={`opacity-0 animate-fade-in-up animate-stagger-${index % 3 + 1} group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl hover-scale dark:border-white/10 dark:bg-slate-950/60 flex flex-col h-full transition-all hover:border-cyan-200 dark:hover:border-cyan-800/50`}>
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
              {project.desc}
            </p>

            <div className="mt-auto space-y-4">
              <div className="rounded-2xl bg-slate-50/90 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:bg-white/5 dark:text-slate-400">
                {project.period}
              </div>
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
          
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed border border-white/70 bg-white/80 p-6 rounded-[1.6rem] shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 hover:border-cyan-200 dark:hover:border-cyan-800 transition-colors">
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
  const filterAccent = {
    All: 'from-slate-900 to-slate-700 dark:from-white dark:to-slate-200',
    IEEE: 'from-[#00629B] to-sky-500',
    MLSA: 'from-[#0078D4] to-cyan-500',
    SEDS: 'from-slate-900 to-slate-700',
    STEMUP: 'from-emerald-600 to-lime-500',
    AIESEC: 'from-[#037Ef3] to-sky-400',
  };

  const filteredCommunity = activeFilter === 'All' 
    ? community 
    : community.filter(item => item.category === activeFilter);

  return (
    <div>
      <PageHeader title="Volunteer Section" subtitle="Roles undertaken willingly, without pay, to give back to the community." />
      
      <div className="mb-10 rounded-[1.8rem] border border-white/70 bg-white/75 p-4 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.35)] backdrop-blur-xl opacity-0 animate-fade-in-up dark:border-white/10 dark:bg-slate-950/60">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">Browse Roles</p>
            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Volunteer history across communities and programs</h3>
          </div>
          <div className="inline-flex items-center self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
            {filteredCommunity.length} roles
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter 
                ? `bg-gradient-to-r ${filterAccent[filter]} text-white dark:text-slate-950 shadow-lg shadow-slate-200 dark:shadow-none scale-[1.02] border-transparent`
                : 'bg-white/90 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {filter}
          </button>
        ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-16">
        {filteredCommunity.length > 0 ? (
          filteredCommunity.map((item, index) => (
            <article key={index} className="group opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="rounded-[1.85rem] border border-white/70 bg-white/80 p-6 shadow-[0_26px_70px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_30px_90px_-44px_rgba(8,145,178,0.35)] dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-cyan-800/50 md:p-7">
              <div className="flex flex-col gap-5 md:grid md:grid-cols-[84px_minmax(0,1fr)] md:items-start">
              <div className="flex items-start justify-between gap-4 md:block">
              <div className={`shrink-0 h-16 w-16 flex items-center justify-center rounded-2xl ${item.color} text-white shadow-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10`}>
                  {item.logo ? (
                    <img src={item.logo} alt={item.org} className="w-10 h-10 object-contain" />
                  ) : (
                    item.icon
                  )}
              </div>
              <div className="flex flex-wrap gap-2 md:mt-4">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:border-slate-800 dark:bg-white/5 dark:text-slate-400">
                  {item.category}
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:border-slate-800 dark:bg-white/5 dark:text-slate-400">
                  {item.type}
                </span>
              </div>
              </div>

              <div className="min-w-0">
                <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                  <h4 className="max-w-3xl text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 flex items-center gap-2">
                    {item.role}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="shrink-0 text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400" title="View Certificate">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h4>
                  <span className="inline-flex items-center self-start text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.24em] bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full mt-1 xl:mt-0 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400">
                    {item.org}
                  </p>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:block"></span>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    {item.category} Role
                  </p>
                </div>

                <p className="max-w-4xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
              </div>
              </div>
            </article>
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

const routeElements = {
  '/about': <Home />,
  '/projects': <Projects />,
  '/experience': <Experience />,
  '/volunteering': <Community />,
  '/gallery': <Gallery />,
  '/contact': <Contact />,
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const currentRoute = navItems.find((item) => item.path === location.pathname);
    document.title = currentRoute
      ? `${currentRoute.title} | ${profile.name}`
      : `${profile.name} | Portfolio`;
  }, [location.pathname]);

  return null;
};

const MobileNavbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden sticky top-0 z-40 mb-8">
      <div className="mx-4 mt-4 rounded-[1.6rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 flex items-center justify-between">
         <div className="font-bold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 text-sm text-white shadow-lg shadow-cyan-500/30">KR</span>
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
           <div className="rounded-[1.6rem] border border-white/70 bg-white/85 p-2 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85 space-y-1">
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
  return (
    <div className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1 p-2 rounded-full border border-white/70 bg-white/80 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="ml-1 mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-400 text-xs font-bold text-white shadow-lg shadow-cyan-500/30">
        KR
      </div>
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
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(103,232,249,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(253,224,71,0.16),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_45%,_#f8fafc_100%)] transition-colors duration-300 font-sans selection:bg-blue-100 selection:text-blue-900 dark:bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.15),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.08),_transparent_18%),linear-gradient(180deg,_#020617_0%,_#020617_35%,_#020617_100%)] dark:selection:bg-blue-900 dark:selection:text-blue-100 ${darkMode ? 'dark' : ''}`}>
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:30px_30px] dark:bg-[linear-gradient(to_right,rgba(51,65,85,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.35)_1px,transparent_1px)]"></div>
        <div className="absolute left-[8%] top-10 h-[340px] w-[340px] rounded-full bg-cyan-300/25 blur-[120px] dark:bg-cyan-500/12"></div>
        <div className="absolute right-[10%] top-[20%] h-[260px] w-[260px] rounded-full bg-amber-200/30 blur-[120px] dark:bg-amber-400/10"></div>
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
              <div className="bg-white/80 dark:bg-slate-950/65 rounded-[2rem] p-8 border border-white/70 dark:border-white/10 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.5)] text-center relative overflow-hidden group hover-scale animate-slide-in-left backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-cyan-400/20 via-transparent to-emerald-300/15 dark:from-cyan-500/15 dark:to-emerald-400/10"></div>
                <div className="w-40 h-40 mx-auto bg-slate-100 dark:bg-slate-900 rounded-[1.5rem] mb-6 overflow-hidden relative shadow-inner border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-300 dark:text-slate-700">KR</div>
                    <img src={profile.image} alt={profile.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                <div className="relative">
                  <div className="mb-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                    Available for collaboration
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{profile.name}</h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{profile.role}</p>
                </div>

                <div className="relative mt-8 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Based In</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Colombo, Sri Lanka</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Focus</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">AI, Full Stack, IoT</p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="relative flex justify-center gap-3 my-8">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"><Linkedin size={18} /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"><Github size={18} /></a>
                  <button onClick={() => setDarkMode(!darkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-amber-900/30 dark:hover:text-amber-400 transition-all text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
                </div>

                <a href={`mailto:${profile.email}`} className="relative block w-full py-4 px-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-black rounded-2xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-200 dark:shadow-none">Contact Me</a>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT AREA --- */}
          <div className="lg:col-span-8 xl:col-span-9 min-h-[500px]">
             {children}
             
             {/* Bottom Navigation */}
             {/* <BottomNav /> */}

             {/* Footer */}
             <footer className="pt-16 pb-8 border-t border-slate-200/80 dark:border-slate-800 text-center mt-12 opacity-70">
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
  const routerBase = resolveRouterBase();

  return (
    <Router basename={routerBase}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/community" element={<Navigate to="/volunteering" replace />} />
          {navItems.map((item) => (
            <Route key={item.path} path={item.path} element={routeElements[item.path]} />
          ))}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
