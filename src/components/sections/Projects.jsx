import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 - E2E Test Automation FIRST */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">🧪 E2E Test Automation</h3>
                        <p className="text-gray-400 mb-4">
                            BDD automation framework with 29 steps covering registration,
                            login, cart, Stripe payment, and order confirmation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Playwright", "Cucumber", "TypeScript", "Jenkins"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Oumeradem/food-delivery-tests" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                                GitHub →
                            </a>
                            <a href="https://youtu.be/S0vs8daK1rw" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                                ▶️ Watch Demo →
                            </a>
                        </div>
                    </div>

                    {/* Card 2 - Tomato Food Delivery */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">🍅 Tomato Food Delivery</h3>
                        <p className="text-gray-400 mb-4">
                            Full-stack MERN food delivery app with user authentication,
                            cart management, Stripe payments, and order tracking.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "MongoDB", "Stripe"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Oumeradem/food-del" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                                GitHub →
                            </a>
                            <a href="https://tomato-food-delivery-zeta.vercel.app" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                                Live Demo →
                            </a>
                        </div>
                    </div>

                    {/* Card 3 - Customer Support Chatbot */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2">🤖 Customer Support Chatbot</h3>
                        <p className="text-gray-400 mb-4">
                            Full-stack customer support chatbot with real-time chat
                            and automated responses.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "MongoDB"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Oumeradem/customer-support-chatbot" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                                GitHub →
                            </a>
                            <a href="https://oumeradem.github.io/customer-support-chatbot/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                                Live Demo →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};