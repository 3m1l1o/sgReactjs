import { ProfileCard } from './ProfileCard';
import alexaImage from './images/alexa.png';
import siriImage from './images/siri.png';
import cortanaImage from './images/cortana.png';

export const App = () => {
  return (
    <div>
        <div>Personal Digital Assistans</div>
        <ProfileCard title="alexa" userName="@alexa99" image={alexaImage}/>
        <ProfileCard title="cortana" userName="@cortana99" image={siriImage}/>
        <ProfileCard title="siri" userName="@siri99" image={cortanaImage}/>
        </div>
  )
}
