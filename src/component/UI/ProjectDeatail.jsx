import React, { useState } from 'react';

const ProjectDeatail = ({ data ,closeModal }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
      const [currentImage, setCurrentImage] = useState("");
    
      const openLightbox = (img) => {
        setCurrentImage(img);
        setLightboxOpen(true);
      };
    
      const closeLightbox = () => {
        setLightboxOpen(false);
      };
    // const [model ,setModel] = useState(true)
  return (
       
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full relative">
              <button
                // onClick={() => setModel(false)}
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600 font-bold text-xl"
              >
                &times;
              </button>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-headingColor">{data.title}</h2>
                <p className="text-sm text-gray-500">{data.category}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">{data.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {data.imgUrl.map((image, index) => (
                  <img
                  onClick={() => openLightbox(image)}
                    key={index}
                    src={image}
                    alt={`Project ${data.title} - ${index + 1}`}
                    className="rounded-lg border border-gray-200 shadow-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                ))}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Technologies Used:</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {data.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <a
                  href={data.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg font-medium transition duration-200"
                >
                  Visit Site
                </a>
              </div>
            </div>
            {lightboxOpen && (
        <div
          className="fixed  w-[50vw] h-[50vh] bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={currentImage}
            alt="Full Screen"
            className="max-w-full max-h-full object-contain "
          />
          <button
            className="absolute top-4 right-4 text-black text-3xl"
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>
      )}
          </div>
    
  );
};

export default ProjectDeatail;
