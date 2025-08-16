import "../styles/Preview.css";
import { useEffect, useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

function Preview({ personalInfo, educationInfo, experienceInfo }) {
  const previousUrlRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      if (previousUrlRef.current) URL.revokeObjectURL(previousUrlRef);
    };
  }, [personalInfo, educationInfo, experienceInfo]);

  return (
    <div className="pdf-container">
      {pdfUrl && (
        <>
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page
              pageNumber={currentPage}
              scale={1.5}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>

          {/* Navigation Buttons */}
          {numPages > 1 && (
            <div className="pdf-navigation">
              {currentPage > 1 && (
                <button onClick={() => setCurrentPage((prev) => prev - 1)}>
                  Previous
                </button>
              )}

              <span>
                {currentPage} / {numPages}
              </span>

              {currentPage < numPages && (
                <button onClick={() => setCurrentPage((prev) => prev + 1)}>
                  Next
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Preview;
