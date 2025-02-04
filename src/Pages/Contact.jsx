import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
mapboxgl.accessToken = "pk.eyJ1IjoibGVnaXRjb2RlciIsImEiOiJjbHVrdGlrYmswcGJoMm1uMjg4dHhsNGdtIn0.orFiK8K288Egf23pki-Tgw"; // Replace with your Mapbox token

export default function Contact() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(85.36);
    const [lat, setLat] = useState(26.12);
    const [zoom, setZoom] = useState(9);

    const [details, setDetails] = useState({ name: "", email: "", subject: "", message: "" });

    function valueHandler(e) {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function submitHandler(e) {
        e.preventDefault(); // Prevent form submission
        console.log(details);
    }

    function resetHandler() {
        setDetails({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    useEffect(() => {
        if (map.current) return; // Initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        const marker = new mapboxgl.Marker()
            .setLngLat([85.36, 26.12])
            .addTo(map.current);

        // Add resize event listener to make the map responsive
        window.addEventListener("resize", () => {
            map.current.resize();
        });

        // Cleanup
        return () => window.removeEventListener("resize", () => {
            map.current.resize();
        });
    }, []);

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen p-4 bg-gray-900 overflow-hidden gap-3">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md ">
                    <h1 className="text-4xl font-bold text-[#FFA500] text-center mb-6">
                        Contact Me
                    </h1>
                    <form onSubmit={submitHandler} className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                className="bg-[#07101F] p-3 w-full text-white placeholder-gray-400 rounded"
                                placeholder="Name"
                                type="text"
                                name="name"
                                value={details.name}
                                onChange={valueHandler}
                            />
                            <input
                                className="bg-[#07101F] p-3 w-full text-white placeholder-gray-400 rounded"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={details.email}
                                onChange={valueHandler}
                            />
                        </div>
                        <input
                            className="bg-[#07101F] p-3 w-full text-white placeholder-gray-400 rounded"
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            value={details.subject}
                            onChange={valueHandler}
                        />
                        <textarea
                            className="bg-[#07101F] p-3 w-full h-32 text-white placeholder-gray-400 rounded"
                            placeholder="Your Message"
                            name="message"
                            value={details.message}
                            onChange={valueHandler}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#07101F] p-3 w-full text-white hover:text-[#FFA500] rounded"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-1/2 relative h-[600px] lg:h-full">
                <div className="absolute z-10 bg-[#07101F] p-1 lg:p-4 top-4 left-4 rounded-lg shadow-lg ">
                    <h1 className="text-[#FFA500] text-2xl font-semibold">Rajnish Puri</h1>
                    <div className="flex items-center gap-3 mt-2">
                        <svg stroke="currentColor" fill="#FFA500" strokeWidth="0" viewBox="0 0 576 512" className="text-primary" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                        <h2 className="text-white text-lg font-light">Gobarsahi, Muzaffarpur, Bihar, India, 823146</h2>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                        <svg stroke="currentColor" fill="#FFA500" strokeWidth="0" viewBox="0 0 512 512" className="text-primary" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                        <h2 className="text-white text-lg font-light">rajnishpuri15@gmail.com</h2>
                    </div>
                </div>
                <div ref={mapContainer} className="absolute z-0 w-full h-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
}