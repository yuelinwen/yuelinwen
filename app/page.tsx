
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">About me</h1>
        <p>Hi, im Yuelin, i am a software developer based in Toronto, Canada.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Education</h1>
        <div>
          <h3 className="text-lg font-semibold">McMaster University - Hamilton, ON, Canada</h3>
          <p className="italic">Bachelor of Technology in Software Engineering </p>
          <ul className="gap-1">
            <li>Subject studied: Software architecture, AI/ML neuron network, Real-time system Mathematics, Data structure & algorithm, Network security, Operating system, Unity game development</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Seneca College - Toronto, ON, Canada</h3>
          <p className="italic">Advanced Diploma in Computer Programming & Analysis </p>
          <ul className="gap-1">
            {/* <li>Grading GPA: 3.8/4</li> */}
            <li>Subject studied: C++, Java, Web programming, Cloud programming, Database, Linux System programming, IOS/Andriod development</li>
            <li>Honors: President Honor list in Fall 2020, Winter 2021, Summer 2021</li>
            <li>School Activity: Develop health montior app in the 2021 Digital Health Hackathon</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Research Interests</h1>
        <div>
          <h3 className="text-lg font-semibold">Artificial intelligence and real world application</h3>
          <p>I am particularly interested in the integration of AI (especially AGI) with embedded systems in real world application.
            During university, I took courses in AI and real-time systems, which deeply inspired me.
            I believe the integration of AGI with embedded systems will be in high demand for real-world applications—such as intelligent delivery systems that require both smart decision-making and real-time responsiveness. This intersection of AI and system-level efficiency is where I hope to contribute and innovate. </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Technique Skills</h1>
        <ul className="gap-1">
          <li>Programming language: C++, Python, Javascript, Typescript</li>
          <li>Database: SQL, MongoDB</li>
          <li>Cloud computing: CI/CD, AWS, Docker</li>
          <li>Operating system: Linux, Windows, MacOS</li>
          <li>Software development: Nodejs, Reactjs, Nextjs, Unity, RestAPI</li>
          <li>Others: Machine learning, Neuron network, network security, git</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Experience</h1>
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
