import React from 'react';

const subjects = [
  {
    subjectName: "AI",
    youtubeLink: "https://www.youtube.com/playlist?list=PLON3eI_UWjHWwC2-E2JGeRv7XCPMWJcIK",
    imageLink: "https://th.bing.com/th/id/OIP.wKaosIn_frTKIrm3J9IX4wHaDe?w=300&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Analog Circuit",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7uyUYrpgUUQowmRuKxRdwp",
    imageLink: "https://www.bing.com/th?id=OIP.KsBUAz0H_9luJkoS1Jw-WQHaEO&w=207&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    subjectName: "Blockchain",
    youtubeLink: "https://www.youtube.com/playlist?list=PLPIwNooIb9vgfXs-QkRYqqZbDXX-yLf59",
    imageLink: "https://th.bing.com/th/id/OIP.cYC5Qe6W9c7QJBpKzPvFdAHaE7?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "C Programming",
    youtubeLink: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ",
    imageLink: "https://th.bing.com/th/id/OIP.QbXDpOIXe2_46a8o1UG8AQHaD1?w=296&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Cloud Computing",
    youtubeLink: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcCyQH0n9GHfwviu6KeJ46BV",
    imageLink: "https://th.bing.com/th/id/OIP.TWE6jmJeglacdUsn3aYPVQHaEx?w=285&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Computer Networks and Security (CNS)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    imageLink: "https://th.bing.com/th/id/OIP.nwt9zcddG9Qw7A982-EIfgHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Computer Organization and Architecture",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7XZXcFujMw--IDZ2nnsXNT",
    imageLink: "https://th.bing.com/th/id/OIP.Y1tzVFDKu2-XJbGtzsf9JgHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Control Engineering",
    youtubeLink: "https://youtube.com/playlist?list=PLgwJf8NK-2e43et6qbo4IqYSJCv-6kN90",
    imageLink: "https://th.bing.com/th/id/OIP.oMTELhMiYqcL7y7FX2cT2AHaD9?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Control System",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e4-mKptFZ_eqY9u1YtfWrsl",
    imageLink: "https://th.bing.com/th/id/OIP.u7AjXAVZGuXIGepAGgYjwwHaDt?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Data Structures and Algorithms (DSA)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
    imageLink: "https://th.bing.com/th/id/OIP.u7HNT4EVeGwoM5jXxnmNmgHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Database Management System (DBMS)",
    youtubeLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    imageLink: "https://th.bing.com/th/id/OIP.5e5vyzby-UzeIJJR-hBhvgHaEG?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Design of Steel Structure",
    youtubeLink: "https://www.youtube.com/playlist?list=PLmk48PRJ3j1zBotEQsWB-bfZSYxkT1T3M",
    imageLink: "https://th.bing.com/th/id/OIP.pSOlJf42_1axDuOWUfincQHaEc?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Discrete Maths",
    youtubeLink: "https://www.youtube.com/playlist?list=PLT3bOBUU3L9j_VG5CICyWK_a4M0-nwwxy",
    imageLink: "https://th.bing.com/th/id/OIP.zsusUgrEJat5Q_kvZdtDgAHaFj?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Electromagnetic Field Theory",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e6YBJCILFQLEdo1we2kRRUT",
    imageLink: "https://th.bing.com/th/id/OIP.ZU9DWOuEmwfxHIXXUXHakQHaHa?w=183&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Fluid Mechanics",
    youtubeLink: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLnlGN39w2-1jyFyI_ALVa3",
    imageLink: "https://th.bing.com/th/id/OIP.dRl1LJbUbbHh5xnNguBA6wHaFl?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Fundamental of Data Structures",
    youtubeLink: "https://www.youtube.com/playlist?list=PLmzx9ODNih1L09-r_l7wMRUYKFW_SQp0z",
    imageLink: "https://th.bing.com/th/id/OIP.ErakF_mE_XyJGMIb7hnrjwHaEH?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "HCI (Human-Computer Interaction)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcDz_8-pygbcNvNF0DEwKoIL",
    imageLink: "https://th.bing.com/th/id/OIP.ps6tJPio5RzwCm6-h0sfhwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "IOT (Internet of Things)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLYwpaL_SFmcB8fDd64B8SkJiPpEIzpCzC",
    imageLink: "https://th.bing.com/th/id/OIP.SggfV4ksy7_xbZTvJPvRnQHaFn?w=248&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Machine Learning",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T",
    imageLink: "https://th.bing.com/th/id/OIP.iPFEzWcE0NxB62P7gx8j5AHaEi?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Mechanics",
    youtubeLink: "https://www.youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI",
    imageLink: "https://th.bing.com/th/id/OIP.pyCMWnEn-FYHVuJTzXavPwHaFj?w=246&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Mechanics of Solids",
    youtubeLink: "https://www.youtube.com/playlist?list=PL0s3O6GgLL5c-g6jUg8HW_vxs6kmJjGmz",
    imageLink: "https://th.bing.com/th/id/OIP.AdSfpFVCTuiW3Ed3bIKt-QHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Natural Language Processing (NLP)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLPIwNooIb9vimsumdWeKF3BRzs9tJ-_gy",
    imageLink: "https://th.bing.com/th/id/OIP.l9pLSfti6pqA0jyr_Quv8wHaEH?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Network Theory",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e71UdLRV4OaJA9ak3K7PO9V",
    imageLink: "https://th.bing.com/th/id/OIP.ctSYbaOzO3pw9SFEHMiH7QHaEK?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Numerical Analysis",
    youtubeLink: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLrTna7UuaVfGZYkNo0cpVC",
    imageLink: "https://th.bing.com/th?q=What+Is+Type+of+Numerical+Analysis&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
  },
  {
    subjectName: "Object-Oriented Programming (OOP)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9",
    imageLink: "https://th.bing.com/th/id/OIP.o-NBdZdNDQdRBIox12ljggHaGS?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Operating System (OS)",
    youtubeLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    imageLink: "https://th.bing.com/th/id/OIP.s6Nc3hK98loPXP_D5GVxlwHaD4?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Physics",
    youtubeLink: "https://www.youtube.com/playlist?list=PLnU_6InKwomFPUn1k5np6NtnoU38TW2PT",
    imageLink: "https://th.bing.com/th/id/OIP.ju40llinT5vxpYIzTnCaDQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Power Electronics",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e5Hnu82T1CYLZ8kbZs4Jx8x",
    imageLink: "https://th.bing.com/th/id/OIP.doZOwVu5VVMnjsPFMGAhkQHaGr?w=190&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Software Engineering",
    youtubeLink: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
    imageLink: "https://th.bing.com/th/id/OIP.fGfRRJ5KwiPzmzWOHJTzBQHaE8?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "SOM & MOS",
    youtubeLink: "https://www.youtube.com/playlist?list=PLfq4fiRrJSn6ERGJuDhirakz98OEKftN0",
    imageLink: "https://th.bing.com/th/id/OIP.Gr0M88IuuKyT5BvqdLRJGwHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Strength of Materials",
    youtubeLink: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLlfmNg2Ku1SdZtvXnYrLbc",
    imageLink: "https://th.bing.com/th/id/OIP.1loCVGGcQtkux3Xwx4aSyQHaDv?w=349&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Structural Analysis",
    youtubeLink: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaJ_MDDo1KlkPoqg0tZgxEZY",
    imageLink: "https://th.bing.com/th/id/OIP.b-yzaUGgK5TZUhVa2qUn3gAAAA?w=159&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Systems Programming And Operating Systems (SPOS)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLCSAAIuWuhN9lIYFuqK6UIfx19KzUJO7U",
    imageLink: "https://th.bing.com/th/id/OIP.CFKOuIQ-gNy9NzuoIsdj5AHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Theory Of Computation (TOC)",
    youtubeLink: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    imageLink: "https://th.bing.com/th/id/OIP.y70SxVTTF89p8YO038oQOAHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "VLSI",
    youtubeLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e6au9bX9P_bA3ywxqigCsaC",
    imageLink: "https://th.bing.com/th/id/OIP.j47mvbsA7mMdnTUivMtMPQHaEo?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    subjectName: "Web Technology",
    youtubeLink: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8d1ddpVKifXO_fPjSKATCp",
    imageLink: "https://th.bing.com/th/id/OIP.pMVjgukE5w6qB0WQjuVbYgHaEU?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
];
function Youtube() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
     <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontWeight: 'bold', fontSize: '36px' }}>
  Youtube Playlists
</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '0px', color: '#555' , fontSize: '20px'}}>
        You Can Find Your Subject in Alphabetical Order...
      </h2>
      <h3 style={{ textAlign: 'center', marginBottom: '40px', color: '#777' , fontSize: '20px'}}>Enjoy Learning!!</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={subject.imageLink}
              alt={`${subject.subjectName} thumbnail`}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
            />
            <h2 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>{subject.subjectName}</h2>
            <a
              href={subject.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 18px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background-color 0.3s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Youtube;
