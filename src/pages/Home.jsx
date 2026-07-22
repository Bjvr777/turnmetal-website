import  React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, Cog, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Banner with Background Image */}
            <section
                className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold overflow-hidden"
                style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
            >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-[1px]"></div>

                {/* Content Layer */}
                <div className="relative z-10 max-w-7xl mx-auto space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-brand-gold/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-gold uppercase tracking-widest">
                        <Shield size={14} />
                        <span>Precision Engineering & Milling Specialist</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                        Engineering Solutions for <br />
                        <span className="text-brand-gold">the Milling and Grain Industry</span>
                    </h1>
                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
                        Specialized manufacturing of screw conveyors, bucket elevator drums, and on-site roller changes for South Africa's milling & grain handling industries.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/quote"
                            className="bg-brand-gold hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-md shadow-lg transition-all text-center uppercase tracking-wide flex items-center justify-center space-x-2"
                        >
                            <span>Request Quotation</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/services"
                            className="border-2 border-brand-silver/40 hover:border-white text-slate-200 hover:text-white font-semibold px-8 py-3.5 rounded-md transition-all text-center"
                        >
                            Explore Capabilities
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Overview Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue space-y-3">
                        <div className="p-3 bg-blue-50 text-brand-blue rounded-md w-fit">
                            <Wrench size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-heading">Precision Machining</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            High-tolerance turning, shaft manufacturing, and component rebuilding for industrial plant infrastructure.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-gold space-y-3">
                        <div className="p-3 bg-amber-50 text-brand-gold rounded-md w-fit">
                            <Cog size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-heading">Conveyor Systems</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Custom flighting fabrication, screw conveyor builds, and drum manufacture and reconditioning.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-orange space-y-3">
                        <div className="p-3 bg-orange-50 text-brand-orange rounded-md w-fit">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-heading">On-Site Servicing</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            24/7 breakdown support, roll stand maintenance, and mill roller replacements to minimize downtime.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}