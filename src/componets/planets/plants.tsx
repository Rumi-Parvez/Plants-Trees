export function Plants({tree}) {
    
    return (
        <>
        
        <div>

        <div className="maindiv">
            
            <img src={tree.image} alt={tree.description} />

            <h1>{tree.name}</h1>
            <p>{tree.description}</p>
        </div>
            
        </div>


        </>
    )
}