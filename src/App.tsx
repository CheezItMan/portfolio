import './App.scss';

import Avatar from './components/avatar';
import MainMenu, {LinkEntry} from './components/main_menu';
import Sidebar from './components/sidebar';
import Contact from './components/contact';
import Splash from './components/splash';
import About from './components/about';
import Portfolio from './components/portfolio';

const owner = 'Bozo the Clown'
const avatarPic = 'http://placekitten.com/120/120';
const menuLinks: LinkEntry[] = [
  {
    icon: "bi bi-house-door",
    text: "Home",
    url: "https://cheezitman.github.io/portfolio",
    active: true,
  },
  {
    icon: "bi bi-info-square",
    text: "About",
    url: "https://cheezitman.github.io/portfolio/about",
    active: false,
  },
  {
    icon: "bi bi-sticky",
    text: "Portfolio",
    url: "https://cheezitman.github.io/portfolio/portfolio",
    active: false,
  },
  {
    icon: "bi bi-mailbox",
    text: "Contact",
    url: "https://cheezitman.github.io/portfolio/contact",
    active: false,
  },
]
const name = 'Bob Hope'
const skills = ['developer', 'designer', 'freelancer', 'photographer']

// lat: 41.8781, lng: -87.6298
const App = () => {

  const sendEmail = (msgData: MessageData) => {
    console.log('Sending Email', msgData)

  }

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar>
            <Avatar owner={owner} avatarPic={avatarPic} />
            <MainMenu links={menuLinks} />
        </Sidebar>
      </div>
      <div className="content">
        <Splash name={name} skills={skills} />
        <About />
        <Portfolio />
        <Contact 
        name="Bob Hope" 
        email="bob@hope.com"  
        lon={-87.6298}
        lat={41.8781}
        city="Chicago"
        state="Il"
        onSendMsg={sendEmail}
      />
      </div>
    </div>
  );
}

export default App;
