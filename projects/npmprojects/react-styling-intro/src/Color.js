//ES6

let {background, title, subtitle,information} = props.color;
return( 
    <div style={{backgroundColor}}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{information}</h3>
    </div>
)
export default Color;