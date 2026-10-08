function CardCurso(props) {
  return (
    <>
    <div className="CardCurso">
      <h1>{props.nome}</h1>
      <p><strong>Duração: </strong>{props.duracao}</p>
      <p><strong>Modalidade: </strong>{props.modalidade}</p>
      <p><strong>Nivel: </strong>{props.nivel}</p>
      <p>{props.vagas > 0? "Vagas disponíveis" : "Turma completa"}</p>
    </div>
    </>
  )
}

export default CardCurso