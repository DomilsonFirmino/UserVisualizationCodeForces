function Problem({problems, children}){
    return(
        <div className="problem top-1">
            <p>{problems.name}</p>
            <a href={problems.link}>Resolver o problema</a>
            <div>{children}</div>
        </div>
    )
}

export default Problem;