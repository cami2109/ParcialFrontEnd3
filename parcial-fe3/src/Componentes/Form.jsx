

const Form = () => {

    const [cliente,setcliente]=useState({
        Nombre:'',
        Color:'',
    });

    const[show,setShow]=useState(false);
    const[error,setError]=useState(false);

    const handlerSubmit=()=>{
        Event.preventDefault();
        if(cliente.Nombre.length<3 && cliente.Color.length>6){
            setShow(true)}
        else {setError(true)}

    }

  return (
    <div>
    <form onSubmit={handlerSubmit}>

    <label>Nombre</label>
    <input type="text" onChange={(Event)=> setcliente({...cliente,Nombre:Event.target.value})}/>

    <label>Color favorito</label>

    <input type="text" onChange={(Event)=>setcliente({...cliente,Color:Event.target.value})}/>

    <button>Enviar</button>

    </form>
    {show && <Card cliente={cliente}/>}
    {error && <Errormes/>}
    <h3>Nombre: {Nombre}</h3>
    <h3>Color: {Color}</h3>
    </div>
  )
}
export default form
