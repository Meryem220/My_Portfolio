export default function Education() {
  const education = [
    {
      degree: "Software Engineering",
      school: "Karadeniz Technical University",
      period: "2021 - 2025",
      description: "Specialized in Cyber Security and Software Engineering. Graduated with honors, GPA: 3.75/4.0",
      color: "vibrant-purple"
    }/* ,
    {
      degree: "Bachelor of Software Engineering",
      school: "University of California, Berkeley",
      period: "2014 - 2018",
      description: "Focus on web technologies and database systems. Dean's List for 3 consecutive years.",
      color: "electric-blue"
    },
    {
      degree: "Full Stack Web Development",
      school: "FreeCodeCamp",
      period: "2017",
      description: "Comprehensive program covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      color: "emerald"
    } */
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full from-vibrant-purple to-electric-blue bg-[#878b8c54]"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                      <h3 className="text-xl font-bold text-navy mb-2">{item.degree}</h3>
                      <p className={`text-${item.color} font-medium mb-2`}>{item.school}</p>
                      <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}