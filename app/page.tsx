export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">About me</h1>
        <p>Hi, I'm Yuelin — a Master of Applied Science (MASc) student in Electrical and Computer Engineering at Concordia University in Montreal, QC, where my research focuses on distributed vector databases.</p>
        <p>I build full-stack and cloud applications that solve real-world problems, and I care about making things simple, useful, and meaningful. I'm always curious to pick up new skills, technical or otherwise.</p>
        <p>Away from the keyboard, I love music, reading, exploring nature, and good conversations. I value kindness, growth, and open-mindedness.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Education</h1>
        <div>
          <h3 className="text-lg font-semibold">Concordia University – Montreal, QC, Canada</h3>
          <p className="italic">Master of Applied Science (MASc) in Electrical and Computer Engineering</p>
          <ul className="flex flex-col gap-1">
            <li>Research area: Distributed vector databases</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">McMaster University – Hamilton, ON, Canada</h3>
          <p className="italic">Bachelor of Technology in Software Engineering</p>
          <ul className="flex flex-col gap-1">
            <li>Subjects studied: Software architecture, artificial intelligence and neural networks, real-time systems, mathematics, data structures & algorithms, network security, operating systems, Unity game development</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Seneca College – Toronto, ON, Canada</h3>
          <p className="italic">Advanced Diploma in Computer Programming & Analysis</p>
          <ul className="flex flex-col gap-1">
            {/* <li>Grading GPA: 3.8/4</li> */}
            <li>Subjects studied: C++, Java, web programming, cloud programming, databases, Linux system programming, iOS/Android development</li>
            <li>Honours: President&apos;s Honour List (Fall 2020, Winter 2021, Summer 2021)</li>
            <li>Activities: Developed a health monitoring app at the 2021 Digital Health Hackathon</li>
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
        <h1 className="text-2xl font-semibold">Technical Skills</h1>
        <ul className="flex flex-col gap-1">
          <li>Programming languages: C++, Python, JavaScript, TypeScript</li>
          <li>Databases: SQL, MongoDB</li>
          <li>Cloud & DevOps: AWS, Docker, CI/CD</li>
          <li>Operating systems: Linux, Windows, macOS</li>
          <li>Software development: Node.js, React, Next.js, Unity, REST APIs</li>
          <li>Other: Machine learning, neural networks, computer networking, Git</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <div>
          <h3 className="text-lg font-semibold">Web Integrator – Present</h3>
          <p className="italic">Plusgrade – Montreal, QC, Canada</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Full Stack Developer (Internship) – Jan 2022 – Apr 2022</h3>
          <p className="italic">iRestify Inc. – Toronto, ON, Canada</p>
          <ul className="flex flex-col gap-1">
            <li>At iRestify, a software company based in Toronto, I developed a Power BI analytics platform that visualized operational data and supported decision-making across the company. I worked primarily with React on the front end and Node.js for the RESTful APIs behind it. The internship gave me hands-on full-stack experience and taught me how to collaborate on a product team.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Student Mentor (Part-time) – Jan 2021 – Aug 2021</h3>
          <p className="italic">Seneca College – Toronto, ON, Canada</p>
          <ul className="flex flex-col gap-1">
            <li>As a Student Mentor at Seneca College, I guided new computer programming students through their first C++ courses. I helped them understand technical concepts, shared study strategies, and offered encouragement to ease their transition into the program. The role sharpened my communication skills and my ability to explain complex topics clearly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
