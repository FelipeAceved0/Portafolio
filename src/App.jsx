import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Terminal, Globe, Mail, ArrowUpRight, CheckCircle2, Layers, Cpu, Server, Workflow, Loader2 } from 'lucide-react';

// Componente para animar elementos al hacer scroll o al entrar en pantalla
function FadeInOnScroll({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax del fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carga de repositorios de GitHub
  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/FelipeAceved0/repos?sort=updated&per_page=10');
        
        if (!response.ok) {
          throw new Error('No se pudieron obtener los repositorios.');
        }

        const data = await response.json();
        
        const reposFormatted = data
          .filter(repo => !repo.fork && repo.name.toLowerCase() !== 'felipeaceved0')
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || "Proyecto de desarrollo de software subido a GitHub.",
            tags: repo.language ? [repo.language] : ["Software"],
            github: repo.html_url,
            updatedAt: new Date(repo.updated_at).toLocaleDateString()
          }));

        setProjects(reposFormatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubRepos();
  }, []);

  const skills = {
    backend: ["C# / .NET Core", "PHP", "Node.js", "Arquitectura REST", "Lógica de Software"],
    frontend: ["JavaScript (ES6+)", "React", "HTML5 & CSS3", "Tailwind CSS", "AJAX"],
    database: ["MySQL", "Bases de Datos Relacionales", "Entity Framework Core", "Modelado de Datos"],
    tools: ["Git / GitHub", "XAMPP", "Postman", "Vite"]
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-gray-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Fondo Parallax Dinámico */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        />
        <div 
          className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute top-2/3 left-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-3xl transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        />
      </div>

      {/* Capa principal */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <header className="fixed top-0 w-full bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer">
              <Terminal className="text-blue-500 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" /> Felipe Acevedo
            </span>
            <nav className="flex gap-6 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">Perfil</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Stack Técnico</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-28">
          
          {/* Hero Section */}
          <section className="space-y-6">
            <FadeInOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Desarrollador Junior Disponibilidad Inmediata
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={250}>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Desarrollo de Software & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                  Aplicaciones Web Robustas.
                </span>
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Egresado de Informática enfocado en el <strong className="text-gray-200">desarrollo de software integral</strong>. Construyo soluciones funcionales abordando desde la lógica del servidor y modelado de bases de datos relacionales hasta interfaces de usuario dinámicas.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={550}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20">
                  Ver Software Producido <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#contact" className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium border border-gray-700 transition-all duration-300 hover:scale-105">
                  Contactar
                </a>
              </div>
            </FadeInOnScroll>
          </section>

          {/* Sobre mí */}
          <section id="about" className="space-y-6 border-t border-gray-800/80 pt-16">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="text-blue-500 w-6 h-6" /> Enfoque Profesional
              </h2>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed">
                <FadeInOnScroll delay={150}>
                  <p>
                    Mi perfil trasciende la maquetación web tradicional: me especializo en la <strong className="text-gray-200">resolución de problemas mediante programación estructurada y orientada a objetos</strong>. Diseño programas y módulos capaces de gestionar flujos de datos complejos y comunicarse con sistemas de almacenamiento relacional.
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll delay={300}>
                  <p>
                    Tengo experiencia práctica integrando lenguajes de servidor como <strong className="text-gray-200">PHP, Node.js y C#</strong> con bases de datos relacionales (<strong className="text-gray-200">MySQL</strong>), garantizando la integridad de la información y entregando interfaces limpias en <strong className="text-gray-200">JavaScript, HTML5, CSS3 y React</strong>.
                  </p>
                </FadeInOnScroll>
              </div>

              <FadeInOnScroll delay={400}>
                <div className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                  <h3 className="font-semibold text-white text-sm">Competencias Clave</h3>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Lógica de programación sólida</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Modelado de datos relacionales</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Integración Frontend & Backend</li>
                  </ul>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Stack Técnico */}
          <section id="skills" className="space-y-6 border-t border-gray-800/80 pt-16">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layers className="text-blue-500 w-6 h-6" /> Tecnologías & Herramientas
              </h2>
            </FadeInOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FadeInOnScroll delay={100}>
                <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-3 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <Server className="w-4 h-4" /> Backend & Lógica
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map(s => <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300">{s}</span>)}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={200}>
                <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-3 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <Globe className="w-4 h-4" /> Frontend
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(s => <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300">{s}</span>)}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={300}>
                <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-3 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                    <Database className="w-4 h-4" /> Bases de Datos
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map(s => <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300">{s}</span>)}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800 space-y-3 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Workflow className="w-4 h-4" /> Herramientas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map(s => <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300">{s}</span>)}
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Proyectos Automatizados con GitHub */}
          <section id="projects" className="space-y-6 border-t border-gray-800/80 pt-16">
            <FadeInOnScroll>
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Code2 className="text-blue-500 w-6 h-6" /> Proyectos en GitHub
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">Sincronizado automáticamente con mi cuenta pública de GitHub.</p>
                </div>
              </div>
            </FadeInOnScroll>

            {loading ? (
              <div className="p-12 text-center flex flex-col items-center justify-center gap-3 text-gray-400">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                <p className="text-sm">Obteniendo repositorios de GitHub...</p>
              </div>
            ) : error ? (
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                Ocurrió un error al cargar los repositorios: {error}
              </div>
            ) : projects.length === 0 ? (
              <p className="text-gray-400 text-sm">No se encontraron repositorios públicos.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, index) => (
                  <FadeInOnScroll key={p.id} delay={index * 150}>
                    <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between space-y-4 h-full">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="text-lg font-bold text-white capitalize">{p.title.replace(/-/g, ' ')}</h3>
                          <a href={p.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-105 flex items-center gap-1 text-xs font-medium bg-gray-800 px-2.5 py-1 rounded border border-gray-700 shrink-0">
                            <Globe className="w-3.5 h-3.5" /> Ver Repo
                          </a>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{p.description}</p>
                      </div>

                      <div className="pt-2 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          {p.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[11px] font-medium border border-blue-500/20">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span>Actualizado: {p.updatedAt}</span>
                      </div>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            )}
          </section>

          {/* Contacto */}
          <section id="contact" className="space-y-6 border-t border-gray-800/80 pt-16 text-center">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-white">¿Buscas un desarrollador para tu equipo?</h2>
              <p className="text-gray-400 max-w-md mx-auto text-sm mt-2">
                Estoy disponible para integrarme a proyectos de desarrollo, aportar resolución de problemas y continuar creciendo profesionalmente.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href="https://github.com/FelipeAceved0" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/felipe-ariel-acevedo-contreras-948410369" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" /> LinkedIn
                </a>
                <a 
                  href="mailto:felipeacevedo954@gmail.com" 
                  className="px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> felipeacevedo954@gmail.com
                </a>
              </div>
            </FadeInOnScroll>
          </section>
        </main>

        <footer className="border-t border-gray-800/80 py-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Felipe Acevedo — Portafolio de Desarrollo
        </footer>
      </div>
    </div>
  );
}
