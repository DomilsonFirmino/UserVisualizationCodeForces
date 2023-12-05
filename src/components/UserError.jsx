function Error({error}){
    return(
        <div style={{display: "grid", height:"100%", placeItems: "center",color:"red"}}>
            <div className="fs-900 text-center fw-600">
                <p className="">❌</p>
                <p className="" >{error}</p>
            </div>
        </div>
    )
}

export default Error