export default function Home() {
    return (
      <main className="pt-20 px-6">

        <section
        className="bg-cover bg-center bg-no-repeat text-white py-32 px-6"
        style={{ backgroundImage: "url('/images/uci.jpg')" }}
        >
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            180 Degrees Consulting @ UCI
            </h1>
            <p className="text-lg mb-6">
            Empowering students to drive social impact through real-world consulting projects.
            </p>
            <a
            href="/join"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
            Join Us
            </a>
        </div>
        </section>
  
        <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Real Projects</h3>
            <p className="text-gray-600">Collaborate with nonprofits & startups to solve meaningful challenges.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Professional Growth</h3>
            <p className="text-gray-600">Gain consulting, teamwork, and leadership experience.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Global Network</h3>
            <p className="text-gray-600">Be part of the world’s largest university-based consultancy.</p>
          </div>
        </section>
      </main>
    );
  }
  