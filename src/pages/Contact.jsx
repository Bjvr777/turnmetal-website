import React from 'react';
import { companyInfo } from '../data/companyInfo';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-6">
            <h1 className="text-3xl font-extrabold font-heading text-brand-dark">Contact Workshop</h1>
            <p className="text-slate-600 leading-relaxed">
                <strong>Location:</strong> {companyInfo.address}<br />
                <strong>Phone:</strong> {companyInfo.phone}<br />
                <strong>Email:</strong> {companyInfo.email}
            </p>
        </div>
    );
}
