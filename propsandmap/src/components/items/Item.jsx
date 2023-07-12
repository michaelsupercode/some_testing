const Item = (props) => {
    console.log(props);
    return (
        <div>
            <p>Name {props.artikel.namen}</p>
            <p>Beschreibung {props.artikel.beschreibung}</p>
            <p>Preis {props.artikel.preis}</p>
        </div>
    )
}

export default Item