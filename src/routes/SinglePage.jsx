import { useParams } from "react-router-dom";
const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description: 'This application lets us add to-dos, edit and delete items',
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description: 'Nitin Shekhar experimenting with React',
  }
];
const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
    return (
      <div className="main_content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  export default SinglePage;
  