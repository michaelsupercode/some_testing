import CardList from "../cards/CardList";
import Headline from "../headlines/Headline";
import Skill from "../skills/Skill";
import './Main.css';

const Main = () => {
    return (
        <main>
            <Headline inhalt={'PROJECTS'} />
            <CardList />
            <section>
                <Headline inhalt={'SKILLS'} />
                <div className="flex_skills">
                    <Skill skill={'HTML'} />
                    <Skill skill={'CSS'} />
                    <Skill skill={'Javascript'} />
                    <Skill skill={'React'} />
                </div>
                <div className="flex_skills">
                    <Skill skill={'SASS'} />
                    <Skill skill={'Tailwind CSS'} />
                    <Skill skill={'Git'} />
                    <Skill skill={'UI/UX'} />
                </div>
            </section>
        </main>
    );
}

export default Main;