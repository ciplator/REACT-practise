const productsData = [
  {
    id: '3',
    title: 'Tacos With Lime M',
    price: 5.85,
    discount: 15,
  },
  {
    id: '1',
    title: 'Tacos With Lime XXL',
    price: 10.99,
    discount: 30,
  },
  {
    id: '2',
    title: 'Tacos With Lime XL',
    price: 6.99,
    discount: null,
  },
];

export const App = () => {
  return (
    <div>
      <button type="button" className="my-button">
        my first button
      </button>

      <Product title="taco with lime" price="10.99" discount={null} />
      <Product title="taco L" price="8.99" discount={1.5} />
      <Product title="taco M" price="6.99" discount={2.33} />

      <p>React homework template</p>
    </div>
  );
};
const Product = ({ title, price, discount }) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="product"
      />

      <h2>
        {title} <span></span>
      </h2>
      {discount && <h3> Discount :{discount}$</h3>}
      <p>Price: {price}</p>
      <button type="button"> Add to cart</button>
    </div>
  );
};
