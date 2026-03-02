'use client';

import Image from 'next/image';

export function LogoMark({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/logo.png"
                alt="ARIFAC Logo Mark"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}

/**
 * Full ARIFAC logo.
 * - "ARIFAC"                          → always black (#111827)
 * - "Building Partnerships in AML/CFT" → always brand blue (#3a7ca5)
 *
 * variant="light"  → light/white backgrounds (header)
 * variant="dark"   → dark backgrounds (footer)
 */
export default function Logo({
    className = "",
    textClassName = "",
    variant = "light",
}: {
    className?: string;
    textClassName?: string;
    variant?: "light" | "dark";
}) {
    const nameColor = variant === "dark" ? "text-white" : "text-[#111827]";

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="w-10 h-10 shrink-0 relative bg-white rounded-lg p-1 shadow-sm">
                <Image
                    src="/logo.png"
                    alt="ARIFAC Logo"
                    fill
                    className="object-contain p-0.5"
                    priority
                />
            </div>
            <div className={`flex flex-col ${textClassName}`}>
                {/* White on dark bg (footer), black on light bg (header) */}
                <span className={`font-heading font-bold text-lg leading-none tracking-tight ${nameColor}`}>
                    ARIFAC
                </span>
                {/* Always brand blue — visible on both light and dark backgrounds */}
                <span className="text-[0.6rem] uppercase tracking-widest font-semibold whitespace-nowrap text-[#3a7ca5]">
                    Building Partnerships in AML/CFT
                </span>
            </div>
        </div>
    );
}
