const Home = () => {
    return (
        <div className="m-5">
            <div className="p-10 border-2 border-dashed text-center text-lg font-semibold">Feature of Application</div>
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5 mt-5">
                <div className="p-10 border border-black text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold underline">Course List</h1>
                    <p>Learner can directly see the courses available for him/her to enroll. There is a View Course Details button that opens a new page with course details</p>
                </div>
                <div className="p-10 border border-black text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold underline">Course Details</h1>
                    <p>This page displays all the neccessory details like course duration, location, syllabus, etc...</p>
                </div>
                <div className="p-10 border border-black text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold underline">Dashboard</h1>
                    <p>Here is the list of all the courses that the user has enrolled. Each course box shows the progress & due date</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home