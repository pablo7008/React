export const ItemDetail = ({botella}) => {
    return (
        <>
            <div>{botella.id}</div>
            <div>{botella.name}</div>
            <div>{botella.category}</div>
            <div>{botella.price}</div>
            <img src={botella.img} alt={botella.name}/>
        </>
    )
}