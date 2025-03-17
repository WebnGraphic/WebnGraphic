import { Award, Clock, ThumbsUp, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="md:py-20 py-12 bg-Mbg">
      <div className="max-w-7xl md:px-12 px-5 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
            Why WebnGraphic for Your Next Project?
          </h2>
          <p className="text-slate-300 dark:text-slate-300 text-lg">
            At WebnGraphic, we combine creativity, expertise, and passion to
            bring your digital vision to life. From stunning web designs to
            captivating graphic creations, we put research, dedication, and a
            commitment to innovation at the core of everything we do. Our team
            is driven by a passion for perfection and quality, ensuring that
            your project stands out and exceeds expectations. Whether
            you&apos;re launching a brand-new website or rebranding your
            business, we make your concepts come to life with visually engaging
            and functional designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experience Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                5+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center font-medium">
                Year Of Experience
              </p>
            </div>
          </div>

          {/* Projects Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                600+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center font-medium">
                Awarded Projects Through Out Time
              </p>
            </div>
          </div>

          {/* Experts Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                80+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center font-medium">
                Experts Of Technology
              </p>
            </div>
          </div>

          {/* Clients Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                500+
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center font-medium">
                Satisfied Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
