import { useEffect, useRef, useState } from "react";
import { Code, Server, Database, Cloud } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Kali Linux",
      description: "Bash, Command Line",
      icon: Code,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Languages",
      description: "C, Python, Javascript, PHP, Java",
      icon: Server,
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Database",
      description: "MSSQL,MongoDB, MySQL",
      icon: Database,
      gradient: "from-orange-500 to-purple-600"
    },
    {
      title: "3D Animation",
      description: "Maya, Belender",
      icon: Cloud,
      gradient: "from-purple-600 to-green-500"
    }/* ,
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD",
      icon: Cloud,
      gradient: "from-vibrant-purple to-emerald"
    } */
  ];

  const skills = [
    { name: "Python", level: 80, gradient: "from-blue-500 to-purple-600" },
    { name: "C", level: 85, gradient: "from-green-500 to-blue-500" },
    { name: "MSSQL", level: 82, gradient: "from-orange-500 to-purple-600" },
    { name: "Maya", level: 80, gradient: "from-purple-600 to-green-500" }
  ];
  /* const skills = [
    { name: "JavaScript/TypeScript", level: 95, gradient: "from-electric-blue to-vibrant-purple" },
    { name: "React/Vue.js", level: 90, gradient: "from-emerald to-electric-blue" },
    { name: "Node.js/Backend", level: 85, gradient: "from-warm-orange to-vibrant-purple" },
    { name: "Cloud Technologies", level: 80, gradient: "from-vibrant-purple to-emerald" }
  ]; */

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl card-hover">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`bg-gradient-to-r ${skill.gradient} h-3 rounded-full skill-bar transition-all duration-1000 ease-in-out`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}