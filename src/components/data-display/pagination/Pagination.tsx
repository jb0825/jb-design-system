import { Select } from "@components/inputs/select/Select";
import { css } from "@emotion/react";
import { arrow, arrow_dbl } from "./icons";
import { Options, PaginationProps } from "@types";
import { range } from "lodash-es";
import React, { useEffect, useMemo, useState } from "react";
import { PaginationButton } from "./PaginationButton";
import { Button } from "@components/inputs/button/Button";

// 페이징 버튼 개수
const PAGE_BUTTON_COUNT = 5;

export const Pagination = ({
  onPageChange,
  pagination = {
    page: 1,
    pageSize: 10,
    totalPages: 10,
    totalRows: 100,
  },
  disableRowsPerPage = false,
  rowsPerPage: rowsPerPageArray = [10, 50, 100, 150, 200],
}: PaginationProps) => {
  const [rowsPerPage, setRowsPerPage] = useState<Options[]>(
    rowsPerPageArray.map((i) => ({ label: `${i}`, value: i }))
  );

  const [page, setPage] = useState(pagination.page);
  const [pageSize, setPageSize] = useState(pagination.pageSize);
  const [totalPages, setTotalPages] = useState(pagination.totalPages);
  const [totalRows, setTotalRows] = useState(pagination.totalRows);

  /**
   * Pagination number buttons control
   */
  const [pageBtn, setPageBtn] = useState({
    start: 1,
    end: Math.min(PAGE_BUTTON_COUNT, totalPages),
  });

  /**
   * Reset pagination number buttons
   */
  const resetPageBtn = (end = totalPages) =>
    setPageBtn({ start: 1, end: Math.min(PAGE_BUTTON_COUNT, end) });

  /**
   * 이전 페이지 < 버튼 Click handler
   */
  const onPrevClickHandler = () => {
    const prevPage = Math.max(1, page - 1);
    setPage(prevPage);
    if (prevPage < pageBtn.start)
      setPageBtn({ start: prevPage, end: pageBtn.end - 1 });
  };

  /**
   * 다음 페이지 > 버튼 Click handler
   */
  const onNextClickHandler = () => {
    const nextPage = Math.min(totalPages, page + 1);
    setPage(nextPage);
    if (nextPage > pageBtn.end)
      setPageBtn({ start: pageBtn.start + 1, end: nextPage });
  };

  /**
   * 첫번째 페이지 << 버튼 Click handler
   */
  const onFirstClickHandler = () => {
    setPage(1);
    resetPageBtn();
  };

  /**
   * 마지막 페이지 >> 버튼 Click handler
   */
  const onLastClickHandler = () => {
    setPage(totalPages);
    setPageBtn({
      start: Math.max(totalPages - PAGE_BUTTON_COUNT + 1, 1),
      end: totalPages,
    });
  };

  /**
   * PageSize change handler
   */
  const onPageSizeChange = (value: string | number) => {
    const pageSize = Number(value);
    const totalPages = Math.floor(totalRows / pageSize);
    setPageSize(pageSize);
    setTotalPages(totalPages);
    setPage(1);
    resetPageBtn(totalPages);
  };

  const pageButtons = useMemo(
    () => (
      <div
        css={css`
          display: flex;
          gap: 5px;
          margin: 0 10px;
        `}
      >
        {range(pageBtn.start, pageBtn.end + 1).map((i) => (
          <PaginationButton
            active={page === i}
            page={i}
            key={i}
            onButtonClick={setPage}
          />
        ))}
      </div>
    ),
    [pageBtn.start, pageBtn.end, page]
  );

  useEffect(() => {
    if (!onPageChange) return;

    onPageChange({
      page,
      pageSize,
      totalPages,
      totalRows,
    });
  }, [page, pageSize]);

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: ${disableRowsPerPage ? "center" : "space-between"};
      `}
    >
      {/** Page size select */}
      {!disableRowsPerPage && (
        <div
          css={css`
            width: 100px;
          `}
        >
          <Select
            options={rowsPerPage}
            onValueChange={onPageSizeChange}
            value={pageSize}
          />
        </div>
      )}

      {/** Page number buttons */}
      <div
        css={css`
          display: flex;
          align-items: center;
          margin: 0 10px;
          & > img {
            width: 36px;
            height: 36px;
            cursor: pointer;
            border-radius: 50%;
            &:hover {
              background-color: #f1f1f1;
            }
          }
        `}
      >
        <Button
          type="icon"
          icon={arrow_dbl}
          onClick={onFirstClickHandler}
          disabled={page === 1}
        />
        <Button
          type="icon"
          icon={arrow}
          onClick={onPrevClickHandler}
          disabled={page === 1}
        />
        {pageButtons}
        <Button
          type="icon"
          icon={arrow}
          onClick={onNextClickHandler}
          style={{ rotate: "180deg" }}
          disabled={page === totalPages}
        />
        <Button
          type="icon"
          icon={arrow_dbl}
          onClick={onLastClickHandler}
          style={{ rotate: "180deg" }}
          disabled={page === totalPages}
        />
      </div>
    </div>
  );
};
