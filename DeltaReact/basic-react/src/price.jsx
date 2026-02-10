export default function Price({oldprice,newprice})
{
    let oldstyle = {textDecoration: "line-through"}
    let newstyle = {fontWeight:"bold"}
    let styles = {backgroundColor: "lightgray", padding: "5px", borderRadius: "5px", borderBottomLeftRadius:"14px", borderBottomRightRadius:"14px"}
    return(
        <div style={styles}>
            <span style={oldstyle}>{oldprice}</span>
            &nbsp; &nbsp;
            <span style={newstyle}>{newprice}</span>
        </div>
    )
}