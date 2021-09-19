import './App.scss';
import Avatar from './components/avatar';
import MainMenu, { LinkEntry } from './components/main_menu';
import Sidebar from './components/sidebar';
import Contact from './components/contact';
import Splash from './components/splash';
import About from './components/about';
import Portfolio from './components/portfolio';
import Footer from './components/footer'; 
import { sendEmail } from './utilities/send_email';

const owner = 'Bozo the Clown'
const avatarPic = 'http://placekitten.com/120/120';
const menuLinks: LinkEntry[] = [
  {
    icon: "fas fa-home",
    text: "Home",
    url: "https://cheezitman.github.io/portfolio",
    active: true,
  },
  {
    icon: "fas fa-portrait",
    text: "About",
    url: "https://cheezitman.github.io/portfolio/about",
    active: false,
  },
  {
    icon: "fa fa-code",
    text: "Portfolio",
    url: "https://cheezitman.github.io/portfolio/portfolio",
    active: false,
  },
  {
    icon: "fa fa-envelope",
    text: "Contact",
    url: "https://cheezitman.github.io/portfolio/contact",
    active: false,
  },
]
const name = 'Bob Hope'
const skills = ['developer', 'designer', 'freelancer', 'photographer']
const twitterUrl = 'https://twitter.com'
const linkedinUrl = 'https://linkedin.com'
const githubUrl = 'https://github.com'

export type ProjectProps = {
  title: string,
  img: string,
  altText: string, 
  description: string,
  url: string
}

const App = () => {

  // const sendEmail = (msgData: MessageData) => {
  //   console.log('Sending Email', msgData)

  // }

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar>
            <Avatar owner={owner} avatarPic={avatarPic} twitterUrl={twitterUrl} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
            <MainMenu links={menuLinks} />
            <Footer />
        </Sidebar>
      </div>
      <div className="content">
        <Splash name={name} skills={skills} />
        <About />
        <Portfolio />
        <Contact onSendMsg={sendEmail}
      />
      </div>
    </div>
  );
}

export default App;
