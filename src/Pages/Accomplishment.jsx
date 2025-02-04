import { AccomplishmentDetails } from "../Details/Accomplishment";

export default function Accomplishment() {
    return (
        <div className="lg:left-64 w-full lg:w-[calc(100vw-18rem)] flex flex-col min-h-screen overflow-x-hidden p-3 text-white items-center overflow-y-auto">

            {/* Header Section (Now Scrolls) */}
            <div className="text-center mb-6 w-full">
                <h1 className="font-bold text-4xl sm:text-5xl text-[#FFA500]">Accomplishments</h1>
            </div>

            {/* Scrollable Accomplishments Grid */}
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {AccomplishmentDetails.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-md">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 md:h-48 object-contain mb-4 rounded-lg"
                            />
                            <h2 className="text-2xl font-semibold text-[#FFA500]">{item.name}</h2>
                            <p className="text-gray-300">{item.description}</p>
                            <span className="text-sm text-gray-400">{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
