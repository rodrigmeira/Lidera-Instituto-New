import React from 'react';
import Link from 'next/link';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  if (pageCount <= 1) return null;

  const handlePageClick = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < pageCount) {
      onPageChange({ selected: pageIndex });
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 0}
        className={`w-auto px-3 md:px-5 rounded-none cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 py-4 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl ${
          currentPage === 0
            ? 'opacity-50 !bg-gray-300 !text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500 hover:shadow-none'
            : ''
        }`}
      >
        VOLTAR
      </button>

      {/* Page Numbers */}
      {[...Array(pageCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index)}
          className={`cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl ${
            currentPage === index ? '!bg-white !text-blue-600 shadow-2xl' : ''
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
        className={`w-auto px-3 md:px-5 rounded-none cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-600 py-4 text-white hover:bg-white hover:text-blue-600 hover:shadow-2xl ${
          currentPage === pageCount - 1
            ? 'opacity-50 !bg-gray-300 !text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500 hover:shadow-none'
            : ''
        }`}
      >
        PRÓXIMO
      </button>
    </div>
  );
};

export default Pagination;
