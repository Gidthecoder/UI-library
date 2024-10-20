import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-2">
        <h1 className="font-bold text-center text-lg text-slate-700 mb-2">UI Library</h1>

          <div className="w-full lg:w-[400px] p-1.5 mx-auto lg:border lg:border-slate-500 rounded-lg">
            <Link href='/linkedin/posts'>
              <img src='/linkedin/linkedin_post.png'  className="w-full h-[400px] object-cover"/>
              <p className="font-bold text-center text-base text-slate-700 leading-6">Linkedin posts</p>
            </Link>
            
          </div>

     
    </main>
  );
}