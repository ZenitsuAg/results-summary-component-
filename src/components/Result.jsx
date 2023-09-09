export default function Result() {
    return (
        <div className="flex flex-col items-center justify-between text-center bg-gradient-to-br from-special-1 to-special-2 text-light-lavender font-hanken p-9 rounded-b-3xl md:w-full md:rounded-3xl md:p-8">
            <p className="mb-8 text-2xl">Your Result</p>

            <div className="flex flex-col items-center justify-center w-48 h-48 font-extrabold rounded-full bg-gradient-to-b from-circle-persian-blue to-circle-violet-blue">
                <h1 className="text-white text-7xl">76</h1>
                <span className='text-light-lavender'>of 100</span>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-medium text-white">Great</h2>
                <p className="p-2 text-lg">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}