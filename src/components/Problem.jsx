function Problem({problems}){
    return(
        <div className="problem top-__1">
            <p>{problems.name}</p>
            <a href={problems.link}>Resolver o problema</a>
        </div>
    )
}

export default Problem;