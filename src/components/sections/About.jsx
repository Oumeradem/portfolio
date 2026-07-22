
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const testingSkills = [
       "Playwright", 
       "Cucumber BDD", 
       "Selenium", 
       "Jenkins", 
       "Faker.js", 
       "Page Object Model",
       "TypeScript"
    ];

    const devSkills = [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "JavaScript"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me 
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-4">
                            ISTQB CTFL-certified Software Test Automation Engineer with hands-on experience
                            designing end-to-end (E2E) QA frameworks using Playwright, TypeScript, and
                            Cucumber BDD. Skilled in Page Object Model architecture, API and cross-browser
                            automation, and Jenkins CI/CD integration.
                        </p>

                         <p className="text-gray-300 mb-4">
                            I don't just test applications - I build them. My food delivery app (full-stack
                            MERN, JWT auth, live Stripe payments) serves as the sandbox for my 29-step
                            automation suite, giving me developer-level insight into designing more precise,
                            maintainable test coverage.
                        </p>

                          <p className="text-gray-300 mb-6">
                            My 6+ years in high-stakes logistics operations at Sea-Tac International Airport
                            — managing 200+ travelers per shift with 99.8% routing accuracy — shaped the
                            attention to detail and structured problem-solving I now bring to quality assurance.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">QA & Automation</h3>
                                <div className="flex flex-wrap gap-2">
                                    {testingSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {devSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Full-Stack Web Development</strong> — Coding Dojo
                                </li>
                                <li>
                                    <strong>IT Support Specialist</strong> — Per Scholas
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Logistics & Operations — Sea-Tac Airport (6+ years)</h4>
                                    <p>High-stakes customer operations building problem-solving, attention to detail, and quality under pressure.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Software Engineering Transition (2024 - Present)</h4>
                                    <p>Building full-stack apps and E2E automation suites with Playwright, Cucumber, and Jenkins CI/CD.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};