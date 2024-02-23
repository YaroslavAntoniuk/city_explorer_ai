import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-slate-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">CityExplorer</h1>
          <p className="py-6 text-lg text-slate-950 leading-loose">
            CityExplorer: Effortlessly create and explore cities. Input city and
            country names, let ChatGPT generate intriguing details. Your gateway
            to an imaginative world of city discovery
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
