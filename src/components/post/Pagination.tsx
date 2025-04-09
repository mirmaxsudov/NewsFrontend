type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        if (i <= 3 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            pageNumbers.push(i);
        } else if (
            pageNumbers[pageNumbers.length - 1] !== "..."
        ) {
            pageNumbers.push("...");
        }
    }

    return (
        <div className="flex gap-3 items-center justify-center mt-8">
            {pageNumbers.map((num, index) =>
                typeof num === "number" ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(num - 1)}
                        className={`px-3 py-1 rounded-full ${
                            currentPage === num - 1
                                ? "bg-gray-200 font-semibold"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {num}
                    </button>
                ) : (
                    <span key={index}>...</span>
                )
            )}
            {currentPage + 1 < totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
                >
                    Next →
                </button>
            )}
        </div>
    );
};


export default Pagination;