



export default function Sim01({img,body}) {


    return (
       
        <div className="flex bg-[white] border rounded py-[0.2rem] px-[2rem] justify-between items-center text-center space-x-3">
            <div>
                <img src={img} className="w-[1.5rem]" alt="01" />
            </div>                        
            <p>{body}</p>
        </div>

    )
}