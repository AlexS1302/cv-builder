import "../styles/Preview.css";
import { useEffect, useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import useContainerWidth from "../hooks/useContainerWidth";

function Preview({
  personalInfo,
  educationInfo,
  experienceInfo,
  pdfUrl,
  setPdfUrl,
}) {
  const previousUrlRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { width, containerRef } = useContainerWidth();

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(
        <MyDocument
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      ).toBlob();

      const newUrl = URL.createObjectURL(blob);

      if (previousUrlRef.current) {
        URL.revokeObjectURL(previousUrlRef.current);
      }

      previousUrlRef.current = newUrl;
      setPdfUrl(newUrl);
    };

    generatePdf();

    return () => {
      if (previousUrlRef.current) URL.revokeObjectURL(previousUrlRef.current);
    };
  }, [personalInfo, educationInfo, experienceInfo, setPdfUrl]);

  return (
    <div className="pdf-container" ref={containerRef}>
      {pdfUrl && (
        <>
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {width && (
              <Page
                pageNumber={currentPage}
                width={width}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            )}
          </Document>

          {/* Navigation Buttons */}
          {numPages > 1 && (
            <div className="pdf-navigation">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                style={{
                  visibility: currentPage === 1 ? "hidden" : "visible",
                }}
                className="nav-button"
              >
                Previous
              </button>

              <span className="page-indicator">
                {currentPage} / {numPages}
              </span>

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === numPages}
                style={{
                  visibility: currentPage === numPages ? "hidden" : "visible",
                }}
                className="nav-button"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Preview;
