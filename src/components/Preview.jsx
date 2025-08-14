import "../styles/Preview.css";
import { useEffect, useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

function Preview({ personalInfo, educationInfo }) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const previousUrlRef = useRef(null);

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(
        <MyDocument personalInfo={personalInfo} educationInfo={educationInfo} />
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
  }, [personalInfo, educationInfo]);

  return (
    <div className="pdf-container">
      {pdfUrl && (
        <Document file={pdfUrl}>
          <Page
            pageNumber={1}
            scale={1.5}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      )}
    </div>
  );
}

export default Preview;
