import React from 'react';
import { prefix } from '@/util/prefix';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">CloudVault</h3>
                <p className="italic">Nodejs, Reactjs, AWS S3, AWS DynamoDB, AWS Cognito</p>
                <ul className="flex flex-col gap-1">
                    <li>GitHub link: <a className='underline' target="_blank" rel="noopener noreferrer" href="https://github.com/yuelinwen/CloudVault">https://github.com/yuelinwen/CloudVault</a></li>
                    <li>Demo: <a className='underline' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9ruAMwIYXI0">Video</a></li>
                    <li>CloudVault is a cloud-based file storage application that lets users store and access files of any type from any device. Hosted on AWS, it combines encryption, secure authentication, and access control to protect user data, giving users a straightforward and secure way to manage their files in the cloud.</li>
                    <li className='flex flex-col gap-3 sm:flex-row'>
                        <div className='w-full sm:w-1/2'>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={`${prefix}/image/cloudvault-overview.png`} fill sizes="(max-width: 640px) 100vw, 50vw" alt="CloudVault home page" className="rounded-md object-contain" />
                            </AspectRatio>
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={`${prefix}/image/cloudvault-overview2.png`} fill sizes="(max-width: 640px) 100vw, 50vw" alt="CloudVault detail page" className="rounded-md object-contain" />
                            </AspectRatio>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Facial expression recognition</h3>
                <p className="italic">AI, Image recognition, CNN, MLP, Neural Network</p>
                <ul className="flex flex-col gap-1">
                    <li>GitHub link: <a className='underline' target="_blank" rel="noopener noreferrer" href="https://github.com/yuelinwen/facial-expression-recognition">https://github.com/yuelinwen/facial-expression-recognition</a></li>
                    <li>Facial expression recognition is an image classification system that analyzes human emotions from photographs of faces. It trains a Convolutional Neural Network (CNN) on a pre-collected facial image dataset to extract facial features and classify expressions.</li>
                    <li className='flex flex-row'>
                        <div className='w-full sm:w-1/2'>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={`${prefix}/image/facial-recgnition.png`} fill sizes="(max-width: 640px) 100vw, 50vw" alt="Facial expression recognition ai project" className="rounded-md object-contain" />
                            </AspectRatio>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">Spotify music listening app</h3>
                <p className="italic">Nodejs, Angular, MongoDB, Spotify API</p>
                <ul className="flex flex-col gap-1">
                    <li>GitHub link: <a className='underline' target="_blank" rel="noopener noreferrer" href="https://github.com/yuelinwen/spotify-music-app">https://github.com/yuelinwen/spotify-music-app</a></li>
                    <li>Demo: <a className='underline' target="_blank" rel="noopener noreferrer" href="https://spotify-music-app-ten.vercel.app/">Live</a></li>
                    <li>The Spotify music app is a music listening web application built with Angular on the front end and Node.js on the back end. It fetches real-time music data from the official Spotify API and stores user information in MongoDB. The project gave me practice integrating third-party APIs, managing asynchronous data flow, and building a responsive interface for a smooth music browsing experience.</li>
                    <li className='flex flex-row'>
                        <div className='w-full sm:w-1/2'>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={`${prefix}/image/spotify.gif`} fill sizes="(max-width: 640px) 100vw, 50vw" alt="Spotify music listening app front page" className="rounded-md object-contain" />
                            </AspectRatio>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
