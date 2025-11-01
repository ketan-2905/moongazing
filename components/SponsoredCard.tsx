// components/SponsoredLocationCard.jsx
import Image from "next/image";
import Link from "next/link";

interface locations {
  locationText: string;
  mapLinkUrl: string;
}

interface SponsoredCard {
  logoSrc: string;
  logoAlt: string;
  locations: locations[];
}

const SponsoredCard: React.FC<SponsoredCard> = ({
  logoSrc,
  logoAlt,
  locations,
}) => {
  return (
    <div className="w-full mx-auto p-4 sm:p-6 bg-black text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center">
      {/* 1. Sponsored By Tag */}
      <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-3 uppercase tracking-wide text-center">
        Sponsored by
      </p>


<div className="mb-4 w-full flex justify-center items-center p-4">
  <div className="relative w-[800px] h-[80px] md:w-[1200px] md:h-[200px] overflow-hidden rounded-2xl">
    <Image
      src={logoSrc}
      alt={logoAlt}
      fill
      className="object-cover object-center"
    />
  </div>
</div>


      {/* 3. Outlet Location and Map Link */}
      <div className="text-center w-full px-2 tracking-wide">
        <h3 className="text-lg sm:text-2xl font-bold mb-2 tracking-wider">Outlet Location</h3>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-3">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-md sm:text-lg font-medium hover:text-[#f7e452] text-white transition duration-150 sm:border-b-0 sm:border-r sm:pr-2 border-white last:border-none"
            >
              {location.locationText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsoredCard;
