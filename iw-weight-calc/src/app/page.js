import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-8">Iron Web</h1>
      <h1 className="text-4xl font-bold mb-8">Powerlifting tools</h1>
      <Link legacyBehavior href="/barweightcalc">
        <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">
          Bar Weight Calculator App
        </a>
      </Link>
      <div>
        <br />
      </div>
      <Link legacyBehavior href="/weightconversion">
        <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">
          Weight Conversion App
        </a>
      </Link>
      <div>
        <br />
      </div>
      <Link legacyBehavior href="/weeksoutcalc">
        <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">
          Calculate weeks out
        </a>
      </Link>
    </div>
  );
};

export default Home;