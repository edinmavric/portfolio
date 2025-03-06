import {
    aoraLogo,
    appleLogo,
    brainwaveLogo,
    edofrizerLogo,
    mojnpLogo,
    vercelLogo,
} from '../constants';

export const projects = [
    {
        id: 1,
        img: mojnpLogo,
        href: 'https://www.mojnovipazar.info/',
        name: 'MojNP',
    },
    {
        id: 2,
        img: appleLogo,
        href: 'https://edins-apple.pages.dev/',
        name: 'Apple',
    },

    {
        id: 3,
        img: brainwaveLogo,
        href: 'https://edins-brainwave.pages.dev/',
        name: 'Brainwave',
    },
    {
        id: 4,
        img: aoraLogo,
        href: 'https://github.com/edinmavric/aora',
        name: 'Aora',
    },
    {
        id: 5,
        img: vercelLogo,
        href: 'https://socially-weld.vercel.app/',
        name: 'Socially',
    },
    {
        id: 6,
        img: edofrizerLogo,
        href: 'https://edinmavric.github.io/edo-frizer/Pages/home/home.html',
        name: 'EdoFrizer',
    },
];

export const navLinks = [
    { id: 1, name: 'About', href: '#about' },
    { id: 2, name: 'Projects', href: '#projects' },
    { id: 3, name: 'Contact', href: '#contact' },
];

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        href: 'https://github.com/edinmavric',
    },
    {
        id: 2,
        img: '/link.svg',
        href: 'https://www.linkedin.com/in/edinmavric',
    },
];

export const experience = [
    {
        id: 1,
        title: 'CEO & Founder',
        description:
            'Founded a software that gamifies learning for kids, focusing on math and problem-solving skills.',
        image: '/images/exp1.svg',
    },
    {
        id: 2,
        title: 'Frontend Developer - CentarNIT',
        description: 'Maintained and improved clients websites and apps.',
        image: '/images/exp2.svg',
    },
    {
        id: 3,
        title: 'Web Dev Mentor - CentarNIT',
        description: 'Taught kids and adults essential web development skills.',
        image: '/images/exp3.svg',
    },
    {
        id: 4,
        title: 'Lead Frontend Developer',
        description:
            'Led a team of developers to develop and maintain a client’s app.',
        image: '/images/exp4.svg',
    },
];

export const approach = [
    {
        id: 1,
        heading: 'Planning & Strategy',
        text: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
        id: 2,
        heading: 'Development & Progress Update',
        text: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
    },
    {
        id: 3,
        heading: 'Development & Launch',
        text: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    },
];
