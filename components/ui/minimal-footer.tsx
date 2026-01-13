import {
    FacebookIcon,
    GithubIcon,
    Grid2X2Plus,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
} from 'lucide-react';

export function MinimalFooter() {
    const year = new Date().getFullYear();

    const company = [
        {
            title: 'About Us',
            href: '#',
        },
        {
            title: 'Careers',
            href: '#',
        },
        {
            title: 'Brand assets',
            href: '#',
        },
        {
            title: 'Privacy Policy',
            href: '#',
        },
        {
            title: 'Terms of Service',
            href: '#',
        },
    ];

    const resources = [
        {
            title: 'Blog',
            href: '#',
        },
        {
            title: 'Help Center',
            href: '#',
        },
        {
            title: 'Contact Support',
            href: '#',
        },
        {
            title: 'Community',
            href: '#',
        },
        {
            title: 'Security',
            href: '#',
        },
    ];

    const socialLinks = [
        {
            icon: <FacebookIcon className="size-4" />,
            link: '#',
        },
        {
            icon: <GithubIcon className="size-4" />,
            link: '#',
        },
        {
            icon: <InstagramIcon className="size-4" />,
            link: '#',
        },
        {
            icon: <LinkedinIcon className="size-4" />,
            link: '#',
        },
        {
            icon: <TwitterIcon className="size-4" />,
            link: '#',
        },
        {
            icon: <YoutubeIcon className="size-4" />,
            link: '#',
        },
    ];
    return (
        <footer className="relative bg-brand-petrol text-white z-10">
            <div className="mx-auto max-w-[1200px] border-t border-white/10">
                <div className="grid grid-cols-6 gap-6 p-4 py-12">
                    <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
                        <a href="#" className="w-max opacity-90">
                            {/* Reemplazar con Logo si es necesario, usando texto por ahora o icono */}
                            <div className="flex items-center gap-2 font-bold text-xl">
                                <Grid2X2Plus className="size-8 text-brand-action" />
                                <span>ZyrIA</span>
                            </div>
                        </a>
                        <p className="text-white/60 max-w-sm font-sans text-sm text-balance">
                            Automatización inteligente para negocios reales. Optimizamos tus procesos con IA.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((item, i) => (
                                <a
                                    key={i}
                                    className="hover:bg-white/10 hover:text-brand-lime rounded-md border border-white/10 p-1.5 transition-colors"
                                    target="_blank"
                                    href={item.link}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 w-full md:col-span-1">
                        <span className="text-white/40 mb-3 block text-xs uppercase tracking-wider">
                            Recursos
                        </span>
                        <div className="flex flex-col gap-2">
                            {resources.map(({ href, title }, i) => (
                                <a
                                    key={i}
                                    className={`w-max text-sm text-white/70 hover:text-brand-action duration-200`}
                                    href={href}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-3 w-full md:col-span-1">
                        <span className="text-white/40 mb-3 block text-xs uppercase tracking-wider">Compañía</span>
                        <div className="flex flex-col gap-2">
                            {company.map(({ href, title }, i) => (
                                <a
                                    key={i}
                                    className={`w-max text-sm text-white/70 hover:text-brand-action duration-200`}
                                    href={href}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 h-px w-full" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-6 px-4">
                    <p className="text-white/40 text-xs font-thin">
                        © {year} ZyrIA. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
