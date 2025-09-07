import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Globe, BookOpen, ChevronDown, Menu, X, Github, Award, Cpu, Wifi, Code, Users, Briefcase, GraduationCap, FileText, Send, Calendar, ExternalLink, Brain, Rocket, Heart, Book, Leaf, Bot, Egg, Search, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectPage, setProjectPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'publications', 'awards', 'teaching', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'awards', label: 'Awards' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    // Page 1
    { title: "IoT LPG Cylinder Tracking System", description: "Real-time monitoring and tracking system for LPG cylinders using IoT sensors and cloud connectivity.", tech: ["ESP32", "MQTT", "Firebase", "React"], icon: <Wifi className="w-6 h-6" /> },
    { title: "Health Monitoring System", description: "Comprehensive health monitoring solution with real-time vital signs tracking and alert systems.", tech: ["Arduino", "Sensors", "Python", "ML"], icon: <Heart className="w-6 h-6" /> },
    { title: "Delivery Robot (ROS-based)", description: "Autonomous delivery robot using ROS for navigation and obstacle avoidance.", tech: ["ROS", "Python", "LIDAR", "Computer Vision"], icon: <Rocket className="w-6 h-6" /> },
    { title: "AI-based Vehicle Movement Detection", description: "Computer vision system for real-time vehicle detection and movement analysis.", tech: ["Python", "OpenCV", "TensorFlow", "YOLO"], icon: <Brain className="w-6 h-6" /> },
    { title: "Biometric Attendance System", description: "Fingerprint-based attendance system with cloud synchronization.", tech: ["ESP8266", "Fingerprint Sensor", "MySQL", "PHP"], icon: <Users className="w-6 h-6" /> },
    { title: "IoT Delivery Drone (Peon)", description: "Autonomous drone system for last-mile delivery with IoT integration.", tech: ["Pixhawk", "ArduPilot", "MQTT", "GPS"], icon: <Cpu className="w-6 h-6" /> },
    // Page 2
    { title: "Green Roof Monitoring System", description: "IoT system for environmental data tracking on green roofs.", tech: ["ESP32", "AWS", "FreeRTOS", "MQTT"], icon: <Leaf className="w-6 h-6" /> },
    { title: "Street Banner Controller", description: "Energy prediction system for street banners using machine learning.", tech: ["ESP32", "AWS", "PCA", "ML"], icon: <Cpu className="w-6 h-6" /> },
    { title: "EduBot", description: "An educational robot designed to teach kids basics of robotics and programming.", tech: ["ATMega328P", "Proximity Sensors"], icon: <Bot className="w-6 h-6" /> },
    { title: "Smart Egg Incubator", description: "Fully automated egg incubator with precise temperature and humidity control.", tech: ["Arduino Uno", "Sensors", "PID"], icon: <Egg className="w-6 h-6" /> },
    { title: "Swarm Patient Assistant Robots", description: "A system of cooperative robots for patient assistance in hospitals.", tech: ["IoT", "RFID", "SLAM", "ROS"], icon: <Users className="w-6 h-6" /> },
    { title: "Lost and Found BD", description: "A web and mobile platform to help people find lost items in Bangladesh.", tech: ["HTML", "PHP", "MySQL", "Android"], icon: <Search className="w-6 h-6" /> }
  ];

  const publications = [
    // IMPORTANT: Replace '#' with the actual link to your publication
    { title: "Content-based health recommender system for ICU patients", venue: "Springer", year: "2019", type: "Book Chapter", authors: "Neloy, A. A., Oshman, M. S., Islam, M., Hossain, M., & Zahir, Z. B.", link: "https://link.springer.com/chapter/10.1007/978-3-030-33709-4_20" },
    { title: "Web and Mobile Application Based Missing Query Platform (Lost and Found BD)", venue: "IEEE IEMCON", year: "2021", type: "Conference", authors: "Hossain, M. J., Bari, M. A., & Khan, M. M.", link: "https://ieeexplore.ieee.org/abstract/document/9623081" },
    { title: "Development of Smart Egg Incubator", venue: "IEEE UEMCON", year: "2021", type: "Conference", authors: "Bari, M. A., Hossain, M. J., & Khan, M. M.", link: "https://ieeexplore.ieee.org/abstract/document/9666653" },
    { title: "Development of an IoT Based Health Monitoring System for e-Health", venue: "CCWC", year: "2022", type: "Conference", authors: "Hossain, M. J., Bari, M. A., & Khan, M. M.", link: "https://ieeexplore.ieee.org/abstract/document/9720825/" }
  ];

  const awards = [
      { title: "Winner of Robo Combat", detail: "EshoRobotBanai, Organized by Channel I, 2019" },
      { title: "Winner of Megabots Clash", detail: "Technovation, Organized by NSU ACM SC, 2018" },
      { title: "Winner of Robo Riot", detail: "Mecceleration, Organized by Dept. of MCE, IUT, 2018" },
      { title: "1st Runner Up", detail: "Final-Year Capstone Project, Innovation Challenge, Season 6, 2018" },
      { title: "6th Position", detail: "Indian Rover Challenge (IRC), Organized by Manipal Academy of Higher Education" },
      { title: "Runners Up of Robo Riot", detail: "Mecceleration, Organized by Dept. of MCE, IUT, 2017" },
      { title: "Runners Up of Robo Fight", detail: "Eon: Spectral Shift ‘17 (RUMC)" },
      { title: "Runners Up of Robo Wrestling", detail: "BTI Arena 2017 (NSU)" },
      { title: "Runner up", detail: "IEEE day Hackathon 2017" },
  ];

  const skills = [
    { category: "Microcontrollers", items: ["AVR", "ESP32", "STM32", "Arduino", "Raspberry Pi"] },
    { category: "IoT Protocols", items: ["MQTT", "LoRaWAN", "CoAP", "HTTP/HTTPS", "WebSocket"] },
    { category: "Programming", items: ["C/C++", "Python", "JavaScript", "MATLAB", "SQL"] },
    { category: "Embedded Systems", items: ["FreeRTOS", "Embedded Linux", "I2C/SPI", "UART", "PWM"] },
    { category: "Tools & Platforms", items: ["ROS", "3D Printing", "PCB Design", "Git", "Docker"] },
    { category: "Cloud & Data", items: ["AWS IoT", "Firebase", "ThingSpeak", "Node-RED", "Grafana"] }
  ];

  const totalProjectPages = Math.ceil(projects.length / 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Md. Julhas Hossain
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a href="/Md_Julhas_Hossain_CV.pdf" download className="text-sm font-medium px-4 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400/10 transition-colors">
                Download CV
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeSection === item.id ? 'text-cyan-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a href="/cv.pdf" download className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-400 bg-gray-800/50 rounded-md hover:bg-gray-800 mt-2">
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Md. Julhas Hossain
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            IoT Researcher & Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Specializing in Time-Sensitive IoT, Embedded Systems, Smart Cities, 
            Autonomous Vehicles, and Smart Healthcare
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:julhas78@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/julhashossain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=98uZGTgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
              <BookOpen className="w-5 h-5" />
              Google Scholar
            </a>
          </div>
          <div className="flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img 
                src="julhas.jpg" 
                alt="Md. Julhas Hossain - IoT and Embedded Systems Researcher" // <-- ADD THIS"
                className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Research & Career Objective</h3>
              <p className="text-gray-300 mb-6">
                Passionate about advancing low-latency communication protocols, intelligent scheduling algorithms, 
                and real-time IoT systems. My work focuses on developing innovative, scalable, and secure solutions 
                for time-sensitive applications in smart cities, autonomous vehicles, robotics, and healthcare. 
                I aim to integrate robotics and embedded systems with emerging IoT and edge computing technologies, 
                enabling seamless interoperability, energy efficiency, and high reliability in mission-critical environments.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Sydney, NSW, Australia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">julhas78@gmail.com</span>
                </div>
                <div className="mt-6">
                  <a href="/cv.pdf" download className="flex items-center justify-center md:justify-start gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full transition-colors w-full md:w-auto">
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="text-lg font-semibold">Master of Information Technology</h4>
                  <p className="text-gray-400">Internet of Things Specialization</p>
                  <p className="text-gray-500">Macquarie University • 2023 - 2025</p>
                </div>
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="text-lg font-semibold">B.Sc. in Computer Science & Engineering</h4>
                  <p className="text-gray-400">Major in Artificial Intelligence</p>
                  <p className="text-gray-500">North South University • 2015 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">IoT Research Intern</h3>
                  <p className="text-lg text-gray-300">Dryad Networks</p>
                  <p className="text-gray-500">2024 - Present</p>
                </div>
                <Briefcase className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="mt-4 text-gray-400">
                Working on cutting-edge IoT solutions for wildfire detection and environmental monitoring
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Senior IoT Engineer</h3>
                  <p className="text-lg text-gray-300">Meghna Group</p>
                  <p className="text-gray-500">2022 - 2023</p>
                </div>
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="mt-4 text-gray-400">
                Led IoT infrastructure development for industrial automation and smart factory initiatives
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">IoT Developer</h3>
                  <p className="text-lg text-gray-300">Creative IT Institute</p>
                  <p className="text-gray-500">2019 - 2022</p>
                </div>
                <Code className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="mt-4 text-gray-400">
                Developed IoT solutions and conducted training programs for embedded systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-center w-full">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Major Projects
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(projectPage * 6, (projectPage + 1) * 6).map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-400/20 rounded-lg text-cyan-400">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setProjectPage(p => Math.max(0, p - 1))}
              disabled={projectPage === 0}
              className="p-2 rounded-full bg-gray-700 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-400">
              Page {projectPage + 1} of {totalProjectPages}
            </span>
            <button
              onClick={() => setProjectPage(p => Math.min(totalProjectPages - 1, p + 1))}
              disabled={projectPage === totalProjectPages - 1}
              className="p-2 rounded-full bg-gray-700 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 border-b-2 border-cyan-400/30 pb-2">Book Chapters</h3>
              {publications.filter(p => p.type === 'Book Chapter').map((pub, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors mb-4 flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{pub.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{pub.authors}</p>
                    <p className="text-gray-500 text-sm mt-2">{pub.venue} • {pub.year}</p>
                  </div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="ml-4 p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 border-b-2 border-cyan-400/30 pb-2">Conferences</h3>
              {publications.filter(p => p.type === 'Conference').map((pub, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors mb-4 flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{pub.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{pub.authors}</p>
                    <p className="text-gray-500 text-sm mt-2">{pub.venue} • {pub.year}</p>
                  </div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="ml-4 p-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Awards & Achievements
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all">
                <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                    <h3 className="text-lg font-semibold">{award.title}</h3>
                    <p className="text-gray-400 text-sm">{award.detail}</p>
                    </div>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Teaching & Mentorship
            </span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-12 h-12 text-cyan-400" />
              <div>
                <h3 className="text-2xl font-semibold">350+ Students Taught</h3>
                <p className="text-gray-400">IoT and Robotics Courses</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Passionate about sharing knowledge and inspiring the next generation of IoT engineers and researchers. 
              Conducted comprehensive courses covering embedded systems, IoT protocols, robotics, and real-world project implementation.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-400">Courses Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">350+</div>
                <div className="text-gray-400">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-gray-400">Projects Supervised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <p className="text-center text-gray-300 mb-8">
              I'm always interested in collaborating on innovative IoT projects and research opportunities. 
              Feel free to reach out!
            </p>
            <div className="flex justify-center mb-8">
               <a href="mailto:julhas78@gmail.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors w-full md:w-auto">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>julhas78@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/julhashossain/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700/50 hover:bg-cyan-400/20 rounded-full transition-colors">
                <Linkedin className="w-6 h-6 text-cyan-400" />
              </a>
              <a href="https://scholar.google.com/citations?user=98uZGTgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700/50 hover:bg-cyan-400/20 rounded-full transition-colors">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </a>
              <a href="https://github.com/julhas-hossain" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700/50 hover:bg-cyan-400/20 rounded-full transition-colors">
                <Github className="w-6 h-6 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="text-center text-gray-500">
          <p>© 2025 Md. Julhas Hossain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;