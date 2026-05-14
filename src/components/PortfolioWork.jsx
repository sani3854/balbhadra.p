export default function PortfolioWork() {
  const projects = [
    {
      title: 'Farm Suraksha App',
      description:
        'Flutter-based agriculture management platform with farmer tracking, product management, and task automation.',
      tech: ['Flutter', 'Firebase', 'REST API'],
    },
    {
      title: 'Field Staff Tracking CRM',
      description:
        'SaaS CRM solution for field staff tracking, attendance, reporting, and live location updates.',
      tech: ['Flutter', 'Laravel', 'MySQL'],
    },
    {
      title: 'Bela Nails Art Website',
      description:
        'Business portfolio website with SEO optimization and online appointment support.',
      tech: ['React', 'Tailwind CSS'],
    },
  ];

  const skills = [
    'Flutter',
    'Firebase',
    'Laravel',
    'REST API',
    'UI/UX',
    'Google Maps',
    'Push Notification',
    'iOS & Android',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <p className="uppercase tracking-[0.3em] text-sm text-green-400 mb-4">
              Flutter Developer
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-green-400">Balbhadrasinh</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              I build high-performance mobile applications, SaaS platforms,
              and modern business solutions using Flutter, Firebase, and
              scalable backend systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                View Projects
              </button>

              <button className="btn-secondary">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative w-80 h-80 rounded-[40px] bg-gradient-to-br from-green-500 to-blue-600 p-1 shadow-2xl shadow-green-500/30">
              <div className="w-full h-full rounded-[38px] bg-black flex items-center justify-center text-center p-8">
                <div>
                  <div className="text-7xl font-black text-green-400 mb-2">
                    BP
                  </div>
                  <p className="text-gray-300 text-lg">
                    Flutter & Mobile App Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I specialize in Flutter app development with experience in
              Android, iOS, Firebase integration, API development, local
              notifications, video/image handling, and scalable SaaS systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I focus on creating fast, clean, and user-friendly applications
              for businesses and startups.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center hover:border-green-400 hover:-translate-y-1 transition"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-subtitle mb-2">
                Portfolio
              </p>
              <h2 className="section-title">Featured Work</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-black/40 p-6 hover:border-green-400 transition duration-300 hover:-translate-y-2"
              >
                <div className="h-48 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 mb-6 flex items-center justify-center">
                  <span className="text-5xl font-black text-green-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="section-subtitle mb-4">
          Contact
        </p>

        <h2 className="section-title mb-6">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Available for Flutter app development, SaaS platforms, and custom
          business software projects.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="btn-large bg-green-500 hover:bg-green-400 transition text-black shadow-lg shadow-green-500/30">
            Email Me
          </button>

          <button className="btn-large border border-white/20 hover:border-green-400 hover:text-green-400 transition">
            WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2026 Balbhadrasinh. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Vite, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}