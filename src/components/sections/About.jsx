
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
                        <p className="text-gray-300 mb-6">
                            Adaptable professional transitioning into software engineering with a 
                            foundation in full-stack development, QA automation, and CI/CD pipelines. 
                            My 6+ years in high-stakes logistics and operations at Sea-Tac 
                            International Airport shaped my attention to detail, problem-solving 
                            ability, and commitment to quality.
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