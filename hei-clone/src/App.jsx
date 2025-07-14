import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


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
    <section className='a-propos'>
      <div>
        <img src="./Assets/A-propos-left-1.webp" alt="Photo de 2 personnes" className='img2'/>
      </div>

      <div className='two'>
          <div className='texte'>
            <h1 className='title_b'>A propos de nous</h1>
          </div>

        <div className='bloc'>
          <h3 className='h3_bloc'><FontAwesomeIcon icon={faGraduationCap} /> +3 ans</h3>
          <p className='para'>
            Depuis 3 ans, nous formons ceux qui décodent le futur aux métiers de l’informatique.
            <br />
            Notre équipe est composée d’experts passionnés de Madagascar et d’ailleurs.
          </p>
        </div>

        <div className='bloc'>
          <h3 className='h3_bloc'><FontAwesomeIcon icon={faUsers} /> +250 étudians</h3>
          <p className='para'>
            Plus de 250 étudiants et de nombreuses entreprises font déjà confiance à notre formation.
            <br />
            Habilitée par l’État malgache. Ensemble, nous construisons la grande famille HEI.
          </p>
        </div>
        <div className='bloc'>
          <h3 className='h3_bloc'><FontAwesomeIcon icon={faMedal} /> Notre mission</h3>
          <p className='para'>
            Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
            <br /> 
            la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
          </p>
        </div>
      </div>
    </section>
  </>
}

