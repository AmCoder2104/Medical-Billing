import Image from "next/image";

export default function Cards({ title, description, icon, image }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col w-[80%] mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
          <div className="p-8 flex flex-col items-center text-center bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Icon */}
            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6">
              {icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">{description}</p>

            {/* Divider with arrow */}
            <div className="w-full flex items-center justify-center">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <div className="mx-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src="/logo 1.png" // Replace with the image prop if needed
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div
          className="flip-card-back flex flex-col w-[80%] mx-auto rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
        >
          <div className="p-8 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-24 h-24 rounded-full bg-white text-blue flex items-center justify-center mb-6">
              {icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            {/* Description */}
            <p className="text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
