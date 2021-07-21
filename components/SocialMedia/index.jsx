import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function SocialMedia() {
const icons = [
  {
    iconVar: faGithub, 
    link: "https://github.com/farelreza",
  },
  {
    iconVar: faLinkedinIn,
    link: "https://www.linkedin.com/in/sultan-farel-syah-reza-46042b1b2/"
  },
  {
    iconVar: faEnvelope,
    link: "mailto:rezafarel320@gmail.com"
  }
]
  
return (
    <div className='flex gap-4'>
      {icons.map((icon,i)=>(
        <Link key={i} href={icon.link}>
          <a target="_blank">
            <FontAwesomeIcon className='text-2xl'  icon={icon.iconVar}/>
          </a>
        </Link>
      ))}
    </div>
  )
}
