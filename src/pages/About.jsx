import CompanyLogos from '../components/CompanyLogos/CompanyLogos';

export default function About() {
  return (
    <main className="pt-20 px-6 space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center max-w-2xl mx-auto text-gray-700">
          We’re a student-led consulting organization that connects bright minds to real-world projects.
        </p>
      </section>
      <CompanyLogos />
    </main>
  );
}
