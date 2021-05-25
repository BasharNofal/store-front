import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/action';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Products = (props) => {

  const state = useSelector(state => {
    return {
      products: state.products, categories: state.categories
    };
  });

  const dispatch = useDispatch();

    return (        
        <section id="productListSection">
            <ul id='productList'>
                {
                    state?.products?.map(product => {
                      if(product?.category === state.categories.activeCategory){
                        return <li className="listCard" style={{listStyle:'none'}} key={product?.name}><Card >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={product.url}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {product.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            View Details
                          </Button>
                          <Button size="small" color="primary" onClick={(() => {dispatch(addItem(product))})}>
                            Add TO Cart
                          </Button>
                        </CardActions>
                      </Card></li>
                      }
                    })
                }
            </ul>
        </section>
    )
}

export default Products;