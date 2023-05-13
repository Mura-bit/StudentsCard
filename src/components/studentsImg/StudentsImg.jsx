import "./studentsImg.style.css";

 
const StudentsImg = (props) => {
    return (
      <div className="section">
        <img src={props} />
        {/* <img src={Fox} />
        <img src={Lion} />
        <img src={Tiger} />
        <img src={Elephant} />
        <img src={Kangaroo} /> */}
      </div>
    );
}

export default StudentsImg;