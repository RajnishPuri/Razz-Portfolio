const FirebaseIcon = () => {
    return (
        <div className="skill-card bg-[#0e223f] hover:text-[#FFA500] hover:cursor-pointer py-8 flex justify-center rounded-md">
            <div className="space-y-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mx-auto" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path>
                </svg>
                <p className="form-text text-center">Firebase</p>
            </div>
        </div>
    )
}

export default FirebaseIcon