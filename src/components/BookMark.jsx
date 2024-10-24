import PropTypes from 'prop-types';

const BookMark = ({details}) => {
  const {id, title} = details;
  return (
    <div className='p-5 bg-base-300 m-3 rounded-lg'>
      <h3 className='font-bold text-lg'>Article #{id}: {title}</h3>
    </div>
  );
};

BookMark.propTypes = {
  details : PropTypes.object
}

export default BookMark;

