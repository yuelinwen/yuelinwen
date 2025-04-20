import React from 'react';

const Projects = () => {
    return (
        <div className="flex flex-col gap-20">

            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Projects</h1>
                <div>
                    <h3 className="text-lg font-semibold">CloudVault </h3>
                    <p className="italic">Nodeje, Reactjs, AWS S3, AWS DynamoDB, AWS Cognito</p>
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
        </div>
    );
}

export default Projects;
