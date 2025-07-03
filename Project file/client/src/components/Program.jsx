export default function program(props){
    return(
        <div className="h-32 w-full bg-white p-2 pl-4 border rounded-md hover:shadow-md flex justify-between flex-col">
            <div>
                <h1 className="text-black font-bold text-lg">{props.name}</h1>
                <p className="text-slate-500 font-semibold">{props.discipline}</p>
            </div>
            

            <p className="text-slate-500 font-semibold">{props.metadata}</p>

        </div>
    )
}