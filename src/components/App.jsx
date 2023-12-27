export const App = () => {
  return (
    <div>



      <button type="button" className="my-button">my first button</button>

<Product name = "taco with lime" price = "10.99"/>
<Product name = "taco L" price = "8.99"/>
<Product name = "taco M" price = "6.99"/>


      <p>React homework template</p>
    </div>
  );
};
const Product = ({name, price}) => {
  return (
    <div>
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
       alt="product" />

        <h3>{name}</h3>
        <p>Product description</p>
          <p>Price: {price}</p>

    </div>
  );
}

