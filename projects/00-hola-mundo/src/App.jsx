import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return(
    <section className='App'>
      <TwitterFollowCard name = "Ricardo Lindarte" avatar = "midudev" userName = "Richardlo" />
      <TwitterFollowCard name = "Edwar Ospina" avatar = "hulk" userName = "Richardlo" />
      <TwitterFollowCard name = "Liam Thoasm Lindarte" avatar = "pepito" userName = "Richardlo" />
      <TwitterFollowCard name = "Fayber Coba" avatar = "midudev" userName = "Richardlo" />
    </section>
  )
}