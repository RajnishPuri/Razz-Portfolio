import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-[#FFA500]">{project.name}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-sm text-gray-400 mt-2"><strong>Technologies: </strong>
                {project.technologies.map((tech, index) => (
                    <span key={index} className="text-gray-400">
                        {tech}
                        {index < project.technologies.length - 1 ? ', ' : ''}
                    </span>
                ))}
            </p>
            <div className="flex gap-4 mt-4">
                {
                    project.github?.frontend ? <a href={project.github.frontend} target="_blank" className="text-blue-400 underline">Frontend</a> : <a href={project.github} target="_blank" className="text-blue-400 underline">GitHub</a>
                }
                {project.github?.backend && <a href={project.github.backend} target="_blank" className="text-blue-400 underline">Backend</a>}
            </div>
            {project.url !== "Not Hosted" && (
                <a href={project.url} target="_blank" className="block mt-4 text-green-400 underline">Live Demo</a>
            )}
        </div>
    );
};

export default ProjectCard