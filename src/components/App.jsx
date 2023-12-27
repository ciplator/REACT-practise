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
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const App = () => {
  return (
    <section>
      <h1>Hello FSON89🥳</h1>

      <ul>
        {months.map(month => <li key={month}>{month}</li>)}
      </ul>

      {productsData.map(product => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        );
      })}

      {/* <Product title="Tacos With Lime" price="10.99" discount={null} />
      <Product title="Tacos L" price="7.66" discount={1.5} />
      <Product title="Tacos S" price="4.55" discount={2.33} /> */}
    </section>
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
      {discount ? (<h3> Discount :{discount}$</h3>) : (<p>sorry </p> )}
      <p>Price: {price}</p>
      <button type="button"> Add to cart</button>
    </div>
  );
};
