export default function Tests({ className, src, alt, category, score }) {
    return (
        <div className={`flex justify-between p-4 rounded-lg mb-3 font-medium ${className}`}>
            <div className='flex gap-2'>
                <img src={src} alt={alt} />
                <p>{category}</p>
            </div>
            <div>
                <span className='text-dark-gray-blue'>{score}</span>
                <span className='text-slate-400'> / 100</span>
            </div>
        </div>
    )
}