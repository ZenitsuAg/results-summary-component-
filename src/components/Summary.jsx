import Tests from "./Tests";
import hola from '../.././data.json'

export default function Summary() {

    return (
        <div className='p-5 text-lg md:p-10 md:w-full'>
            <h1 className="mb-3 text-2xl font-bold text-dark-gray-blue">Summary</h1>
            <div>
                <Tests 
                className='bg-alpha-light-red text-light-red' 
                src={hola[0].icon} 
                alt={`${hola[0].icon}`} 
                category={hola[0].category} 
                score={hola[0].score}
                />

                <Tests 
                className='bg-alpha-orangey-yellow text-orangey-yellow' 
                src={hola[1].icon} 
                alt={`${hola[1].icon}`} 
                category={hola[1].category} 
                score={hola[1].score}
                />
                
                <Tests 
                className='bg-alpha-green-teal text-green-teal' 
                src={hola[2].icon} 
                alt={`${hola[2].icon}`} 
                category={hola[2].category} 
                score={hola[2].score}
                />

                <Tests 
                className='bg-alpha-cobalt-blue text-cobalt-blue' 
                src={hola[3].icon} 
                alt={`${hola[3].icon}`} 
                category={hola[3].category} 
                score={hola[3].score}
                />

            </div>

            <div>
                <button className='w-full p-3 mt-2 text-white rounded-full bg-dark-gray-blue hover:bg-cobalt-blue'>Continue</button>
            </div>
            
        </div>
    )
}

