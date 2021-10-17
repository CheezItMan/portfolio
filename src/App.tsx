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
import { useUser } from './firebase-auth/useFirebaseAuth';
import { LoginWithGithubButton } from './firebase-auth/LoginWithGithubButton';

const owner = 'Bozo the Clown'
const avatarPic = 'http://placekitten.com/120/120';
const menuLinks: LinkEntry[] = [
  {
    icon: "fas fa-home",
    text: "Home",
    url: "#home",
    active: true,
  },
  {
    icon: "fas fa-portrait",
    text: "About",
    url: "#about",
    active: false,
  },
  {
    icon: "fa fa-code",
    text: "Portfolio",
    url: "#portfolio",
    active: false,
  },
  {
    icon: "fa fa-envelope",
    text: "Contact",
    url: "#contact",
    active: false,
  },
]
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
  const [user] = useUser();

  const name = user && user.displayName ? user.displayName : 'Logged Out';
  
  return (
    <div className="App" id="home">
      <div className="sidebar">
        <Sidebar>
            <Avatar owner={owner} avatarPic={avatarPic} twitterUrl={twitterUrl} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
            <MainMenu links={menuLinks} />
            <LoginWithGithubButton text = "Github Login" styling="button button--social-login button--github" />
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
