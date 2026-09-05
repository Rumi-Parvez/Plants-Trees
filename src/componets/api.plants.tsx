import { use } from "react"
import { Plants } from "./planets/plants"

export function ApiPush({plantsAPIPermision}) {
    const plantTrees = use(plantsAPIPermision)
    return (
        <>
        <div>
            <div className="mainClass">

        {
            plantTrees.map( tree => <Plants tree={tree}></Plants>)
        }

        </div>
        </div>
        
        </>
    )
}