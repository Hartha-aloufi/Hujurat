import React from 'react';

export const NextPrevButton = (props: {
  onClick: (type: 'next' | 'prev') => void;
  nextText?: string;
  prevText?: string;
}) => {
  return (
    <div className="flex flex-row mx-auto">
      <button
        type="button"
        className="bg-softViolet text-white rounded-s-md border-e border-gray-100 py-1 hover:bg-violet-900 hover:text-white px-3"
        onClick={() => props.onClick('prev')}
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">{props.prevText || 'السابق'}</p>
        </div>
      </button>
      <button
        type="button"
        className="bg-softViolet text-white rounded-e-md py-1 border-s border-gray-200 hover:bg-violet-900 hover:text-white px-3"
        onClick={() => props.onClick('next')}
      >
        <div className="flex flex-row align-middle">
          <span className="mr-2">{props.nextText || 'التالي'}</span>

          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};
