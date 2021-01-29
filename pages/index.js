import db from '../db.json'

import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <h2>Titulo 2</h2>
            <p>
              Venha jogar
            </p>
          </Widget.Content>
        </Widget>  
        <Widget>
          <Widget.Content>
            <h1>Começar</h1>
            <button>Começar</button>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl='/'/>
    </QuizBackground>
  )
}