function Body3() {
  const membres = [
    {
      nom: 'Ryan ANDRIAMAHERY',
      titre: 'Développeur back end | Cofondateur et Directeur des opérations de HEI',
      image: './Assets/Parison-e1716502987165-300x300.png', // Remplace avec le bon chemin
    },
    {
      nom: 'Jean Aimé Maxa',
      titre: 'Responsable technique cybersécurité chez CES France Continental (Toulouse – France)',
      image: './Assets/Jean-Aime-Maxa-modified-150x150.jpg',
    },
    {
      nom: 'Parison Ravalomanda',
      titre: 'Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)',
      image: './Assets/ryan-min-300x300.webp'
    }
  ];
  return <>
    <div>
      <div className='Body3'>
        <div>
          <h1 className='equipe-titre'>L'équipe pédagogique</h1>
          <br />
          <p className='equipe-description'>
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle,
            <br />
            dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette
            <br />
            équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
          </p>
        </div>
        <div className="cartes">
          {membres.map((membre, index) =>(
            <div key={index} className='carte-membre'>
              <img src={membre.image} className='membre-image' />
              <h3 className='membre-nom'>{membre.nom}</h3>
              <p className='membre-titre'>{membre.titre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}

function Body4 () {
  return <>
    <div className='container_b4'>
      <div className='gauche_b4'>
        <h1 className='title_b4'>Quelques débouchés</h1>
        <br />
        <p className='para_b4'>
          Formez-vous à une panoplie de métiers du numérique avec nous et venez
          <br />
          acquérir les fondements de la programmation (qui vous servira pour les
          <br />
          différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des
          <br />
          métiers du futur…
          <br />
          <br />
          Développeur back end, développeur front end, développeurs mobile, chefs de
          <br />
          projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique
          <br />
          SSI, auditeur organisationnel SSI, administrateur système et réseau,
          <br />
          développeur de sécurité…
        </p>
      </div>
      <div className='droite_b4'>
            <img src=".\Assets\IMG-02-e1720543344824-987x1024-1.webp" className='b4_img' />
      </div>
    </div>
  </>
}

function Body5 () {
  const dcartes = [
    {
      img : './Assets/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png',
      titre : 'Cloud et cybersécurité',
      description : 'Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.'
    },
    {
      img : './Assets/Intelligence-artificielle_Plan-de-travail-1-150x150.png',
      titre :'Intelligence artificielle',
      description : 'Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI'
    },
    {
      img : './Assets/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png',
      titre : 'Ingénierie logicielle',
      description : 'Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.'
    },
  ]
  return <>
    <div className='container_b5'>
      <div className='haut_b5'>
        <h1 className='title_b5'>Domaines</h1>
        <br />
        <p className='para_b4'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
      </div>
      <div className='bas_b5'>
         {dcartes.map((carte, index) =>(
            <div key={index} className='carte_b5'>
              <img src={carte.image} className='carte_img' />
              <h3 className='carte_title'>{carte.titre}</h3>
              <p className='carte_description'>{carte.description}</p>
            </div>
          ))}
      </div>
    </div>
  </>
}

function Body6 () {
  return <>
    <div>
      <div className="admission-container">
        <h1 className='title_b6'>Admission</h1>
        <p className="description">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
          <br />
          une épreuve de français niveau B2 et une épreuve de mathématiques niveau Terminale D.
        </p>

        <div className="steps">
          <div className="step step1">
            <h2>01</h2>
            <h3>Dépôt de dossiers</h3>
            <p>Pour les bacheliers de toutes séries sans limite d’âge</p>
          </div>

          <div className="step step2">
            <h2>02</h2>
            <h3>Test de niveau</h3>
            <p>
              Composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
            </p>
          </div>

          <div className="step step3">
            <h2>03</h2>
            <h3>Inscription définitive</h3>
            <p>(Si test réussi)</p>
          </div>
        </div>

        <div className="buttons">
          <button className="btn-white">Inscrivez-vous ici</button>
          <button className="btn-blue">Résultat concours</button>
        </div>
      </div>

    </div>
  </>
}

function Body7 () {
  return <>
    <div>
      <div className='container_b7'>
        <div className='b7_1'>
          <div>
            <img src=".\Assets\IMG-03-e1720537524581-1024x950-1 (1).webp" className='b7_img'/>
          </div>
          <div>
            <div className='one'>
              <h1 className='title_b7'>Le prograamme pédagogique</h1>
              <br />
              <p className='para_b7'>
                Suivant le système LMD, jusqu’au Master, notre formation repose sur un
                <br />
                programme pédagogique conçu en adéquation avec les attentes du marché. La
                <br />
                formation est sanctionnée par un diplôme de Licence et de Master en
                <br />
                Informatique reconnu par le MESupRes de Madagascar.
              </p>
              <br />
              <button className='b7_btn'>Notre Programme</button>
            </div>
            <div className='contain_b7'>
              <div class="box">25%<span className='span'>Apprentissage théoriques en présentiel</span></div>
              <div class="box">25%<span className='span'>Apprentissage sur supports numériques</span></div>
              <div class="box">25%<span className='span'>Travaux individuels de l’étudiant</span></div>
              <div class="box">25%<span className='span'>Apprentissage en entreprise</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

function Body8 (){
  return <>
    <div className="langage-container">
      <div className="langage-gallery">
        <img src=".\Assets\Mask-group-1.webp" alt="Projet 1" />
        <img src=".\Assets\Mask-group-2.webp" alt="Projet 2" />
        <img src=".\Assets\Mask-group-3.webp" alt="Projet 3" />
      </div>

      <div className="langage-content">
        <h2 className='b8_title'>Les technos et langages utilisées</h2>
        <p className='p'>
          Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de
          programmation <strong>Java</strong> et <strong>JavaScript</strong>. Ces deux langages
          occupent <br /> une place de choix dans le domaine du développement logiciel et du web,
          offrant une polyvalence et une robustesse appréciées par les <br />développeurs à
          travers le monde.
        </p>
        <div className="tech-grid">
          <div className='div'><img src=".\Assets\Java-150x150.png" alt="Java" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\python-150x150.png" alt="" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\JS-150x150.png" alt="" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\C-150x150.png" alt="" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\TS-150x150.png" alt="" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\docker-300x77.png" alt="Docker" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\next.png" alt="Next.js" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\aws.png" alt="AWS" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\serverless.png" alt="Serverless" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\react.png" alt="React" className='img_b8'/></div>
          <div className='div'><img src=".\Assets\openapi.png" alt="OpenAPI" className='img_b8'/></div>
        </div>
      </div>
    </div>
  </>
}
function Body9 () {
  const partenaires = [
  { name: "NXTA", logo: "./Assets/LOGO-NEXTA.webp" },
  { name: "Passerelles Numériques", logo: "./Assets/PN_Logo_baseline_color_ENG.png" },
  { name: "Yooz", logo: "./Assets/Yooz-2023-Logo-2.webp" },
  { name: "Etech", logo: "./Assets/logo-etech.png" },
  { name: "EMIT", logo: "./Assets/logo_emit.png" },
  { name: "Numer", logo: "./Assets/Logo-Numer-vf.png" },
  { name: "Partners", logo: "./Assets/bp-logo-full-1024x331.webp" },
  { name: "YouthFactory", logo: "./Assets/YIF_LOGO_512x512_BL_on_WH-1.webp" },
  { name: "Kante", logo: "./Assets/logo-kante-company-1.png" },
];


  return (
    <section className="partenaires-section">
      <h2 className='b9_title'>Nos partenaires</h2>
      <p className='p'>
        L’employabilité de nos étudiants se base sur la pertinence de notre
        programme pédagogique et de la composition de notre corps enseignant
        mais aussi du soutien et la collaboration des entreprises partenaires.
      </p>
      <div className="logos-container">
        {partenaires.map((p) => (
          <div className="logo-box" key={p.name}>
            <img src={p.logo} alt={p.name} />
          </div>
        ))}
      </div>
    </section>
  );

}

function Body10 () {
  return <>
    <div>
      <div className="container_b10">
        <div className="g1">
          <img src="./Assets/Logo-e1662790239183.png" alt="Logo" className='Logo_hei2'/>
          <br />
          <p className='p_g1'>Formation habilitée par l’Etat suivant le système LMD</p>
          <br />
          <p className='p_g1'>Habilitation MESupRes n°31309/2023</p>
        </div>
        <div className="g1">
          <h3 className='title_g1'>Adresse</h3>
          <br />
          <p className='p_g1'>
            II J 161 R Ambodivoanjo 
            <br />
            Ivandry Antananarivo
            <br />
            101, Madagascar
          </p>
        </div>
        <div className="g1">
          <h3 className='title_g1'>Navigation</h3>
          <br />
          <ul className='nav-list'>
            <li className='ok'><a href="#" className='lien'>Acceuil</a></li>
            <li className='ok'><a href="#" className='lien'>Actualités</a></li>
            <li className='ok'><a href="#" className='lien'>Bourse d'études</a></li>
          </ul>
        </div>
        <div className='g1'>
          <h3>Médias Sociaux</h3>
          <div className='social-icons'>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
            <i><FontAwesomeIcon icon={faInstagram} /></i>
          </div>
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
    <Body3 />
    <Body4 />
    <Body5 />
    <Body6 />
    <Body7 />
    <Body8 />
    <Body9 />
    <Body10 />
  </>
}

export default App
