export default function Result() {
    return (
        <div className="flex flex-col bg-cobalt-blue text-light-lavender font-hanken p-9 items-center text-center rounded-b-3xl">
            <p className="mb-4 ">Your Result</p>

            <div className="font-bold rounded-full w-32 h-32 bg-gradient-to-b from-circle-violet-blue from-30% to-circle-persian-blue flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white">76</h1>
                <span>of 100</span>
            </div>

            <div className="p-4">
                <h2 className="text-2xl text-white font-bold">Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}