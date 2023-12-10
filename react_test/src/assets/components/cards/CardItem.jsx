const CardItem = (props) => {
    console.log(props);
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div>
                <p>{props.skills[0]}</p>
                <p>{props.skills[1]}</p>
                <p>{props.skills[2]}</p>
            </div>
        </article>
    );
}

export default CardItem;