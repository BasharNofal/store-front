const initialState = {
  arrOfProducts: [
    {
      name: "Apple",
      category: "FOOD",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus quos sit quae, reiciendis fugiat cupiditate blanditiis. ",
      url: "http://www.printshop.com/media/33231/3_499x285.jpg",
      price: "3$",
    },
    {
      name: "Banana",
      category: "FOOD",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus quos sit quae, reiciendis fugiat cupiditate blanditiis. ",
      url: "https://www.buoybowls.com/application/files/7016/1275/0524/ingredient-bananas.jpg",
      price: "3$",
    },
    {
      name: "S21 ultra",
      category: "ELECTRONICS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus quos sit quae, reiciendis fugiat cupiditate blanditiis. ",
      url: "https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-note20-ultra-vs-s21-ultra/-347x151/gsmarena_001.jpg",
      price: "3$",
    },
    {
      name: "Razer Huntsman mini",
      category: "ELECTRONICS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis minima earum vero delectus quos sit quae, reiciendis fugiat cupiditate blanditiis. ",
      url: "https://img.gkbcdn.com/s3/p/2020-08-10/Razer-Huntsman-Mini-RZ03-03390100-R3M1-425951-0.jpg",
      price: "3$",
    },
  ],
};

const productsList = (state, action) => {
  state = initialState;
  const { type, payload } = action;
  let arrOfProducts;
  switch (type) {
    case "ELECTRONICS":
      arrOfProducts = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { arrOfProducts };

    case "FOOD":
      arrOfProducts = state.arrOfProducts.filter((product) => {
        return product.category === payload;
      });
      return { arrOfProducts };
    default:
      return null;
  }
};

export default productsList;