import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
const Pagination = ({ totalPages = 1, currentPage = 1, handlePage }) => {
  const setPage = () => {};
  return (
    <nav
      aria-label='Page navigation example'
      className='w-full inline-flex justify-end'
    >
      <ul class='inline-flex -space-x-px'>
        <li>
          <button
            onClick={() => {
              currentPage !== 1 && handlePage(currentPage - 1);
            }}
            disabled={currentPage === 1}
            class='w-28 px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 inline-flex items-center justify-around'
          >
            <HiOutlineChevronLeft />
            Previous
          </button>
        </li>
        {Array.from(Array(totalPages).keys()).map((val) => (
          <li>
            <button
              aria-current='page'
              onClick={() => {
                val !== currentPage + 1 && handlePage(val + 1);
              }}
              class='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              {val + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              currentPage < totalPages && handlePage(currentPage + 1);
            }}
            disabled={totalPages === currentPage}
            class=' w-28 px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 inline-flex items-center justify-around'
          >
            Next
            <HiOutlineChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
