import Item from "./Item"

const ItemList = () => {
    const itemArray = [
        {
            namen: "Tisch",
            beschreibung: "Guter Tisch",
            preis: 50
        },
        {
            namen: "Fisch",
            beschreibung: "Guter Fisch",
            preis: 50
        }, {
            namen: "Brot",
            beschreibung: "Gutes Brot",
            preis: 500
        },
        {
            namen: "Lastkraftwagen",
            beschreibung: "Guter Lastkraftwagen",
            preis: 5000
        },

    ]
    // return (
    //     <>
    //         <h2>Items</h2>
    //         <Item artikel={itemArray[0]} zustand="okay" />
    //         <Item artikel={itemArray[1]} zustand="okay" />
    //         <Item artikel={itemArray[2]} zustand="okay" />

    //     </>

    return (
        <>
            <h2>Items</h2>
            {itemArray.map((item, index) => <Item artikel={item} key={index} />)}

        </>

    )
}

export default ItemList