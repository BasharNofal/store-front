import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addRemoteItem } from "../store/actionWithThunk"
import { getProducts } from "../store/actionWithThunk";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const api = 'https://api-js401.herokuapp.com/api/v1/products';
const Products = (props) => {

    const state = useSelector((state) => {
        return {
            products: state.arrOfProducts,
			categories: state.categories,
		};
	});
    
	const dispatch = useDispatch();

    const getData = () => {
        dispatch(getProducts(api));
    }
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

	return (
		<section id="productListSection">
			<ul id="productList">
				{state?.products
					?.filter(
						(product) =>
							product?.category ===
								state?.categories?.activeCategory &&
							product.inStock > 0
					)
					.map((product) => {
						return (
							<li
								className="listCard"
								style={{ listStyle: "none" }}
								key={product?.name}
							>
								<Card>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="140"
											image={product.url}
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
											>
												{product.name}
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												{product.description}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											View Details
										</Button>
										<Button
											size="small"
											color="primary"
											onClick={() => {
												dispatch(addRemoteItem(product,`${api}/${product._id}`));
											}}
										>
											Add TO Cart
										</Button>
									</CardActions>
								</Card>
							</li>
						);
					})}
			</ul>
		</section>
	);
};

export default Products;
