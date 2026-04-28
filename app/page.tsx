
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">About me</h1>
        <p>Hi, I'm Yuelin. I'm a Master of Electrical and Computer Engineering student at Concordia University in Montreal, QC.</p>
        <p>I recently graduated from the Software Engineering program at McMaster University. I specialize in using modern technologies to build applications that solve real-world problems. I enjoy creating things that are simple, useful, and meaningful. I'm always curious to learn new skills, whether related to technology or just life in general.</p>
        <p>Outside of work, I love music, reading, exploring nature, and having good conversations. I value kindness, growth, and staying open-minded.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Education</h1>
        <div>
          <h3 className="text-lg font-semibold">Concordia University - Montreal, QC, Canada</h3>
          <p className="italic">Master of Engineering in Electrical and Computer Engineering </p>
          <ul className="gap-1">
            <li>Subject area: Software Engineering, Operating Systems, and Distributed Systems.</li>
            {/* <li>Subject studied: Software architecture, AI/ML neural network, Real-time system Mathematics, Data structure & algorithm, Network security, Operating system, Unity game development</li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">McMaster University - Hamilton, ON, Canada</h3>
          <p className="italic">Bachelor of Technology in Software Engineering </p>
          <ul className="gap-1">
            <li>Subject studied: Software architecture, AI/ML neural network, Real-time system Mathematics, Data structure & algorithm, Network security, Operating system, Unity game development</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Seneca College - Toronto, ON, Canada</h3>
          <p className="italic">Advanced Diploma in Computer Programming & Analysis </p>
          <ul className="gap-1">
            {/* <li>Grading GPA: 3.8/4</li> */}
            <li>Subject studied: C++, Java, Web programming, Cloud programming, Database, Linux System programming, IOS/Android development</li>
            <li>Honors: President Honor list in Fall 2020, Winter 2021, Summer 2021</li>
            <li>School Activity: Develop health monitoring app in the 2021 Digital Health Hackathon</li>
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Research Interests</h1>
        <div className="flex flex-col gap-3">
          <li>Computer engineering</li>
          <li>Intelligent Control System</li>
          <li>microelectronics</li>
          <li>VLSI design</li>
          <li>embedded system</li>
          <p>I am particularly interested in the application of intelligence techniques in microelectronics for real-world solutions.</p>
          <p>During my undergraduate studies, I took elective courses in AI, neural networks, and real-time systems, which strengthened my passion for intelligent system design. I believe that by combining microelectronic systems with AI methods, we can create smart, adaptive technologies that operate efficiently to address real world problems.</p>
          <p>I hope to contribute to the development of practical, intelligent electronic systems that enhance everyday technologies in fields such as robotics, autonomous vehicles, and IoT devices.</p>
        </div>
      </div> */}

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Technique Skills</h1>
        <ul className="gap-1">
          <li>Programming language: C++, Python, Javascript, Typescript</li>
          <li>Database: SQL, MongoDB</li>
          <li>Cloud computing: CI/CD, AWS, Docker</li>
          <li>Operating system: Linux, Windows, MacOS</li>
          <li>Software development: Nodejs, Reactjs, Nextjs, Unity, RestAPI</li>
          <li>Others: Machine learning, Neural network, network, git</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <div>
          <h3 className="text-lg font-semibold">Web Integrator - present</h3>
          <p className="italic">Plusgrade - Montreal, QC, Canada</p>
          <ul className="gap-1">
            {/* <li>During my internship at iRestify, a software company based in Toronto, I was responsible for developing an powerBI data analysis platform to visualize operational data and support decision-making for company. I worked primarily with React for the front end and Node.js for building RESTful APIs. This experience strengthened my skills in full-stack web development and team collaboration, as I consistently delivered tasks efficiently and contributed to the overall functionality of the product.</li> */}

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Full Stack Developer (Internship) - Jan 2022~Apr 2022</h3>
          <p className="italic">iRestify Inc. - Toronto, ON, Canada</p>
          <ul className="gap-1">
            <li>During my internship at iRestify, a software company based in Toronto, I was responsible for developing an powerBI data analysis platform to visualize operational data and support decision-making for company. I worked primarily with React for the front end and Node.js for building RESTful APIs. This experience strengthened my skills in full-stack web development and team collaboration, as I consistently delivered tasks efficiently and contributed to the overall functionality of the product.</li>

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Student Mentor (Part-time) - Jan 2021~Aug 2021</h3>
          <p className="italic">Seneca College - Toronto, ON, Canada</p>
          <ul className="gap-1">
            <li>As a Student Mentor at Seneca College, I supported new computer programming students by offering C++ academic guidance. I helped them understand technical concepts, shared study strategies, and provided encouragement to ease their transition into the program. This role strengthened my communication skills and deepened my ability to explain complex topics clearly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
