import Tests from "./Tests";
import hola from '../.././data.json'
import reactionImg from './../../assets/images/icon-reaction.svg'
import memoryImg from './../../assets/images/icon-memory.svg'
import verbalImg from './../../assets/images/icon-verbal.svg'
import visualImg from './../../assets/images/icon-visual.svg'


export default function Summary() {

    return (
        <div className='p-5 text-lg md:p-10 md:w-full'>
            <h1 className="mb-3 text-2xl font-bold text-dark-gray-blue">Summary</h1>
            <div>
                <Tests 
                className='bg-alpha-light-red text-light-red' 
                src={reactionImg} 
                alt={`${hola[0].category} icon`} 
                category={hola[0].category} 
                score={hola[0].score}
                />

                <Tests 
                className='bg-alpha-orangey-yellow text-orangey-yellow' 
                src={memoryImg} 
                alt={`${hola[1].category} icon`} 
                category={hola[1].category} 
                score={hola[1].score}
                />
                
                <Tests 
                className='bg-alpha-green-teal text-green-teal' 
                src={verbalImg} 
                alt={`${hola[2].category} icon`} 
                category={hola[2].category} 
                score={hola[2].score}
                />

                <Tests 
                className='bg-alpha-cobalt-blue text-cobalt-blue' 
                src={visualImg} 
                alt={`${hola[3].category} icon`} 
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

