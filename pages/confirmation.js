import Link from "next/link";
import { motion } from "framer-motion";

export default function Confirmation() {
    return (
        <main className="relative bg-bg bg-rustic-texture min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
                <div className="container h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo_barsa_prod-removebg-preview.png"
                            alt="Company Logo"
                            className="w-14 h-14 object-contain"
                        />
                        <span className="text-cream/90 font-medium">Barsa Prod 2012</span>
                    </Link>
                    <Link href="/" className="btn btn-primary">Înapoi acasă</Link>
                </div>
            </header>

            <section className="flex-1 flex items-center justify-center relative overflow-hidden">
                <div className="container py-12 md:py-32 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-[color:var(--gold)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-[#0E2F1E]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-cream mb-6">
                            Vă mulțumim că ne-ați contactat!
                        </h1>

                        <p className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
                            Vom lua legătura cu dumneavoastră în scurt timp.
                        </p>

                        <Link href="/" className="btn btn-primary inline-flex items-center gap-2">
                            <span>Înapoi la prima pagină</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <footer className="border-t border-white/10 mt-auto">
                <div className="container py-8 text-center text-cream/60">© {new Date().getFullYear()} Barsa Prod 2012 – Cooperativa Agricolă</div>
            </footer>
        </main>
    );
}
