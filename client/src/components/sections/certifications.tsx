import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "Siber Güvenlik Programı",
      issuer: "Ölçsan50",
      description: "Siber güvenlik programına kalıtım sertifikası ",
      validity: "Valid",
      color: "electric-blue",
      icon: "🏆"
    },
    {
      name: "Savunma Sanayii 401",
      issuer: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı",
      description: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile Yükseköğretim Kurulu tarafından imzalanan iş birliği protokolü çerçevesinde hazırlanan Savunma Sanayii 401 dersine katılmış, yapılan sınavlarda başarı göstererek bu sertifikayı almaya hak kazanmıştır.",
      validity: "Valid",
      color: "electric-blue",
      icon: "🏆"
    },
    {
      name: "Secure The Future",
      issuer: "Microsoft",
      description: "Cyber Security Certificate",
      validity: "Valid",
      color: "electric-blue",
      icon: "🏆"
    }
    
    /* {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      description: "Professional level certification for designing distributed systems on AWS.",
      validity: "Valid until 2025",
      color: "electric-blue",
      icon: "🏆"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud Platform",
      description: "Professional Cloud Developer certification for GCP technologies.",
      validity: "Valid until 2024",
      color: "emerald",
      icon: "🏆"
    },
    {
      name: "Azure Developer Associate",
      issuer: "Microsoft Azure",
      description: "Expertise in developing and maintaining cloud applications on Azure.",
      validity: "Valid until 2025",
      color: "vibrant-purple",
      icon: "🏆"
    },
    {
      name: "React Developer",
      issuer: "Meta (Facebook)",
      description: "Advanced React development skills and best practices certification.",
      validity: "Completed 2023",
      color: "warm-orange",
      icon: "🏆"
    },
    {
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      description: "Proficiency in MongoDB database design and development.",
      validity: "Completed 2022",
      color: "electric-blue",
      icon: "🏆"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      description: "Security+ certification covering cybersecurity best practices.",
      validity: "Valid until 2026",
      color: "vibrant-purple",
      icon: "🛡️"
    } */
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className={`bg-gradient-to-br from-${cert.color}/5 to-${cert.color}/10 p-6 rounded-2xl border border-${cert.color}/20 card-hover`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${cert.color}/20 rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-xl">{cert.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{cert.name}</h3>
                  <p className="text-gray-500 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
              <div className="flex justify-between items-center">
                <span className={`bg-${cert.color}/10 text-${cert.color} px-3 py-1 rounded-full text-xs`}>
                  {cert.validity}
                </span>
                <Award className={`text-${cert.color}`} size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}