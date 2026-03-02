import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
    const footerLinks: { title: string; links: { name: string; href: string }[] }[] = [
        {
            title: 'About ARIFAC',
            links: [
                { name: 'Meetings', href: '/meetings' },
                { name: 'Sectoral Nodal Officers', href: '/sectoral-nodal-officers' },
                { name: 'Training Leads', href: '/training-leads' },
                { name: 'Contact Us', href: '/contact' },
            ],
        },
        {
            title: 'Certification',
            links: [
                { name: 'Exam Framework', href: '#' },
                { name: 'Study Materials', href: '#' },
                { name: 'Continuing Education', href: '#' },
                { name: 'Verify a Certificate', href: '#' },
            ],
        },
        {
            title: 'Membership',
            links: [
                { name: 'Member Directory', href: '/members' },
                { name: 'Benefits', href: '#' },
                { name: 'Fee Structure', href: '#' },
                { name: 'Join Now', href: '/join' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Regulatory Updates', href: '#' },
                { name: 'Research & Reports', href: '#' },
                { name: 'Webinars', href: '#' },
                { name: 'Press Room', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <Logo className="mb-6" variant="dark" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Empowering India's financial ecosystem through unified compliance standards, expert certification, and strategic regulatory dialogue.
                        </p>
                    </div>

                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h4 className="text-white font-bold mb-6">{column.title}</h4>
                            <ul className="space-y-3">
                                {column.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-accent transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* IAMAI Technology Partner Strip */}
                <div className="mb-10 p-6 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold whitespace-nowrap">Operating under the aegis of</span>
                            <span className="w-px h-5 bg-white/10" />
                        </div>
                        <a
                            href="https://iamai.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                            title="Internet And Mobile Association of India"
                        >
                            <div className="relative w-24 h-9 bg-white rounded-lg overflow-hidden shadow-sm p-1">
                                <Image
                                    src="/iamai-logo.png"
                                    alt="IAMAI - Internet And Mobile Association of India"
                                    fill
                                    className="object-contain p-0.5"
                                />
                            </div>
                            <div className="hidden md:flex flex-col">
                                <span className="text-white text-sm font-semibold leading-tight">IAMAI</span>
                                <span className="text-gray-500 text-[10px]">Internet &amp; Mobile Association of India</span>
                            </div>
                        </a>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed text-center sm:text-right max-w-xs">
                        ARIFAC is developed and maintained by IAMAI as part of India&apos;s commitment to strengthening financial integrity frameworks.
                    </p>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} ARIFAC | IAMAI. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Terms of Use
                        </Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
