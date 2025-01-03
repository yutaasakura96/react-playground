import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div>
      <h1>Student Details</h1>
      <p>First Name: {props.student.firstName}</p>
      <p>Last Name: {props.student.lastName}</p>
      <p>Email: {props.student.email}</p>
      <p>Skills: {props.data.join(', ')}</p>
    </div>
  )
}

Student.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Student;
