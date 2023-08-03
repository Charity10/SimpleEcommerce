

export const CategoryItem = ({category}) =>{
    const { imageUrl, title, id } = category
return (
        <div key={id} className="category-container">
          <div className="background-image"
            style={{backgroundImage: `url(${imageUrl})`} }
          ></div>
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Shop Now!!!</p>
          </div>
        </div>
    )
}

