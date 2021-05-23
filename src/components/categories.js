import { connect } from "react-redux";
import { food, electronics } from "../store/action";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Category = (props) => {
    let value;
  console.log("props.categories", props?.categories?.categories[0]);
    function handleChange() {
      
    if (props?.categories?.categories[0].name === "FOOD") {
        value = 0
    }
    if (props?.categories?.categories[0].name === "ELECTRONICS") {
        value = 1;
    }
}
console.log({value})
  return (
      <section>
      <div id="tabs">
        <Tabs
          onChange={handleChange()}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          
        >
          <Tab onClick={() => {props.food('FOOD')}} label="FOOD" />
          <Tab onClick={() => {props.electronics('ELECTRONICS')}} label="ELECTRONICS" />
        </Tabs>
      </div>
      <div id="categoryTitle" >
        <h3>{props?.categories?.categories[0].displayName}</h3>
        <p>{props?.categories?.categories[0].description}</p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const mapDispatchToProps = { food, electronics };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
