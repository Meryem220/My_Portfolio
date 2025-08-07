import crocheetImg from '@/assets/images/crochet.jpg';
import drawingImg from '@/assets/images/eren_drawing.jpg';
import animationImg from '@/assets/images/animation.jpeg';
import swimmingImg from '@/assets/images/swimming.jpeg';
import hacktheboxImg from '@/assets/images/hackthebox.png';
import watchingImg from '@/assets/images/watching.jpeg';
import guitarImg from '@/assets/images/guitar.png';

export default function Hobbies() {
  const hobbies = [
    
    {
      name: "Drawing",
      description: "Sketching and painting to express ideas, emotions, and imagination—often inspired by books, characters, and quiet moments.",
      image: drawingImg
    },
    {
      name: "Crocheting",
      description: "Creating handmade items through crocheting...",
      image: crocheetImg  // Use imported image
    },
    {
      name: "3D Animation",
      description: "I enjoy experimenting with digital models and bringing characters to life.",
      image: animationImg
    },
    {
      name: "Reading",
      description: "Tech books, science fiction, and biographies to continuously learn and stay inspired.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Cooking",
      description: "I enjoy trying out new recipes and making tasty meals at home.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Hack The Box",
      description: "Solving real-world cybersecurity challenges to build ethical hacking skills.",
      image: hacktheboxImg
    },
    {
      name: "Watching Animation",
      description: "I love getting lost in imaginative worlds and vibrant storytelling.",
      image: watchingImg
    },
    {
      name: "Music",
      description: "I'm picking up guitar basics and enjoying the process of making music.",
      image: guitarImg
    },
    {
      name: "Travel",
      description: "Exploring new cultures, trying local foods, and getting inspiration from different places.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Swimming",
      description: "I just enjoy being in the water—it's peaceful and refreshing.",
      image: swimmingImg
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-vibrant-purple to-electric-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When I'm not coding, here's what keeps me inspired and energized
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl card-hover group">
              <img 
                src={hobby.image}
                alt={`${hobby.name} related image`}
                className="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold text-navy mb-2">{hobby.name}</h3>
              <p className="text-gray-600 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}