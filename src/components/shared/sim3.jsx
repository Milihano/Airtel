import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Sim03({img,body,body2,button}) {

    return (
        <div className="px-[2rem] border w-[60rem] flex flex-col justify-between">
            <h2 className="text-[2rem] w-[16.5rem]">
                {body} <span className="text-[red]"> {body2}</span>
            </h2>
            <div className="flex justify-between text-[5rem]">
                <button className="flex items-center text-[1.6rem] text-[red]">
                    {button} <AiOutlineArrowRight/>
                </button>
                {img}                
            </div>                
            
        </div>
    )
}