import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Intern Software Engineer",
      company: "Perapole",
      location: "Remote",
      period: "2024",
      color: "warm-orange",
      achievements: [
        "Initiated a hands-on project to learn machine learning, 7Flask, and Python by building an AI chatbot for product Q&A",
        "Designed and deployed a Flask-based AI chatbot capable of answering product-related queries by parsing site descriptions using NLP techniques",
        "Trained models to understand user queries and extract relevant details from product descriptions scraped from websites",

      ],
      tech: ["Web Scraping", "Python", "HTML", "ChatGPT"]
    },
    {
      title: "Intern Software Engineer",
      company: "ASKI (Ankara Su ve Kanalizasyon Idare)",
      location: "Ankara, Turkey",
      period: "2024",
      color: "electric-blue",
      achievements: [
        "Engineered secure Flask-based systems with encrypted session management and real-time log visualization for threat monitoring",
        "Simulated malware behavior (e.g., keyloggers, benign worms) to study propagation and develop countermeasures",
        "Documented findings and remediation strategies to support continuous security improvement and team knowledge sharing",
      ],
      tech: ["Kali Linux", "Python", "HackTheBox", "Metaspolit"]
    },
    {
      title: "Intern Software Engineer",
      company: "ÖLÇSAN50",
      location: "Remote",
      period: "2024",
      color: "emerald",
      achievements: [
        "Conducted penetration tests using Kali Linux and Metasploit to identify vulnerabilities across web applications and network infrastructure",
        "Performed port scans and service enumeration to map attack surfaces and assess exposure risks",
        "Exploited and mitigated common web vulnerabilities including XSS and SQL injection, strengthening application defenses",
      ],
      tech: ["Kali Linux", "Python", "HackTheBox", "Metaspolit"]
    },
    {
      title: "Intern Software Engineer",
      company: "Prestij Bilgi Sistemleri",
      location: "Remote",
      period: "2024",
      color: "electric-blue",
      achievements: [
        "Built responsive web applications using React and Vue.js, increasing user engagement by 35%",
        "Optimized application performance, reducing load times by 50% through code splitting and lazy loading",
        "Integrated third-party APIs and payment gateways for seamless user experiences",
        "Collaborated in agile environment with cross-functional teams to deliver features on time"
      ],
      tech: ["JavaScript", "MySQL"]
    },
    {
      title: "Intern Software Engineer",
      company: "Akpınar Bilişim",
      location: "Bursa , Turkey",
      period: "2023",
      color: "warm-orange",
      achievements: [
        "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in code reviews and learned industry best practices from senior developers"
      ],
      tech: ["JavaScript", "PHP", "MySQL", "HTML","CSS"]
    }
    /* {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2021 - Present",
      color: "emerald",
      achievements: [
        "Led development of microservices architecture serving 1M+ users, resulting in 40% improved performance",
        "Mentored 5 junior developers and established coding standards and best practices for the team",
        "Implemented CI/CD pipelines reducing deployment time by 60% and improving code quality",
        "Collaborated with product and design teams to deliver user-centric features and experiences"
      ],
      tech: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2021",
      color: "electric-blue",
      achievements: [
        "Built responsive web applications using React and Vue.js, increasing user engagement by 35%",
        "Optimized application performance, reducing load times by 50% through code splitting and lazy loading",
        "Integrated third-party APIs and payment gateways for seamless user experiences",
        "Collaborated in agile environment with cross-functional teams to deliver features on time"
      ],
      tech: ["Vue.js", "TypeScript", "Webpack", "Jest"]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      period: "2018 - 2019",
      color: "warm-orange",
      achievements: [
        "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Assisted in database design and optimization for improved application performance",
        "Participated in code reviews and learned industry best practices from senior developers"
      ],
      tech: ["JavaScript", "PHP", "MySQL", "WordPress"]
    } */
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{exp.title}</h3>
                  <p className={`text-${exp.color} font-semibold text-lg`}>{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className={`bg-${exp.color}/10 text-${exp.color} px-4 py-2 rounded-full font-medium`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <CheckCircle className={`text-${exp.color} mt-1 mr-3 flex-shrink-0`} size={16} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`bg-${exp.color}/10 text-${exp.color} px-3 py-1 rounded-full text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}