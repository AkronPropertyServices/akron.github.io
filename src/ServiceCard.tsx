import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface IServiceCard {
  title: string;
  imgPath: string;
  description: string[];
}

export default function ServiceCard({
  title,
  imgPath,
  description,
}: IServiceCard) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <div
        role="button"
        className="services-item cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <img src={imgPath} alt={title} className="service-card-img" />
        <div className="service-card-text">
          <h3 className="service-card-title">{title}</h3>
        </div>
      </div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="animate-fadeInDown relative overflow-hidden p-1 shadow-red-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-800 to-black z-[-1]" />
          <div className="relative rounded-lg bg-gradient-to-br from-black to-red-950 p-10">
            <a
              className="close absolute right-4 top-4 cursor-pointer text-white"
              onClick={closeModal}
            >
              &times;
            </a>
            <div className="header mb-4">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {title}
              </h2>
            </div>
            <div className="content text-gray-200">
              {description.map((str, index) => (
                <p key={index} className="ml-4 mt-2 text-sm sm:text-lg">
                  ● {str}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
