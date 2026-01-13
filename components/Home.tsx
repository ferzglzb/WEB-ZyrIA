import React from 'react';
import { Layout } from './Layout';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { UseCases } from './UseCases';
import { Process } from './Process';
import { Contact } from './Contact';

export const Home: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <UseCases />
            <Process />
            <Contact />
        </Layout>
    );
};
