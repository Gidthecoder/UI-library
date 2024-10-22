import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-2">
        <h1 className="font-bold text-center text-lg text-slate-700 mb-2">UI Library</h1>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <div className="w-full lg:w-[400px] p-1.5 mb-5 lg:mb-0 lg:border lg:border-slate-500 rounded-lg">
            <Link href='/linkedin/posts'>
              <img alt='linkedin post user interface' src='/linkedin/linkedin_post.png'  className="w-full h-[400px] object-cover"/>
              <p className="font-bold text-center text-base text-slate-700 leading-6">Linkedin posts</p>
            </Link>
          </div>

          <div className="w-full lg:w-[400px] p-1.5 mb-5 lg:mb-0 lg:border lg:border-slate-500 rounded-lg">
            <Link href='/lavacoin'>
              <img alt='LavaCoin user interface' src='/volcano/lavacoin_hero.png'  className="w-full h-[400px] object-cover"/>
              <p className="font-bold text-center text-base text-slate-700 leading-6">LavaCoin</p>
            </Link>
          </div>
        </div>

        <div className='text-center fixed bottom-0 w-full'>
          <a href='https://x.com/GidtheCoder' target='_blank' className='text-blue-700 text-lg underline'>Built by @Gidthecoder</a>
        </div>
    </main>
  );
}