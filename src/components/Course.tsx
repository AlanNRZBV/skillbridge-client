import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();
  return <div>single course id:{id}</div>;
};

export default Course;
