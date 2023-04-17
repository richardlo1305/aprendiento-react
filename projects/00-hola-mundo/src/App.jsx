import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
                {
                  userName: 'Richardlo',
                  avatar: 'midudev',
                  name: 'Ricardo Lindarte'
                },
                {
                  userName: 'eospina',
                  avatar: 'hulk',
                  name: 'Edwar Ospina'
                },
                {
                  userName: 'tlindarte',
                  avatar: 'mause',
                  name: 'Liam Thomas Lindarte'
                },
              ]

export function App() {
  const addAt = (userName) => `@${userName}`;

  return(
    <section className='App'>
      {
        users.map(({userName, avatar, name}) => 
          (
            <TwitterFollowCard 
              key={ userName }
              formatUserName = { addAt }
              avatar = { avatar } 
              userName = { userName }
            >
              { name }
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}