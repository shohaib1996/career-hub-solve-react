import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className='bg-gradient-to-r from-[#7E90FE0C] to-[#9873FF0D] p-8 space-y-3'>
           <img src={logo} alt="" /> 
           <p className='text-xl font-bold'>{category_name}</p>
           <p>{availability}</p>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category;