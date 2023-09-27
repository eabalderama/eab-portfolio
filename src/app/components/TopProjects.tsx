import infanity from '../assets/images/infanity.png';
import hyperjump from '../assets/images/hyperjump.png';
import repit from '../assets/images/repitsocial.png';
import Image from 'next/image';
import Link from 'next/link';

export default function TopProjects() {
  return (
    <div className="flex flex-col my-6 text-gray-200">
      <h1 className="w-max font-bold border-b-4 border-gray-600 mb-4">
        Top Client Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Link href="https://marketplace.infanity.xyz/" target="_blank">
            <div className="relative w-full h-56 sm:h-36">
              <Image
                src={infanity}
                fill
                className="object-cover rounded-lg object-top"
                alt="Infanity"
              />
            </div>
          </Link>
          <h1 className="text-lg font-bold">Infanity</h1>
          <p className="text-xs text-justify">
            I was responsible in the development of the whole project excluding
            the Smart Contract. From the minting page of the 1st and 2nd drop up
            to the NFT marketplace, integrating the Smart Contract and 3rd party
            APIs such as Stripe.{' '}
          </p>
        </div>
        <div>
          <Link href="https://bsc.hyperjump.app/" target="_blank">
            <div className="relative w-full h-56 sm:h-36">
              <Image
                src={hyperjump}
                fill
                className="object-cover rounded-lg object-top"
                alt="HyperJump"
              />
            </div>
          </Link>
          <h1 className="text-lg font-bold">HyperJump</h1>
          <p className="text-xs text-justify">
            I was tasked to add features to the existing DE-FI app. The features
            I added includes the Limit Orders for token swapping, UnRekt,
            Chainlist, Emergency Withdraw, etc.
          </p>
        </div>
        <div>
          <Link href="https://repitsocial.com/" target="_blank">
            <div className="relative w-full h-56 sm:h-36">
              <Image
                src={repit}
                fill
                className="object-cover rounded-lg object-top"
                alt="RepIt Social"
              />
            </div>
          </Link>
          <h1 className="text-lg font-bold">RepIt Social</h1>
          <p className="text-xs text-justify">
            One of the pioneer developers of RepIt Social. I was one of the
            developers responsible on developing the backend of the social media
            and also the admin dashboard. I also helped on the development of
            the mobile app from time to time.
          </p>
        </div>
      </div>
    </div>
  );
}
