import Header from '@/app/components/Header';
import Card from '@/app/components/Card';
import Footer from '@/app/components/Footer';

export default function Home() {
  const projects = [
    {
      href: '/linkedin',
      imageSrc: '/linkedin/linkedin_post.png',
      alt: 'linkedin post user interface',
      title: 'LinkedIn UI'
    },
    {
      href: '/lavacoin',
      imageSrc: '/volcano/coin.png',
      alt: 'LavaCoin user interface',
      title: 'LavaCoin UI'
    }
  ];

  return (
    <main className="p-2 min-h-screen relative pb-16 2xl:w-[1000px] mx-auto">
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-2 lg:mt-4">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
      <Footer/>
    </main>
  );
}