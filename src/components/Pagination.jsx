import React, { useEffect, useState } from "react";
import "../assets/scss/pagination.scss";

const Pagination = ({ pages, setCurrentPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
    window.scrollTo(0, 0);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="pagination">
      <li
        onClick={() =>
          setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
        }
        className={`${
          currentButton === 1
            ? "page-item previous disable"
            : "page-item previous"
        }`}
      >
        <span href="#!" className="page-link">
          Önceki
        </span>
      </li>

      {numOfPages.map((page, index) => {
        return (
          <li
            key={index}
            onClick={() => setCurrentButton(page)}
            className={`${
              currentButton === page
                ? "page-item current-page active"
                : "page-item current-page"
            }`}
          >
            <span href="#!" className="page-link">
              {page}
            </span>
          </li>
        );
      })}

      <li
        onClick={() =>
          setCurrentButton((prev) =>
            prev === numOfPages.length ? prev : prev + 1
          )
        }
        className={`${
          currentButton === numOfPages.length
            ? "page-item next disable"
            : "page-item next"
        }`}
      >
        <span href="#!" className="page-link">
          Sonraki
        </span>
      </li>
    </div>
  );
};

export default Pagination;
