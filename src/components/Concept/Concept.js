import Change from '../New_Change/Change';


function Concept(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Change></Change>
    </li>
  );
}

export default Concept;
