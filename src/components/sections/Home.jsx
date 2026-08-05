import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <img
                    src="/profile.jpg"
                    alt="Oumer Adem"
                    className="w-32 h-32 rounded-full border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] object-cover mx-auto mb-6"
                />
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Oumer Adem
                    </h1>
                    <p className="text-blue-400 text-xl font-semibold mb-4">
                        Software Test Automation Engineer
                    </p>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        ISTQB CTFL-certified QA Automation Engineer specializing
                        in Playwright, Cucumber BDD, TypeScript, and Jenkins CI/CD.
                        I build test frameworks that eliminate bugs before they reach production.
                    </p>
                    <div className="flex justify-center flex-wrap gap-3">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                        <a href="/Oumer_Adem_Resume.pdf" download="Oumer_Adem_Resume.pdf" className="bg-cyan-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                            Download Resume
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};