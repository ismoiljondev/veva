import React from "react";

type cardProps = {
  title: string;
  desc: string;
};
const AboutCard: React.FC<cardProps> = ({ desc, title }: cardProps) => {
  return (
    <div className="flex gap-[15px] bg-[#F2F4F7] rounded-[20px] p-[15px] flex-col">
      <h2>{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="126"
        height="8"
        viewBox="0 0 126 8"
        fill="none"
      >
        <path
          d="M104 2.79831C102.306 4.03726 100.839 5.10531 97.7629 5.10531C94.6869 5.10531 93.2201 4.03726 91.5254 2.79831C89.7311 1.48816 87.7018 0 83.7927 0C79.8836 0 77.8543 1.48104 76.0599 2.79831C74.3653 4.03726 72.8985 5.10531 69.8225 5.10531C66.7465 5.10531 65.2797 4.03726 63.585 2.79831C61.7907 1.48816 59.7614 0 55.8523 0C51.9432 0 49.9139 1.48816 48.1196 2.79831C46.4249 4.03726 44.9652 5.10531 41.8892 5.10531C38.8132 5.10531 37.3535 4.03726 35.6589 2.79831C33.8645 1.48816 31.8352 0 27.9333 0C24.0313 0 21.9949 1.48816 20.2005 2.79831C18.5059 4.03726 17.0391 5.10531 13.9631 5.10531C10.8871 5.10531 9.42027 4.03726 7.72562 2.79831C5.93128 1.48816 3.90197 0 0 0V2.53485C3.07601 2.53485 4.53568 3.60291 6.23034 4.84186C8.02467 6.15201 10.054 7.64017 13.9631 7.64017C17.8722 7.64017 19.9015 6.15201 21.6958 4.84186C23.3905 3.60291 24.8501 2.53485 27.9261 2.53485C31.0022 2.53485 32.4618 3.60291 34.1565 4.84186C35.9508 6.15201 37.9801 7.64017 41.8821 7.64017C45.7841 7.64017 47.8205 6.15201 49.6148 4.84186C51.3095 3.60291 52.7692 2.53485 55.8452 2.53485C58.9212 2.53485 60.388 3.60291 62.0826 4.84186C63.877 6.15201 65.9063 7.64017 69.8154 7.64017C73.7244 7.64017 75.7538 6.15201 77.5481 4.84186C79.2428 3.60291 80.7095 2.53485 83.7856 2.53485C86.8616 2.53485 88.3284 3.60291 90.023 4.84186C91.8174 6.15201 93.8467 7.64017 97.7558 7.64017C101.665 7.64017 103.694 6.15201 105.488 4.84186C107.183 3.60291 108.65 2.53485 111.726 2.53485C114.802 2.53485 116.269 3.60291 117.963 4.84186C119.758 6.15201 121.794 7.64017 125.696 7.64017V5.10531C122.62 5.10531 121.153 4.03726 119.459 2.79831C117.664 1.48816 115.628 0 111.726 0C107.824 0 105.788 1.48104 103.993 2.79831"
          fill="#1CBBEE"
        />
      </svg>
      <p>{desc}</p>
    </div>
  );
};

export default AboutCard;
