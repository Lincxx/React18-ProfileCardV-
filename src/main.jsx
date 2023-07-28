/* eslint-disable react/prop-types */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const skillsData = [
  {
    skillname: 'HTML+CSS',
    icon: '💫',
    backgroundColor: 'red',
  },
  {
    skillname: 'JavaScript',
    icon: '💫',
    backgroundColor: 'yellow',
  },
  {
    skillname: 'Git & Github',
    icon: '💫',
    backgroundColor: '#4078c0',
  },
  {
    skillname: 'PHP',
    icon: '💫',
    backgroundColor: '#8892bf',
  },
  {
    skillname: 'React',
    icon: '💫',
    backgroundColor: '#61DBFB',
  },
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  )
}

const Avatar = () => {
  return <img className="avatar" src="2023-06-16.jpg" alt="Jeremy Lincoln" />
}

const Intro = () => {
  return (
    <dir>
      <h1>Jeremy Lincoln</h1>
      <p>
        Full-stack web developer and learning of new tech. When not coding, I
        enjoy hanging out with my wife and traveling to new places. Soon to
        travel somewhere new soon!
      </p>
    </dir>
  )
}

const SkillList = () => {
  return (
    <div className="skill-list">
      {skillsData.map((skill) => {
        const { skillname, icon, backgroundColor } = skill
        return (
          <Skill
            skillname={skillname}
            icon={icon}
            backgroundColor={backgroundColor}
            key={skillname}
          />
        )
      })}
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <div>
        {props.skillname}
        {props.icon}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
