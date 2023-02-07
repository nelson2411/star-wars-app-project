import React from "react"
import Pagination from "react-bootstrap/Pagination"

interface PaginationComponentProps {
  setPageNumber: (pageNumber: number) => void
  pageNumber: number
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  setPageNumber,
  pageNumber,
}) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Pagination className="shadow p-2">
      <Pagination.First onClick={() => setPageNumber(1)} />
      <Pagination.Prev onClick={() => setPageNumber(pageNumber - 1)} />

      {pageNumbers.map((number, index) => (
        <Pagination.Item
          key={index}
          active={number === pageNumber}
          onClick={() => setPageNumber(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => setPageNumber(pageNumber + 1)} />
      <Pagination.Last onClick={() => setPageNumber(9)} />
    </Pagination>
  )
}

export default PaginationComponent
