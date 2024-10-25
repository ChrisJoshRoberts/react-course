import PropTypes from "prop-types"
import "../assets/CategoryCard.css"

const CategoryCard = ({tag, title, content}) => {
  return (
    <div className="cardContainer" >
      <img className="image" src="/777-logo.png" alt="Logo" />
      <div className="cardDataContainer">
        <p className="tag">{tag}</p>
        <h4 className="cardTitle">{title}</h4>
        <p className="cardContent">{content}</p>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}

export default CategoryCard