export default function Home() {
    return (
      <>
        <section
            className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative overflow-hidden"
            style={{ backgroundImage: "url('/images/uci.jpg')" }}
            >

            {/* Hero content */}
            <div className="relative z-10 text-center px-4 sm:px-6">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                180 Degrees Consulting @ UCI
                </h1>
                <p className="text-base sm:text-lg mb-6 max-w-md mx-auto">
                Empowering students to drive social impact through real-world consulting projects.
                </p>
                <a
                href="/join"
                className="bg-green-600 text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-3 rounded hover:bg-green-700 transition"
                >
                Join Us
                </a>
            </div>
        </section>


        <main className="pt-20 px-6">
          <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Real Projects</h3>
              <p className="text-gray-600">
                Collaborate with nonprofits & startups to solve meaningful challenges.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Gain consulting, teamwork, and leadership experience.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="font-semibold text-xl mb-2">Global Network</h3>
              <p className="text-gray-600">
                Be part of the world’s largest university-based consultancy.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
  