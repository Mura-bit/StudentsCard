import StudentsImg from "../studentsImg/StudentsImg.jsx";
import Belka from "../img/1pic.jpg";
import Fox from "../img/2pic.jpg";
import Lion from "../img/3pic.jpg";
import Tiger from "../img/4pic.jpg";
import Elephant from "../img/5pic.jpg";
import Kangaroo from "../img/6pic.jpg";
import Bear from "../img/7pic.jpg";
import "./studentsProfile.style.css";

const StudentsInfo = [
  {
    name: "Miller",
    email: "miller@info.gmail.com",
    src: Belka,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Duk",
    email: "duk@info.gmail.com",
    src: Fox,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Jax",
    email: "jax@info.gmail.com",
    src: Lion,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Tom",
    email: "tom@info.gmail.com",
    src: Tiger,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Noi",
    email: "noi@info.gmail.com",
    src: Kangaroo,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Jim",
    email: "jim@info.gmail.com",
    src: Bear,
    phone: "+1(333)3451111",
    info: "About",
  },
  {
    name: "Kei",
    email: "kei@info.gmail.com",
    src: Elephant,
    phone: "+1(333)3451111",
    info: "About",
  },
];


const StudentsPropfile = () => {

    const allStudents = StudentsInfo.map((el) => {
        return (
            <div className="cards">
                <img
                    src={el.src}
                />
                <p className="name">{el.name}</p>
                <p className="email">{el.email}</p>
                <p className="phone">{el.phone}</p>
                <p className="info">{el.info}</p>
            </div>
        )
    })

    return (
      <div className="students-card">
        {allStudents}
      </div>
    );
}

export default StudentsPropfile;