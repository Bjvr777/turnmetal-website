import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-brand-dark shadow-xl border-b border-slate-800">
            {/* Top Emergency & Contact Bar */}
            <div className="bg-brand-blue text-slate-200 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-blue-800/50">
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-medium hidden sm:inline">{companyInfo.hours}</span>
                    <span className="font-medium sm:hidden">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href={`tel:${companyInfo.phone}`}
                        className="flex items-center space-x-1.5 hover:text-white transition-colors"
                    >
                        <Phone size={13} className="text-brand-orange" />
                        <span className="font-semibold">{companyInfo.phone}</span>
                    </a>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Badge */}
                    <Link to="/" className="flex items-center space-x-3">
                    {/* Logo Image */}
                    <img 
                        src="/logo.png" 
                        alt="Turn-Metal Engineering Logo" 
                        className="h-15 w-auto object-contain" 
                    />
                
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${isActive(link.path)
                                    ? 'text-brand-gold bg-slate-800/80 border border-brand-gold/30'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Quote Button CTA */}
                    <div className="hidden md:flex items-center">
                        <Link
                            to="/quote"
                            className="bg-brand-gold hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 uppercase tracking-wide"
                        >
                            Request Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2.5 rounded-md text-base font-medium ${isActive(link.path)
                                ? 'text-brand-gold bg-slate-800 border-l-4 border-brand-gold'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <Link
                            to="/quote"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-brand-gold text-white font-bold py-3 rounded-md uppercase tracking-wide shadow-md"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}