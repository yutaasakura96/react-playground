import PropTypes from 'prop-types';

const Student = ({ student }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <p>First Name: {student.firstName}</p>
      <p>Last Name: {student.lastName}</p>
      <p>Email: {student.email}</p>
      <p>Skills: {student.skills.join(', ')}</p>
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
