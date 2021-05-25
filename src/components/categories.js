import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../store/action";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Category = (props) => {
    let value;

    const dispatch = useDispatch();
    const state = useSelector(state => {
      return {categories: state.categories};
    });

    function handleChange() {
      if (state?.categories?.activeCategory === "FOOD") {
        value = 0
      }
      if (state?.categories?.activeCategory === "ELECTRONICS") {
        value = 1;
      }
    }

  return (
      <section>
        <Tabs
          onChange={handleChange()}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          
        >
          <Tab onClick={() => {dispatch(selectCategory('FOOD'))}} label="FOOD" />
          <Tab onClick={() => {dispatch(selectCategory('ELECTRONICS'))}} label="ELECTRONICS" />
        </Tabs>
      <div id="categoryTitle" >
        <h3>{state?.categories?.categories[0].displayName}</h3>
        <p>{state?.categories?.categories[0].description}</p>
      </div>
    </section>
  );
};


export default Category;
