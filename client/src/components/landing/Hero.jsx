import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            🚀 Manage Work Smarter
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Collaborate

            <span className="text-blue-600">
              {" "}Without Chaos.
            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-8">

            TaskFlow helps teams organize projects,
            manage tasks, track progress,
            and collaborate in real-time.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">

              Get Started

            </button>

            <button className="border px-8 py-4 rounded-xl">

              Learn More

            </button>

          </div>

        </div>

        <div>

          <img
            src={heroImg}
            alt="Hero"
            className="w-full"
          />

        </div>

      </div>

    </section>
  );
}