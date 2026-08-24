import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Terminal, Globe, Mail, ArrowUpRight, CheckCircle2, Layers, Cpu, Server, Workflow, Briefcase, GraduationCap, Network } from 'lucide-react';

// Icono de GitHub personalizado en SVG
function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// Icono de LinkedIn personalizado en SVG
function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Componente para animar elementos al hacer scroll
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
  const [scrollY, setScrollY] = useState(0);

  // Parallax de iluminación sutil de fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista estática de proyectos destacados
  const projects = [
    {
      id: "rbac-audit",
      title: "RbacAuditSystem",
      description: "Sistema empresarial de Control de Acceso Basado en Roles (RBAC) y Auditoría Automática a nivel de base de datos. Intercepta el ciclo de vida de EF Core en .NET 10 para registrar de forma transparente y segura los cambios de datos (valores nuevos/anteriores, usuario, IP, fecha). Incluye documentación de API interactiva con Scalar.",
      tags: [".NET 10", "EF Core", "MySQL", "JWT", "BCrypt", "Scalar"],
      github: "https://github.com/FelipeAceved0/RbacAuditSystem",
      badge: "Seguridad y Auditoría"
    },
    {
      id: "tickets-ia",
      title: "Soporte TI con IA",
      description: "Sistema de gestión de incidencias de soporte técnico en tiempo real integrado con la API de Google Gemini (Gemini 2.5 Flash) para categorización y diagnóstico automático e inteligente de tickets. Genera códigos únicos de seguimiento (TCK-XXXXX).",
      tags: ["Node.js", "Express", "React", "Gemini API", "MySQL"],
      github: "https://github.com/FelipeAceved0/sistema-tickets-ia",
      badge: "Inteligencia Artificial"
    },
    {
      id: "stockflow",
      title: "StockFlow Manager",
      description: "Plataforma Full-Stack para el control operativo de inventarios, gestión transaccional de movimientos (entradas y salidas de stock) en tiempo real, alertas dinámicas de existencias críticas e historial completo de auditoría.",
      tags: [".NET 10", "EF Core 9", "React", "Tailwind CSS", "MySQL"],
      github: "https://github.com/FelipeAceved0/stockflow-manager",
      badge: "Logística & CRUD"
    },
    {
      id: "ecommerce-pyme",
      title: "EcoCraft PYME",
      description: "E-commerce completo y panel de administración para tienda sustentable ficticia. Cuenta con catálogo dinámico, carrito de compras dinámico y consultas parametrizadas seguras contra inyección SQL en PostgreSQL. Desplegado activamente en Render.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Render"],
      github: "https://github.com/FelipeAceved0/Pyme-Ecommerce",
      demo: "https://pyme-ecommerce.onrender.com",
      badge: "E-commerce & SQL"
    }
  ];

  // Logos del Carrusel Infinito
  const marqueeLogos = [
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ];

  // Habilidades técnicas
  const skills = {
    backend: [
      { name: "C# / .NET 10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Node.js / Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "APIs RESTful", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Entity Framework Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg" }
    ],
    frontend: [
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5 & CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Fetch API / Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" }
    ],
    database: [
      { name: "MySQL / MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQL relacional", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Modelado de Datos", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" }
    ],
    tools: [
      { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "XAMPP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-zinc-100 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* Fondo de Grilla e Iluminaciones Radiales */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-radial-fade" />
        
        {/* Reflejos de iluminación púrpura sutil de fondo */}
        <div 
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-900/5 rounded-full blur-[140px] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute top-2/3 right-1/4 w-[35rem] h-[35rem] bg-violet-800/5 rounded-full blur-[120px] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${-scrollY * 0.06}px)` }}
        />
      </div>

      {/* Capa principal */}
      <div className="relative z-10">
        
        {/* Navbar Superior Completo (Estilo The Last of Us) */}
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0a0a0c]/85 backdrop-blur-md border-b border-zinc-800/80 h-16 flex items-center shadow-lg shadow-black/25">
          <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 flex items-center justify-between">
            <span 
              className="text-sm font-black tracking-widest text-white flex items-center gap-2 group cursor-pointer uppercase" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Terminal className="text-violet-400 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" /> Felipe Acevedo
            </span>
            <nav className="flex items-center gap-3.5 sm:gap-6 text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">
              <a href="#about" className="hidden md:inline-block hover:text-white transition-colors">Perfil</a>
              <a href="#experience" className="hidden md:inline-block hover:text-white transition-colors">Experiencia</a>
              <a href="#skills" className="hidden md:inline-block hover:text-white transition-colors">Tecnologías</a>
              <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
              <a href="#contact" className="px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all duration-200 border border-violet-500/30 text-[10px] sm:text-xs shadow-md shadow-violet-600/10 uppercase tracking-widest rounded-[2px] shrink-0">Contacto</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-32 pb-20 space-y-28">
          
          {/* Hero Section */}
          <section className="grid lg:grid-cols-5 gap-12 items-center pt-4">
            <div className="lg:col-span-3 space-y-6">
              <FadeInOnScroll delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span>
                  Desarrollador de Software Junior · Rancagua
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={250}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none uppercase">
                  Desarrollo de Software & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                    Arquitectura Backend.
                  </span>
                </h1>
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Ingeniero en Ejecución en Informática recién egresado de AIEP, residente en <strong className="text-zinc-200">Rancagua, Chile</strong>. Especializado en el <strong className="text-zinc-200">desarrollo de sistemas robustos</strong>, abordando desde el diseño de bases de datos relacionales y la lógica de servidor orientada a objetos (.NET / C#, Node.js, PHP) hasta la integración práctica de Inteligencia Artificial.
                </p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={550}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all duration-300 hover:scale-105 text-sm border border-violet-500/30 flex items-center gap-2 group shadow-lg shadow-violet-600/10 rounded-[2px]"
                  >
                    Contactar <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="#projects" className="px-6 py-3 bg-transparent hover:bg-zinc-900/50 text-zinc-350 hover:text-white font-medium border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105 text-sm rounded-[2px]">
                    Ver Proyectos
                  </a>
                  <a 
                    href="./CV_Felipe_Acevedo_Contreras.pdf" 
                    download="CV_Felipe_Acevedo_Contreras.pdf" 
                    className="px-6 py-3 bg-transparent hover:bg-zinc-900/50 text-zinc-350 hover:text-white font-medium border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm rounded-[2px]"
                  >
                    Descargar CV
                  </a>
                </div>
              </FadeInOnScroll>
            </div>

            {/* Simulador de Código VS Code */}
            <div className="hidden lg:block lg:col-span-2">
              <FadeInOnScroll delay={450}>
                <div className="relative rounded-xl bg-[#09090b]/95 border border-zinc-800/90 font-mono text-xs shadow-2xl overflow-hidden">
                  
                  {/* Barra de título del editor */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#121214] border-b border-zinc-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                      <span className="w-3 h-3 rounded-full bg-zinc-700" />
                      <span className="text-zinc-500 text-[10px] ml-2">FelipeController.cs</span>
                    </div>
                    <span className="text-zinc-600 text-[9px] uppercase tracking-wider">C# · ASP.NET</span>
                  </div>

                  {/* Editor */}
                  <div className="flex p-4 overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
                    {/* Números de línea */}
                    <div className="pr-4 text-zinc-600 text-right select-none border-r border-zinc-800/40">
                      <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
                    </div>
                    
                    {/* Código formateado */}
                    <pre className="pl-4">
                      <code>
                        <span className="text-pink-400">using</span> System.Threading.Tasks;<br />
                        <span className="text-pink-400">using</span> Google.GenerativeAI;<br />
                        <br />
                        <span className="text-yellow-400">[ApiController]</span><br />
                        <span className="text-pink-400">public class</span> <span className="text-sky-300">FelipeController</span> : <span className="text-sky-300">ControllerBase</span><br />
                        {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">[HttpGet]</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">public async</span> Task&lt;<span className="text-sky-300">IActionResult</span>&gt; <span className="text-emerald-400">GetProfile</span>()<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> <span className="text-emerald-400">Ok</span>(<span className="text-pink-400">new</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name = <span className="text-emerald-300">"Felipe Ariel"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location = <span className="text-emerald-300">"Rancagua, CL"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills = <span className="text-pink-400">new</span>[] {"{"} <span className="text-emerald-300">".NET 10"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"MySQL"</span> {"}"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"});<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
                        {"}"}
                      </code>
                    </pre>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Sobre mí */}
          <section id="about" className="space-y-6 border-t border-zinc-800/85 pt-16">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="text-white w-6 h-6" /> Enfoque Profesional
              </h2>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 leading-relaxed">
                <FadeInOnScroll delay={150}>
                  <p className="text-base sm:text-lg text-zinc-350">
                    Mi perfil se enfoca en la <strong className="text-white">resolución de problemas complejos mediante programación estructurada y orientada a objetos</strong>. Diseño programas y módulos backend con arquitectura limpia, capaces de gestionar flujos de datos estructurados y comunicarse con sistemas de almacenamiento relacional.
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll delay={300}>
                  <p className="text-base sm:text-lg text-zinc-350">
                    Cuento con experiencia práctica integrando tecnologías de servidor como <strong className="text-white">PHP, Node.js y C# (.NET Core)</strong> junto con ORMs como Entity Framework. Además, tengo formación como <strong className="text-white">Técnico en Conectividad y Redes</strong>, lo que me aporta sólidos cimientos para comprender la infraestructura TI, redes locales, protocolos y el despliegue de sistemas informáticos.
                  </p>
                </FadeInOnScroll>
              </div>

              <FadeInOnScroll delay={400}>
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-violet-500/30 hover:shadow-xl hover:shadow-white/5">
                  <div>
                    <h3 className="font-bold text-white text-base mb-3">Educación & Ubicación</h3>
                    <ul className="space-y-3.5 text-sm text-zinc-400">
                      <li className="flex items-start gap-2.5">
                        <GraduationCap className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Ing. en Ejecución en Informática</strong>
                          <div className="text-xs text-zinc-500 mt-0.5">Inst. Profesional AIEP (Egresado 2025)</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2.5 pt-1">
                        <Network className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                        <div>
                          <strong>Técnico en Conectividad y Redes</strong>
                          <div className="text-xs text-zinc-500 mt-0.5">Liceo Diego Portales, Rancagua</div>
                        </div>
                      </li>
                      <li className="flex items-center gap-2.5 pt-1">
                        <div className="location-pin-container shrink-0">
                          <div className="pin-shadow" />
                          <div className="pin-drop" />
                        </div>
                        <strong>Rancagua, O'Higgins, Chile</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <h3 className="font-bold text-white text-base mb-3">Competencias Clave</h3>
                    <ul className="space-y-2.5 text-sm text-zinc-400">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Lógica de programación OOP</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Modelado de datos relacionales</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Integración y APIs / Gemini IA</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Infraestructura y Redes TI</li>
                    </ul>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section id="experience" className="space-y-6 border-t border-zinc-800/85 pt-16">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Briefcase className="text-white w-6 h-6" /> Experiencia Laboral
              </h2>
            </FadeInOnScroll>

            <div className="space-y-6">
              <FadeInOnScroll delay={150}>
                <div className="p-6 rounded-xl bg-zinc-900/10 border border-zinc-800/70 space-y-4 hover:border-violet-500/20 hover:bg-zinc-900/20 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">Práctica Profesional – Ingeniero en Informática</h3>
                      <p className="text-violet-400 text-sm font-semibold">Saint Moritz</p>
                    </div>
                    <span className="text-xs text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full border border-zinc-800">Feb 2026 – Mayo 2026</span>
                  </div>
                  
                  <ul className="space-y-3 text-base text-zinc-350 list-disc list-inside">
                    <li>
                      <strong className="text-zinc-200">Desarrollo Full-Stack & Sistemas Internos:</strong> Diseño e implementación de la plataforma web interna de la empresa para el registro, seguimiento y control de datos operativos.
                    </li>
                    <li>
                      <strong className="text-zinc-200">Integración Web & Frontend:</strong> Construcción de interfaces dinámicas y consumo asíncrono de datos utilizando PHP, HTML5, JavaScript (AJAX) y CSS.
                    </li>
                    <li>
                      <strong className="text-zinc-200">Administración de Bases de Datos:</strong> Diseño, normalización y optimización de bases de datos relacionales en MySQL con entorno XAMPP, garantizando consultas SQL seguras y eficientes.
                    </li>
                    <li>
                      <strong className="text-zinc-200">Soporte Técnico e Infraestructura:</strong> Diagnóstico y resolución de incidencias en redes locales (LAN/WLAN), mantenimiento preventivo/correctivo de hardware PC/Mac e infraestructura tecnológica interna.
                    </li>
                  </ul>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Stack Técnico */}
          <section id="skills" className="space-y-6 border-t border-zinc-800/85 pt-16">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layers className="text-white w-6 h-6" /> Tecnologías & Herramientas
              </h2>
            </FadeInOnScroll>

            {/* Carrusel Infinito de Tecnologías (Marquee) */}
            <FadeInOnScroll delay={100}>
              <div className="relative w-full overflow-hidden bg-zinc-900/10 border border-zinc-800/40 rounded-xl py-6 my-4 select-none">
                {/* Difuminados de degradado en los extremos */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                <div className="flex gap-16 animate-marquee">
                  {/* Primera tanda de logos */}
                  <div className="flex gap-16 shrink-0">
                    {marqueeLogos.map((logo, index) => (
                      <div key={`marquee-1-${index}`} className="flex items-center gap-3 group">
                        <img 
                          src={logo.icon} 
                          alt={logo.name} 
                          className="w-7 h-7 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                        />
                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* Segunda tanda de logos (Duplicada para seamless loop) */}
                  <div className="flex gap-16 shrink-0" aria-hidden="true">
                    {marqueeLogos.map((logo, index) => (
                      <div key={`marquee-2-${index}`} className="flex items-center gap-3 group">
                        <img 
                          src={logo.icon} 
                          alt={logo.name} 
                          className="w-7 h-7 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                        />
                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FadeInOnScroll delay={100}>
                <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-violet-500/30 hover:shadow-xl hover:shadow-white/5">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Server className="w-4 h-4" /> Backend & Lógica
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.backend.map(s => (
                      <span key={s.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800/60 group">
                        <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={200}>
                <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-violet-500/30 hover:shadow-xl hover:shadow-white/5">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Globe className="w-4 h-4" /> Frontend
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.frontend.map(s => (
                      <span key={s.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800/60 group">
                        <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={300}>
                <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-violet-500/30 hover:shadow-xl hover:shadow-white/5">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Database className="w-4 h-4" /> Bases de Datos
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.database.map(s => (
                      <span key={s.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800/60 group">
                        <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={400}>
                <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-violet-500/30 hover:shadow-xl hover:shadow-white/5">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Workflow className="w-4 h-4" /> Herramientas & IA
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.tools.map(s => (
                      <span key={s.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800/60 group">
                        <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Proyectos Destacados */}
          <section id="projects" className="space-y-6 border-t border-zinc-800/85 pt-16">
            <FadeInOnScroll>
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Code2 className="text-white w-6 h-6" /> Proyectos Destacados
                </h2>
                <p className="text-xs text-zinc-400 mt-1">Una selección de sistemas desarrollados que demuestran capacidades en backend, bases de datos y arquitectura de software.</p>
              </div>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p, index) => (
                <FadeInOnScroll key={p.id} delay={index * 150}>
                  <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/80 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/30 hover:shadow-2xl hover:shadow-white/5 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="text-[10px] text-violet-400 font-bold uppercase tracking-wider bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded">
                            {p.badge}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1.5">{p.title}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {p.demo && (
                            <a 
                              href={p.demo} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-white hover:bg-violet-500 transition-all duration-200 hover:scale-105 flex items-center gap-1 text-[11px] font-bold bg-violet-600 px-2.5 py-1 border border-violet-500/30 shadow-md shadow-violet-600/10 rounded-[2px]"
                            >
                              <Globe className="w-3 h-3 text-white" /> Demo
                            </a>
                          )}
                          <a 
                            href={p.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-zinc-300 hover:text-white transition-all duration-200 hover:scale-105 flex items-center gap-1 text-[11px] font-medium bg-zinc-950 px-2.5 py-1 border border-zinc-800 hover:border-zinc-700 rounded-[2px]"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-zinc-300" /> Código
                          </a>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">{p.description}</p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[10px] font-medium border border-zinc-800/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </section>

          {/* Contacto */}
          <section id="contact" className="space-y-6 border-t border-zinc-800/85 pt-16 text-center">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight">¿Buscas un desarrollador de software para tu equipo?</h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-sm mt-2">
                Estoy disponible para integrarme a proyectos de desarrollo, aportar mi capacidad analítica, estructuración de bases de datos y backend, y continuar creciendo profesionalmente.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href="https://github.com/FelipeAceved0" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2 shadow-sm rounded-[2px]"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-300" /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/felipe-ariel-acevedo-contreras-948410369" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2 shadow-sm rounded-[2px]"
                >
                  <LinkedinIcon className="w-4 h-4 text-zinc-300" /> LinkedIn
                </a>
                <a 
                  href="mailto:felipeacevedo954@gmail.com" 
                  className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all duration-300 hover:scale-110 text-sm font-medium flex items-center gap-2 shadow-sm rounded-[2px]"
                >
                  <Mail className="w-4 h-4 text-zinc-300" /> felipeacevedo954@gmail.com
                </a>
              </div>
            </FadeInOnScroll>
          </section>
        </main>

        <footer className="border-t border-zinc-800/85 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Felipe Ariel Acevedo Contreras — Ingeniero en Ejecución en Informática
        </footer>
      </div>
    </div>
  );
}
