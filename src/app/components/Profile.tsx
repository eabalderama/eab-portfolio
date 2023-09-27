import Image from 'next/image';
import eab from '../assets/images/eab.jpg';

export default function Profile() {
  return (
    <>
      <div className="flex justify-between my-6">
        <div>
          <h1 className="text-4xl font-bold">Edgar Alan Balderama</h1>
          <p className="text-xl text-slate-400">Fullstack Developer</p>
        </div>
        <div>
          <div className="relative w-28 h-28 outline rounded-full">
            <Image
              src={eab}
              fill
              className="object-cover rounded-full"
              alt="Edgar Alan Balderama"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-light text-justify text-gray-200 indent-4">
          I'm a{' '}
          <span className="font-normal border-b">Fullstack Developer</span>{' '}
          based in the Philippines with more than 2 years of relevant experience
          developing websites and web applications. I'm knowledgeable both in
          backend and frontend technologies using different frameworks.
        </p>
      </div>
    </>
  );
}
