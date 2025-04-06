import React from 'react';
import { NavLink } from 'react-router-dom'

const subjects = [
  {
    subjectName: "Artificial Intelligence (AI)",
    bookTitle: "Artificial Intelligence: A Modern Approach",
    authors: "Stuart Russell and Peter Norvig",
    imageLink: "https://th.bing.com/th/id/OIP.wKaosIn_frTKIrm3J9IX4wHaDe?w=300&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Analog Circuit",
    bookTitle: "Microelectronic Circuits",
    authors: "Adel S. Sedra and Kenneth C. Smith",
    imageLink: "https://www.bing.com/th?id=OIP.KsBUAz0H_9luJkoS1Jw-WQHaEO&w=207&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    subjectName: "Blockchain",
    bookTitle: "Mastering Bitcoin",
    authors: "Andreas M. Antonopoulos",
    imageLink: "https://th.bing.com/th/id/OIP.cYC5Qe6W9c7QJBpKzPvFdAHaE7?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "C Programming",
    bookTitle: "The C Programming Language",
    authors: "Brian W. Kernighan and Dennis M. Ritchie",
    imageLink: "https://th.bing.com/th/id/OIP.QbXDpOIXe2_46a8o1UG8AQHaD1?w=296&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Cloud Computing",
    bookTitle: "Cloud Computing: Principles and Paradigms",
    authors: "Rajkumar Buyya and Amir V. Zomaya",
    imageLink: "https://th.bing.com/th/id/OIP.TWE6jmJeglacdUsn3aYPVQHaEx?w=285&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Computer Networks and Security (CNS)",
    bookTitle: "Computer Networking: A Top-Down Approach",
    authors: "James Kurose and Keith Ross",
    imageLink: "https://th.bing.com/th/id/OIP.nwt9zcddG9Qw7A982-EIfgHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Computer Organization and Architecture",
    bookTitle: "Computer Organization and Design",
    authors: "David A. Patterson and John L. Hennessy",
    imageLink: "https://th.bing.com/th/id/OIP.Y1tzVFDKu2-XJbGtzsf9JgHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Control Engineering",
    bookTitle: "Control Systems Engineering",
    authors: "Norman S. Nise",
    imageLink: "https://th.bing.com/th/id/OIP.oMTELhMiYqcL7y7FX2cT2AHaD9?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Control System",
    bookTitle: "Modern Control Engineering",
    authors: "Ogata, Katsuhiko",
    imageLink: "https://th.bing.com/th/id/OIP.u7AjXAVZGuXIGepAGgYjwwHaDt?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Data Structures and Algorithms (DSA)",
    bookTitle: "Introduction to Algorithms",
    authors: "Thomas H. Cormen et al.",
    imageLink: "https://th.bing.com/th/id/OIP.u7HNT4EVeGwoM5jXxnmNmgHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Database Management System (DBMS)",
    bookTitle: "Database System Concepts",
    authors: "Abraham Silberschatz, Henry Korth, and S. Sudarshan",
    imageLink: "https://th.bing.com/th/id/OIP.5e5vyzby-UzeIJJR-hBhvgHaEG?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Design of Steel Structure",
    bookTitle: "Design of Steel Structures",
    authors: "S. K. Duggal",
    imageLink: "https://th.bing.com/th/id/OIP.pSOlJf42_1axDuOWUfincQHaEc?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Discrete Mathematics",
    bookTitle: "Discrete Mathematics and Its Applications",
    authors: "Kenneth H. Rosen",
    imageLink: "https://th.bing.com/th/id/OIP.zsusUgrEJat5Q_kvZdtDgAHaFj?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Electromagnetic Field Theory",
    bookTitle: "Elements of Electromagnetics",
    authors: "Matthew N.O. Sadiku",
    imageLink: "https://th.bing.com/th/id/OIP.ZU9DWOuEmwfxHIXXUXHakQHaHa?w=183&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Fluid Mechanics",
    bookTitle: "Fluid Mechanics",
    authors: "Frank M. White",
    imageLink: "https://th.bing.com/th/id/OIP.dRl1LJbUbbHh5xnNguBA6wHaFl?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Fundamentals of Data Structures",
    bookTitle: "Data Structures Using C",
    authors: "Reema Thareja",
    imageLink: "https://th.bing.com/th/id/OIP.ErakF_mE_XyJGMIb7hnrjwHaEH?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "HCI (Human-Computer Interaction)",
    bookTitle: "Designing the User Interface",
    authors: "Ben Shneiderman and Catherine Plaisant",
    imageLink: "https://th.bing.com/th/id/OIP.ps6tJPio5RzwCm6-h0sfhwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "IoT (Internet of Things)",
    bookTitle: "Internet of Things: Architecture and Applications",
    authors: "Rajkumar Buyya and Amir V. Zomaya",
    imageLink: "https://th.bing.com/th/id/OIP.SggfV4ksy7_xbZTvJPvRnQHaFn?w=248&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Machine Learning",
    bookTitle: "Pattern Recognition and Machine Learning",
    authors: "Christopher M. Bishop",
    imageLink: "https://th.bing.com/th/id/OIP.iPFEzWcE0NxB62P7gx8j5AHaEi?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Mechanics",
    bookTitle: "Engineering Mechanics: Dynamics",
    authors: "J.L. Meriam and L.G. Kraige",
    imageLink: "https://th.bing.com/th/id/OIP.pyCMWnEn-FYHVuJTzXavPwHaFj?w=246&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Microprocessor",
    bookTitle: "Microprocessor Architecture, Programming, and Applications",
    authors: "Ramesh S. Gaonkar",
    imageLink: "https://th.bing.com/th/id/OIP.xkBNrUAwbl1tt8Aq0U-mFQHaE8?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Network Theory",
    bookTitle: "Network Analysis",
    authors: "M.E. Van Valkenburg",
    imageLink: "https://th.bing.com/th/id/OIP.q6p-9uv5gBe75HOfBC8n7gHaEF?w=247&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Operating System",
    bookTitle: "Operating System Concepts",
    authors: "Abraham Silberschatz, Peter B. Galvin, and Greg Gagne",
    imageLink: "https://th.bing.com/th/id/OIP.p3HzA2ZqGajqU36Ug2HycwHaFj?w=299&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Software Engineering",
    bookTitle: "Software Engineering: A Practitioner's Approach",
    authors: "Roger S. Pressman",
    imageLink: "https://th.bing.com/th/id/OIP.0Lx70FIQbV6pZwSm8ZmWDgHaG5?w=263&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Theory of Computation",
    bookTitle: "Introduction to the Theory of Computation",
    authors: "Michael Sipser",
    imageLink: "https://th.bing.com/th/id/OIP.yT7gVdYYhN-mvGV2ne6yVwHaFj?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
];

const ReferenceBooks = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-6">Reference Books</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 sm:grid-cols-1">
        {subjects.map((subject, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <img src={subject.imageLink} alt={subject.bookTitle} className="w-full h-auto rounded mb-4" />
            <h2 className="text-lg font-semibold">{subject.subjectName}</h2>
            <p><strong>Title:</strong> {subject.bookTitle}</p>
            <p><strong>Authors:</strong> {subject.authors}</p>
          </div>
        ))}
      </div><NavLink to='/aibot' className="fixed bottom-4 right-4 z-50 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
            <img
              src="https://st5.depositphotos.com/4226061/73051/v/450/depositphotos_730516270-stock-illustration-robot-head-speech-bubble-blue.jpg?height=96&width=96"
              alt="Floating Logo"
              width={96}
              height={96}
              className="w-12 h-12 md:w-20 md:h-20 object-cover"
            />
          </NavLink>

    </div>
  );
};

export default ReferenceBooks;