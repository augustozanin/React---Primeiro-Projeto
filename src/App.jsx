import TitleWithText from "./components/TitleWithText"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <TitleWithText
        title="Titulo do blog"
        content="Conteúdo do texto" />

      <Footer
        author="Augusto Castanho"
      />


      <TitleWithText
        title="Outro Titulo"
        content="Conteúdo do texto 2" />

      <Footer
        author="Augusto Zanin"
      />

    </>


  )
}

export default App
