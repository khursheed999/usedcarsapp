

const Card2 = ({ item, img }) => {



  return <div className="card2">
    <div className="image2">
      <img src={img} alt="vehicle-image" height={150} width={150} />
    </div>
    <div className="details">
      <h2>Model:  {item.model} </h2>
      <h2>Price:  {item.price}</h2>
      <h1>{item.name}</h1>
    </div>

  </div>


}
export default Card2;