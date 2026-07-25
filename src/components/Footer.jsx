import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t-2 border-brand-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">


                    {/* Company Intro */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <img
                                src="/logo.png"
                                alt="Turn-Metal Engineering"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {companyInfo.tagline}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-brand-silver bg-slate-800/60 px-3 py-2 rounded border border-slate-700/50 w-fit">
                            <ShieldCheck className="w-4 h-4 text-brand-gold" />
                            <span>Precision Guaranteed Standard</span>
                        </div>
                    </div>

                    {/* Core Services Links */}
                    <div>
                        <h4 className="text-white text-base font-bold font-heading mb-4 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Capabilities
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {companyInfo.services.map((service, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                    <ChevronRight size={14} className="text-brand-gold" />
                                    <span className="hover:text-white transition-colors">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-base font-bold font-heading mb-4 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {['Home', 'About', 'Services', 'Industries', 'Projects', 'Request a Quote', 'Contact'].map((item, idx) => {
                                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`;
                                return (
                                    <li key={idx}>
                                        <Link to={path} className="hover:text-brand-gold transition-colors flex items-center space-x-1.5">
                                            <span>{item}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white text-base font-bold font-heading mb-4 uppercase tracking-wider border-b border-slate-800 pb-2">
                            Workshop Contact
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <span className="text-slate-400">{companyInfo.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                <a href={`tel:${companyInfo.phone}`} className="hover:text-white font-medium">
                                    {companyInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <div className="flex flex-col space-y-1">
                                    <a href={`mailto:${companyInfo.email}`} className="hover:text-white text-sm">
                                        {companyInfo.email}
                                    </a>
                                    <li className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                        <div className="flex flex-col space-y-1">
                                            {companyInfo.secondaryEmail && (
                                                <a href={`mailto:${companyInfo.secondaryEmail}`} className="hover:text-white text-sm">
                                                    {companyInfo.secondaryEmail}
                                                </a>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </div>

                    </div>

                    {/* Copyright */}
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                        <p>© {new Date().getFullYear()} {companyInfo.name} All rights reserved.</p>
                        <p className="text-slate-600">Built for Milling & Industrial Plant Maintenance</p>
                    </div>
                </div>
        </footer>
    );
}