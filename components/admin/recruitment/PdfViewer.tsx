"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";
// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFProps {
  url: string;
}

const PDF: React.FC<PDFProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setError(null); // Clear any previous errors
  }

  function onDocumentLoadError(error: Error): void {
    setError(error.message);
  }

  function goToPrevPage() {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) =>
      Math.min(prevPageNumber + 1, numPages || 1)
    );
  }
  //   react-pdf__Page__textContent textLayer
  return (
    <div>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {error && <p>Error loading PDF: {error}</p>}
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="flex item-center gap-3">
        <button
          className="hover:text-blue-600"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button
          className="hover:text-blue-600"
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDF;
