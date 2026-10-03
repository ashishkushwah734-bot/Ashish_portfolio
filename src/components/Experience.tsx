export default function Experience() {
  const experiences = [
    {
      role: "Founder & President",
      company: "Machine Learning Research Club, MITS",
      date: "Jan 2026 – Present",
      desc: "Spearheaded the campus ML Research Club. Architected the official web portal and led AI-focused workshops."
    },
    {
      role: "Open Source Contributor",
      company: "GSSoC 2026 (AI & Agents Track)",
      date: "May 2026 – Present",
      desc: "Developing and optimizing open-source software solutions, collaborating with global maintainers."
    },
    {
      role: "Undergraduate Systems Researcher",
      company: "MITS Gwalior",
      date: "Oct 2025 – Present",
      desc: "Engineering an AI-driven, kernel-level network engine utilizing eBPF, XDP, and Clang/LLVM for wire-speed DDoS mitigation."
    }
  ]

  return (
    <section className="w-full py-20 px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-emerald-400">Experience & Leadership</h3>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-gray-100">{exp.role}</h4>
              <p className="text-blue-400 font-semibold mb-2">{exp.company} | <span className="text-gray-400 font-normal">{exp.date}</span></p>
              <p className="text-gray-300">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
