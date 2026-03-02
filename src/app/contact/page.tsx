'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { ArrowLeft, Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            organisation: (form.elements.namedItem('organisation') as HTMLInputElement).value,
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                const json = await res.json();
                setErrorMsg(json.error || 'Something went wrong. Please try again.');
                setStatus('error');
            }
        } catch {
            setErrorMsg('Network error. Please check your connection and try again.');
            setStatus('error');
        }
    };

    const inputClass =
        'w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-gray-400 text-sm transition-colors';
    const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row text-primary overflow-hidden">

            {/* Left Panel */}
            <div className="hidden md:flex flex-col justify-between w-5/12 bg-gray-50 p-12 relative overflow-hidden border-r border-gray-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03),transparent_50%)]" />

                <div className="relative z-10">
                    <Link href="/" className="inline-block mb-12">
                        <Logo />
                    </Link>

                    <h2 className="text-3xl font-heading font-bold mb-4 text-primary leading-snug">
                        Get in Touch<br />
                        <span className="text-accent">with ARIFAC</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10">
                        Whether you're exploring membership, have questions about our certification programmes, or want to collaborate — we'd love to hear from you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 mt-0.5">
                                <Mail size={16} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Email</div>
                                <a href="mailto:s.avanish@iamai.in" className="text-sm text-primary hover:text-accent transition-colors">
                                    s.avanish@iamai.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 mt-0.5">
                                <MapPin size={16} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Office</div>
                                <p className="text-sm text-gray-600">
                                    Internet and Mobile Association of India<br />
                                    New Delhi, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 mt-0.5">
                                <Phone size={16} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Response Time</div>
                                <p className="text-sm text-gray-600">Within 2 business days</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 p-5 bg-white rounded-xl border border-gray-200 shadow-sm mt-auto">
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                        "ARIFAC is committed to building India's financial integrity ecosystem through open collaboration and institutional alignment."
                    </p>
                </div>
            </div>

            {/* Right Panel – Form */}
            <div className="flex-1 flex flex-col p-6 md:p-12 overflow-y-auto bg-white">
                <div className="flex justify-between items-center mb-10">
                    <Link href="/" className="text-gray-400 hover:text-primary flex items-center gap-2 text-sm transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

                <div className="max-w-xl mx-auto w-full">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold font-heading mb-2 text-primary">Contact Us</h1>
                        <p className="text-gray-500 text-sm">Fill in the form below and our team will get back to you promptly.</p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-16 flex flex-col items-center text-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                                <CheckCircle2 size={32} className="text-green-500" />
                            </div>
                            <h2 className="text-xl font-bold text-primary">Message Sent!</h2>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Thank you for reaching out. We've received your message and will respond within 2 business days.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-4 px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-primary hover:bg-gray-50 transition-colors"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                                    <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelClass}>Email Address <span className="text-red-400">*</span></label>
                                    <input id="email" name="email" type="email" required placeholder="you@organisation.com" className={inputClass} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="organisation" className={labelClass}>Organisation</label>
                                <input id="organisation" name="organisation" type="text" placeholder="Your institution or company" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="subject" className={labelClass}>Subject <span className="text-red-400">*</span></label>
                                <input id="subject" name="subject" type="text" required placeholder="e.g. Membership Enquiry, Certification Query" className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClass}>Message <span className="text-red-400">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Please describe your query or message in detail..."
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">{errorMsg}</p>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 size={18} className="animate-spin" /> Sending…</>
                                    ) : (
                                        <><Send size={16} /> Send Message</>
                                    )}
                                </button>
                            </div>

                            <p className="text-[11px] text-gray-400 text-center">
                                By submitting, you consent to ARIFAC processing your details to respond to your enquiry.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
