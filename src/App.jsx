import "bulma/css/bulma.css";
import { ProfileCard } from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import siriImage from "./images/siri.png";
import cortanaImage from "./images/cortana.png";

export const App = () => {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistans</p>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="alexa"
                handle="@alexa99"
                image={alexaImage}
                description="Alexa was create by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="cortana"
                handle="@cortana99"
                image={siriImage}
                description="Cortana was made by Microsoft. Who knows wath is does?"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="siri"
                handle="@siri99"
                image={cortanaImage}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
