import React from 'react';
import { prefix } from '@/util/prefix';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">CloudVault </h3>
                <p className="italic">Nodejs, Reactjs, AWS S3, AWS DynamoDB, AWS Cognito</p>
                <ul className="gap-1">
                    <li>Github link: <a className='underline' href="https://github.com/yuelinwen/CloudVault">https://github.com/yuelinwen/CloudVault</a></li>
                    <li>Demo: <a className='underline' href="https://www.youtube.com/watch?v=9ruAMwIYXI0">Video</a></li>
                    <li>CloudVault is a cloud-based file storage software that allows users to store and access various types of files from any device. Hosted on AWS infrastructure, it offers a seamless and secure file management system. CloudVault incorporates encryption, secure authentication, and access control mechanisms to protect user data. With a focus on convenience, security and sustainability, CloudVault software offers a modern and efficient cloud storage solution for users.</li>
                    <li className='flex flex-row'>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={`${prefix}/image/cloudvault-overview.png`} width={400} height={1} alt="CloudVaut home page" className="rounded-md object-cover" />
                        </AspectRatio>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={`${prefix}/image/cloudvault-overview2.png`} width={400} height={1} alt="CloudVault detail page" className="rounded-md object-cover" />
                        </AspectRatio>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Facial expression recognition</h3>
                <p className="italic">AI, Image recognition, CNN, MLP, Neural Network</p>
                <ul className="gap-1">
                    <li>Github link: <a className='underline' href="https://github.com/yuelinwen/facial-expression-recognition">https://github.com/yuelinwen/facial-expression-recognition</a></li>
                    <li>Facial expression recognition is a type of image detection system used to analyze human emotions by classifying facial expressions through learning in deep neural networks. This system uses Convolutional Neural Networks (CNNs) to train the model using pre-collected facial image datasets, leveraging deep learning to extract facial features and accurately identify human expressions.</li>
                    <li className='flex flex-row'>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={`${prefix}/image/facial-recgnition.png`} width={400} height={1} alt="Facial expression recognition ai project" className="rounded-md object-cover" />
                        </AspectRatio>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Spotify music listening app</h3>
                <p className="italic">Nodejs, Angular, MongoDB, Spotify API</p>
                <ul className="gap-1">
                    <li>Github link: <a className='underline' href="https://github.com/yuelinwen/spotify-music-app">https://github.com/yuelinwen/spotify-music-app</a></li>
                    <li>Demo: <a className='underline' href="https://spotify-music-app-ten.vercel.app/">Live</a></li>
                    <li>Spotify music app is a music listening web application using Angular for the front end and Node.js for the backend. The app fetches real-time music data from the official Spotify API and stores user-related information in MongoDB. This project allowed me to integrate third-party APIs, manage asynchronous data flow, and build a responsive user interface for a seamless music browsing experience.</li>
                    <li className='flex flex-row'>
                        <AspectRatio ratio={16 / 9}>
                            <Image src={`${prefix}/image/spotify.gif`} width={400} height={1} alt="spotify music listening app front page" className="rounded-md object-cover" />
                        </AspectRatio>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
