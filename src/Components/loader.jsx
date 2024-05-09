import './loader.css';

export default function Loader() {
    return (
        <div className=' flex flex-col items-center gap-4'>
            <div className='triangle'></div>
            <div className=' font-semibold text-2xl'>Raj is Working!</div>
            <div className='bar'></div>
        </div>
    )
}