import React from 'react';
import { Layout } from './Layout';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
    return (
        <Layout hideFooter={true}>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background GIF */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen bg-brand-petrol"
                    style={{
                        backgroundImage: `url('https://fbmqjdjpjfvtadcahzcw.supabase.co/storage/v1/object/sign/ZyrIA%20WEB/2a901ac6-ee63-406b-99dc-ec4e77e761ca-ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODcyOWU2MS0zMTAwLTQyYTYtYjMwZC01NDQ2NzcxZDNiMDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaeXJJQSBXRUIvMmE5MDFhYzYtZWU2My00MDZiLTk5ZGMtZWM0ZTc3ZTc2MWNhLWV6Z2lmLmNvbS12aWRlby10by13ZWJwLWNvbnZlcnRlci53ZWJwIiwiaWF0IjoxNzY4MzQ0ODQ5LCJleHAiOjM1MDI4MjQ4NDl9.r7LKHHGmCV1QcLp1CpE67C81_awk7S6oTmuZmi4Rkjg')`
                    }}
                ></div>

                {/* Content Overlay */}
                <div className="relative z-10 text-center px-6 max-w-2xl">
                    <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-action to-brand-lime mb-2">404</h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Página no encontrada</h2>
                    <p className="text-white/70 text-lg mb-8">
                        Lo sentimos, nos hemos adentrado demasiado en el ciberespacio. La página que buscas no existe o ha sido movida.
                    </p>
                    <Link to="/">
                        <Button variant="primary">
                            Regresar al Inicio
                        </Button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};
