'use client';
import { useState } from 'react';
import styles from './Projects.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Ford",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5,
        link: "/Portfolio/Projekt-no1"
    },
    {
        title: "UFC",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5,
        link: "/Portfolio/Projekt-no2"
    },
    {
        title: "Lincoln",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67,
        link: "/Portfolio/Projekt-no3"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    );
}
