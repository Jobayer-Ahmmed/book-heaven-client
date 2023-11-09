// import { Link, useLoaderData } from "react-router-dom"


// const Read = () => {
//     const {data} = useLoaderData()
//     console.log(data.read)
//     const {_id, read} =data
    
//   return (
//     <div className=" px-xPadding2 md:px-xPadding my-myMargin">
//         <div>
//             <p>
//             {read}
//             </p>
//           <Link to={`/pdf/${_id}`}>Make PDF The Page</Link>
//         </div>
//     </div>
//   )
// }

// export default Read


import { useRef } from "react";
import { useLoaderData } from "react-router-dom";

const Read = () => {
  const { data } = useLoaderData();
  const { _id, read } = data;
  const contentRef = useRef(null);

  const handleCreatePDF = () => {
    const content = contentRef.current;

    if (content) {
      const pdfOptions = {
        margin: 10,
        filename: `document_${_id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      window.html2pdf(content, pdfOptions);
    }
  };

  return (
    <div className="px-xPadding2 md:px-xPadding my-myMargin">
      <div ref={contentRef}>
        <p>{read}</p>
      </div>
      <button onClick={handleCreatePDF}>Make PDF The Page</button>
    </div>
  );
};

export default Read;
