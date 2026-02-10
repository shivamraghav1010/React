import Price from './price'

export default function card({title,idx}){
    let oldprice = ["12,495","11,900","1,599","599"];
    let newprice = ["11,995","10,900","1,299","499"];
    let description = [
                    ["8,000 DPI", " low latency"],["Precision and low latency","8,000 DPI"],["RGB lighting","Precision"],["Ergonomic design,","RGB lighting"]]
     return(
        <div className="card">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
     )
}