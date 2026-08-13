import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const testingSkills = [
        "Playwright", "Cucumber BDD", "Selenium", "Jenkins CI/CD",
        "Faker.js", "Page Object Model", "TypeScript", "Postman", "Jira"
    ];

    const devSkills = [
        "React", "Node.js", "Express", "MongoDB",
        "TypeScript", "JavaScript", "REST APIs"
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
                            ISTQB CTFL-certified Software Test Automation Engineer with 
                            hands-on experience building production-grade E2E frameworks 
                            using Playwright, Cucumber BDD, TypeScript, and Jenkins CI/CD. 
                            Skilled in Page Object Model, API testing, defect triage, 
                            and BDD methodology.
                        </p>
                        <p className="text-gray-300 mb-4">
                            While working full time at Sea-Tac International Airport I 
                            independently built a production-grade 29-step E2E automation 
                            framework and a full-stack MERN food delivery application — 
                            demonstrating self-driven commitment to software engineering 
                            and QA automation.
                        </p>
                        <p className="text-gray-300 mb-6">
                            With a background in quality assurance at King Abdulaziz 
                            International Airport in Saudi Arabia — conducting daily slump, 
                            temperature, stress and load testing, and defect documentation — 
                            I bring real-world QA discipline to every automation framework 
                            I build.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">QA & Automation</h3>
                                <div className="flex flex-wrap gap-2">
                                    {testingSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {devSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white">Freelance QA Tester — Uber App</h4>
                                    <p className="text-blue-400 text-sm mb-1">Testlio | Dec 2025 – Present | Remote</p>
                                    <p className="text-sm">Selected by Testlio to test Uber's production mobile app across iOS and Android. Completed 30+ test cycles and filed 40+ verified defect reports covering navigation, payments, voice commands, and app crashes.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Passenger Logistics Facilitator</h4>
                                    <p className="text-blue-400 text-sm mb-1">Prospect Airport Services — Sea-Tac | Sep 2020 – Present</p>
                                    <p className="text-sm">Managed 200+ travelers per shift while independently 
                                    building a production-grade Playwright automation framework 
                                    and full-stack MERN application.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">QA / Concrete Testing Specialist</h4>
                                    <p className="text-blue-400 text-sm mb-1">ACTS | 2014 – 2017 | Saudi Arabia</p>
                                    <p className="text-sm">Daily slump, temperature, and air content testing — 
                                    compression and stress testing using hydraulic machinery 
                                    to detect failures and ensure materials meet strict 
                                    structural specifications.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                                <li><strong>IT Support Specialist</strong> — Per Scholas | 2025</li>
                                <li><strong>Full-Stack Web Development</strong> — Coding Dojo | 2024</li>
                                <li><strong>IT Fundamentals</strong> — Highline College | 2018–2020</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Certifications</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                                <li><strong>ISTQB CTFL</strong> — Dec 2025</li>
                                <li><strong>CompTIA A+</strong> — Sep 2025</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};