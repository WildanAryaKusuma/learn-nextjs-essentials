import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <header>
                <nav>
                    <Link href={'/admin'}>Admin</Link>
                    <Link href={'/user'}>User</Link>
                </nav>
            </header>
            {children}
        </html>
    )
}