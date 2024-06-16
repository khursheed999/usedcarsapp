const Button=(props)=>{
    const {className,name,onClick, type}=props;
    return <div>
        <button
        type={type}
         className={className}
         onClick={onClick}>
          {name }  
        </button>
    </div>
}
export default Button;