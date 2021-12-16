// import package for property types
import PropTypes from "prop-types"

// create component here
const DetailAbout = (props) => {
    return (
        <>
            <h1>Title : {props.title}</h1>
            <p>summary : {props.summary} </p>
            <p>Total Guest : {props.total} </p>
        </>
    )
}

// define property type for this component here
DetailAbout.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    total: PropTypes.number
}

export default DetailAbout