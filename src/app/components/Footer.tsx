import Link from 'next/link'; // Import Link from Next.js

function Footer() {
    // Array representing different sections of the footer
    const sections = [
        {
            title: "About Us",
            content: "Sam Codes is a leading institution committed to empowering the next generation of web developers. Join us to become a part of a dynamic community passionate about shaping the future of technology."
        },
        {
            title: "Quick Links",
            links: [
                { text: "Home", href: "/" },
                { text: "About", href: "/about" },
                { text: "Courses", href: "/courses" },
                { text: "Contact", href: "/contact" }
            ]
        },
        {
            title: "Follow Us",
            socialLinks: [
                { text: "Facebook", href: "#" },
                { text: "Twitter", href: "#" },
                { text: "Instagram", href: "#" }
            ]
        },
        {
            title: "Contact Us",
            address: "Btech AIML, Rps ",
            benchCode: "Bench number : 1,4",
            email: "shubhamsaini8965@gmail.com",
            phone: "8278568770"
        }
    ];

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                {sections.map((section, index) => (
                    <div key={index}>
                        <p className="text-white text-lg font-semibold mb-4">{section.title}</p>
                        {section.content && <p className="mb-4">{section.content}</p>}
                        {section.links && (
                            <ul>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="hover:text-white transition-colors duration-300">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.socialLinks && (
                            <div className="flex space-x-4">
                                {section.socialLinks.map((socialLink, index) => (
                                    <Link key={index} href={socialLink.href} className="hover:text-white transition-colors duration-300">
                                        {socialLink.text}
                                    </Link>
                                ))}
                            </div>
                        )}
                        {section.address && (
                            <div>
                                <p>{section.address}</p>
                                <p>{section.benchCode}</p>
                                <p>{section.email}</p>
                                <p>{section.phone}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <p className="text-center text-xs pt-8">© 2024 Sam codes. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
