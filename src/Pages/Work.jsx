import ProjectCard from '../Components/ProjectCard';
import { ProjectDetails } from '../Details/ProjectDetails';

export default function Work() {
    return (
        <div className="lg:left-64 w-full flex flex-col min-h-screen overflow-x-hidden p-3 text-white items-center overflow-y-auto">
            <div className="text-center mb-6 w-full">
                <h1 className="font-bold text-4xl sm:text-5xl text-[#FFA500]">Things</h1>
                <h1 className="font-bold text-4xl sm:text-5xl">I've Built</h1>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {ProjectDetails.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-center mt-4">
                    <a href="https://github.com/RajnishPuri" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Visit My GitHub
                    </a>
                </p>
            </div>
        </div>
    );
}
