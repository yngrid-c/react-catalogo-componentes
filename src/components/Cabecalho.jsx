function Cabecalho(props) {
  return (
    <>
    <div className="cabecalho">
      <h1>Catálogo de Cursos</h1>
      <p>{props.descricao}</p>
    </div>
    </>
  )
}

export default Cabecalho
