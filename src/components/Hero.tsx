export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-8 w-full max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        Ashish Kushwah
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
        AI/ML Enthusiast & Systems Developer
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
        Computer Science and Design student at MITS Gwalior. Founder of the ML Research Club. 
        Passionate about bridging low-level systems engineering (eBPF/XDP) with modern web architectures and intelligent AI models.
      </p>
    </section>
  )
}
