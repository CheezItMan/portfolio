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
import { LoginWithGoogleButton } from './firebase-auth/LoginWithGoogleButton';
import { LoginStatus } from './firebase-auth/login_status';
import { LoginWithGithubButton } from './firebase-auth/Login_with_github_button';

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
  const [user, , status] = useUser();

  const name = user && user.displayName ? user.displayName : 'Logged Out';
  let statusMessage = 'Logged in';
  if (status === LoginStatus.LoggedOut) {
    statusMessage = 'Logged Out!'
  } else if (status === LoginStatus.Pending) {
    statusMessage = 'Pending...';
  }

  
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar>
            <Avatar owner={owner} avatarPic={avatarPic} twitterUrl={twitterUrl} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
            <p>{name}</p>
            <p>{statusMessage}</p>

            <MainMenu links={menuLinks} />
            <LoginWithGoogleButton text="Login with Google!" />
            <LoginWithGithubButton text = "Github Login" />
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
