function Destaque(props) {
  return (
    <>
    <div className="Destaque">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
    </div>
    </>
  )
}

export default Destaque