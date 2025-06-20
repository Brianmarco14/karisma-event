import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = ({ currentPage = 1, totalPage = 1, onPageChange }) => {
  const getPageNumbers = () => {
    if (totalPage <= 7) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    const pages = [];
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPage);
    } else if (currentPage > 4 && currentPage < totalPage - 3) {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPage);
    } else {
      pages.push(1, "...", totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page !== "..." && page !== currentPage) {
      onPageChange(page);
    }
  };

  const pages = getPageNumbers();

  return (
    <div className={`lg:flex hidden items-center gap-2 h-full text-biru text-lg font-semibold ${totalPage <= 5 ? 'min-w-0' : 'min-w-[30%]'}`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex-1 flex justify-center"
      >
        <MdArrowBackIos className="font-semibold" />
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`rounded-full flex justify-center items-center size-8 flex-shrink-0 ${
            currentPage === page
              ? "bg-biru text-white"
              : typeof page === "string"
              ? "cursor-default"
              : "text-biru hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className="flex-1 flex justify-center"
      >
        <MdOutlineArrowForwardIos className="font-semibold" />
      </button>
    </div>
  );
};

export default Pagination;
