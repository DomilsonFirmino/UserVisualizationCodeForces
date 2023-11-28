import "./SubmissionList.css"

function SubmissionList({children}){
    return(
        <div className="submissions">
            {children}
        </div>
    )
}
export default SubmissionList;