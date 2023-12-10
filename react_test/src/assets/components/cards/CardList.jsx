import CardItem from "./CardItem";

const CardList = () => {

    const projectData = [
        {
            title: 'Project 1',
            description: 'I m baby man braid affogato kogi, crucifix retro organic man bun farm-to-table chartreuse occupy big mood ennui sartorial.',
            skills: ['JavaScript', 'React', 'Sass']
        },
        {
            title: 'Project 2',
            description: 'Irony palo santo solarpunk, taiyaki marfa small batch hell of ugh kogi vibecession biodiesel crucifix intelligentsia meggings. ',
            skills: ['JavaScript', 'React', 'Sass']
        },
        {
            title: 'Project 3',
            description: 'Echo park ramps vinyl, mixtape mlkshk chambray mukbang gluten-free lyft slow-carb XOXO letterpress tote bag.',
            skills: ['JavaScript', 'React', 'Sass']
        },
    ]

    return (
        <section>
            <CardItem
                title={projectData[0].title}
                description={projectData[0].description}
                skills={projectData[0].skills}
            />
            <CardItem
                title={projectData[1].title}
                description={projectData[1].description}
                skills={projectData[1].skills}
            />
            <CardItem
                title={projectData[2].title}
                description={projectData[2].description}
                skills={projectData[2].skills}
            />
        </section>
    );
}

export default CardList;