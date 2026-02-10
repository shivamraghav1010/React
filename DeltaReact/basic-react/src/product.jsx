export default function Product({title,price,features,color}){

    const list = features.map((feature)=><li>{feature}</li>);
    let styles = {backgroundColor: price>10000 ? "lightgreen":"lightcoral"}
        return(
            <div style={{...styles, color: color}}>
                <h2>{title}</h2>
                <p >{price >10000 ? "Discount of 5%":""}</p>
                {price >10000 ? <p>"Discount of 5%"</p>:null}
                <ul>{list}</ul>
            </div>
        )
}