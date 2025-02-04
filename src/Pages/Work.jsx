import './animation.css';
import ProjectCard from '../Components/ProjectCard';
import { ProjectDetails } from '../Details/ProjectDetails';

export default function Work() {
    return (
        <div className="lg:left-64 w-full lg:w-[calc(100vw-18rem)] flex flex-col min-h-screen overflow-x-hidden p-3 text-white items-center overflow-y-auto">

            {/* Header Section (Now Scrolls) */}
            <div className="text-center mb-6 w-full">
                <h1 className="font-bold text-4xl sm:text-5xl text-[#FFA500]">Things</h1>
                <h1 className="font-bold text-4xl sm:text-5xl">I've Built</h1>
            </div>

            {/* Scrollable Project Cards Grid */}
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {ProjectDetails.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
