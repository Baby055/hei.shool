import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

 function Headers() {
    return (
    <>
      <div>
        <div className='header'>
          <div className='gauche'>
            <img src="./Assets/Logo-e1662790239183.png" alt="Logo" className='Logo_hei'/>
          </div>
          <div className='droite'>
            <button className='btn1'>Acceuil</button>
            <button className='btn1'>Actualités</button>
            <button className='btn1'>Bourse d'études</button>
            <button className='btn1'>Inscription</button>
            <button className='btn2'>Intranet</button>
          </div>
        </div>
      </div>
    </>
  )
}

function Body1() {
  return <>
    <div className='content'>
        <div className='Title'>
          <h1>Haute Ecole d'Informatique</h1>
        </div>
        <div>
          <p className='text'>Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudians.</p>
        </div>
        <div className='body_btn'>
          <button className='b_btn1'>Inscrivez-vous ici</button>
          <button className='b_btn2'>Emploi du temps</button>
          <button className='b_btn3'>Programme pédagogique</button>
        </div>
        <div>
         <p className='mesupres'>Habilitation MESupRES, suivant l'ârrêté n°31309/2023</p>
        </div>
    </div>
  </>
}

function Body2() {
  return <>
    <div className='body2'>
      <div className='b2_gauche'>
        <img src=".\Assets\A-propos-left-1.webp" alt="Photo de 2 personnes" className='img2'/>
      </div>
      <div className='b2_droite'>
        <div className='b1'>
          <h1 className='title_b1'>A propos de nous</h1>
        </div>
        <div className='b2'>
           <h1 className='title_b'><FontAwesomeIcon icon={faGraduationCap} />3 ans</h1>
           <br />
           <p className='b_text'>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
        </div>
        <div className='b3'>
          <h1 className='title_b'><FontAwesomeIcon icon={faUsers} /> 250 Etudiants</h1>
          <br />
          <p className='b_text'>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
        </div>
        <div className='b4'>
          <h1 className='title_b'><FontAwesomeIcon icon={faMedal} /> Notre mission</h1>
          <br />
          <p className='b_text'>Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
        </div>
      </div>
    </div>
  </>
}
function App() {
  return <>
    <Headers />
    <Body1 />
    <Body2 />
  </>
}

export default App
