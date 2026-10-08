import Cabecalho from './components/Cabecalho'
import CardCurso from './components/CardCurso'
import Destaque from './components/Destaque'
import './App.css'

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 5
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "400 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 0
  },
  {
    nome: "Programação Web",
    duracao: "200 horas",
    modalidade: "Online",
    nivel: "Livre",
    vagas: 20
  },
  {
    nome: "Banco de Dados",
    duracao: "160 horas",
    modalidade: "Híbrido",
    nivel: "Livre",
    vagas: 0
  },
  {
    nome: "Desenvolvimento Mobile",
    duracao: "240 horas",
    modalidade: "Online",
    nivel: "Livre",
    vagas: 8
  }
]

function App() {
  return (
    <>
      <Cabecalho descricao= "Conheça algumas formações disponíveis na área de tecnologia."/>

      {cursos.map(function (curso){
        return (
          <CardCurso
          key= {curso.cursos}
          nome={curso.nome}
          duracao={curso.duracao}
          modalidade={curso.modalidade}
          nivel={curso.nivel}
          vagas={curso.vagas}
          />
        )
      })}

        <Destaque
         titulo="Aprenda fazendo"
         texto="Desenvolva projetos durante sua formação."
        />

        <Destaque
         titulo="Professores experientes"
         texto="Aprenda com profissionais que atuam no mercado."
        />

        <Destaque
         titulo="Pronto para o mercado"
         texto="Conteúdos alinhados às demandas das empresas."
        />
    </>
  )
}

export default App
