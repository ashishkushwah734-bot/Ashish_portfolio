export default function Projects() {
  const projects = [
    {
      name: "Kaal Dristhi",
      desc: "AI-based criminal network analysis platform utilizing complex graph pattern analysis and secure logging for SIH 2026.",
      tags: ["AI", "Graph Analysis", "React", "Python"]
    },
    {
      name: "JalDristi",
      desc: "AI-powered water quality mapping platform with computer vision colorimetric testing, AWS backend, and a React dashboard built for Hacksagon.",
      tags: ["Computer Vision", "React", "AWS"]
    },
    {
      name: "C.O.R.E. (Campus Operation & Routing Engine)",
      desc: "Campus navigation platform for MITS Gwalior incorporating pathfinding algorithms and an interactive 360-degree virtual tour.",
      tags: ["Web Dev", "Pathfinding", "Marzipano"]
    },
    {
      name: "Smart Crash Alert",
      desc: "IoT-based real-time crash detection system using an ESP32 and GPS/GSM modules, selected for the IEEE Conference.",
      tags: ["IoT", "ESP32", "Hardware"]
    }
  ]

  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-blue-400">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
              <h4 className="text-xl font-bold text-gray-100 mb-3">{proj.name}</h4>
              <p className="text-gray-400 mb-4 text-sm">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-xs font-semibold rounded-full text-emerald-300 border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
