// // import React, { useState } from 'react';

// // interface PopupProps {
// //   onClose: () => void;
// // }

// // const Popup: React.FC<PopupProps> = ({ onClose }) => {
// //   const [productName, setProductName] = useState('');
// //   const [attachment, setAttachment] = useState<FileList | null>(null);
// //   const [description, setDescription] = useState('');
// //   const [validationError, setValidationError] = useState('');

// //   const handleSubmit = () => {
// //     if (!productName.trim()) {
// //       setValidationError('Please enter Product Name.');
// //       return;
// //     }

// //     // Additional validation logic for other fields if needed

// //     // If all validations pass, you can handle form submission here
// //     // For simplicity, let's just close the form in this example
// //     setValidationError('');
// //     onClose();
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
// //       <div className="bg-white p-8 rounded-md">
// //         <h2 className="text-2xl font-bold mb-4">Suggest Remedy</h2>
// //         {validationError && <p className="text-red-500 mb-4">{validationError}</p>}
// //         <div className="mb-4">
// //           <label htmlFor="productName" className="block text-sm text-start font-medium text-gray-600">
// //             Product Name
// //           </label>
// //           <input
// //             type="text"
// //             id="productName"
// //             name="productName"
// //             className="mt-1 p-2 w-full border border-[#D9D9D9] rounded-md"
// //             value={productName}
// //             onChange={(e) => setProductName(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="attachment" className="block text-sm text-start font-medium text-gray-600">
// //             Attachment (Max 5 images allowed)
// //           </label>
// //           <input
// //             type="file"
// //             id="attachment"
// //             name="attachment"
// //             accept="image/*"
// //             multiple
// //             className="mt-1 p-2 w-full border-[#D9D9D9] border rounded-md"
// //             onChange={(e) => setAttachment(e.target.files)}
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="description" className="block text-sm text-start font-medium text-gray-600">
// //             Description
// //           </label>
// //           <textarea
// //             id="description"
// //             name="description"
// //             rows={4}
// //             className="mt-1 p-2 w-full border-[#D9D9D9] border rounded-md"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //           />
// //         </div>
// //         <div className="">
// //           <button
// //            onClick={handleSubmit}
// //             className="bg-gradient-to-b from-[#fb7038] to-[#FF0600] w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Popup;

// import React, { useState } from 'react';
// import { ImCross } from 'react-icons/im';

// interface PopupProps {
//   onClose: () => void;
// }

// const Popup: React.FC<PopupProps> = ({ onClose }) => {
//   const [productName, setProductName] = useState('');
//   const [attachment, setAttachment] = useState<FileList | null>(null);
//   const [description, setDescription] = useState('');
//   const [validationError, setValidationError] = useState('');

//   const handleSubmit = () => {
//     if (!productName.trim()) {
//       setValidationError('Please enter Product Name.');
//       return;
//     }

//     // Additional validation logic for other fields if needed

//     // If all validations pass, you can handle form submission here
//     // For simplicity, let's just close the form in this example
//     setValidationError('');
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-md relative">
//         <button
//           className="absolute top-4 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//         <ImCross  className="w-6 cursor-pointer font-bold" />
//         </button>
//         <h2 className="text-2xl font-bold mb-4">Suggest Remedy</h2>

//         {validationError && <p className="text-red-500 mb-4">{validationError}</p>}
//         <div className="">
//           <label htmlFor="productName" className="block text-sm text-start font-medium text-gray-600">
//             Product Name
//           </label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             className="mt-1 p-2 w-full border border-[#D9D9D9] rounded-md"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="attachment" className="block text-sm text-start font-medium text-gray-600">
//             Attachment (Max 5 images allowed)
//           </label>
//           <input
//             type="file"
//             id="attachment"
//             name="attachment"
//             accept="image/*"
//             multiple
//             className="mt-1 p-2 w-full border-[#D9D9D9] border rounded-md"
//             onChange={(e) => setAttachment(e.target.files)}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm text-start font-medium text-gray-600">
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             rows={4}
//             className="mt-1 p-2 w-full border-[#D9D9D9] border rounded-md"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="">
//           <button
//             onClick={handleSubmit}
//             className="bg-gradient-to-b from-[#fb7038] to-[#FF0600] w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React, { useState } from "react";
import { ImCross } from "react-icons/im";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [attachment, setAttachment] = useState<FileList | null>(null);
  const [description, setDescription] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = () => {
    if (!productName.trim()) {
      setValidationError("Please enter Product Name.");
      return;
    }

    // Additional validation logic for other fields if needed

    // If all validations pass, you can handle form submission here
    // For simplicity, let's just close the form in this example
    setValidationError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative rounded-md bg-white p-8">
        <button
          className="absolute top-4 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <ImCross className="w-6 cursor-pointer font-bold" />
        </button>
        <h2 className="text-2xl font-bold ">Suggest Remedy</h2>

        {validationError && (
          <p className="mb-4 text-red-500">{validationError}</p>
        )}

        {/* Add the Free Remedy button below the heading */}
        {/* <div className="float-left"> */}
        <p className="">Remedy Type</p>
        <button className="mb-4 rounded-md bg-[#00AF1C] px-4 py-2 text-white hover:bg-green-600 focus:border-green-300 focus:outline-none focus:ring">
          Free Remedy
        </button>
        {/* </div> */}

        <div className="">
          <label
            htmlFor="productName"
            className="block text-start text-sm font-medium text-gray-600"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="mt-1 w-full rounded-md border border-[#D9D9D9] p-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="attachment"
            className="block text-start text-sm font-medium text-gray-600"
          >
            Attachment (Max 5 images allowed)
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            accept="image/*"
            multiple
            className="mt-1 w-full rounded-md border border-[#D9D9D9] p-2"
            onChange={(e) => setAttachment(e.target.files)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-start text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="mt-1 w-full rounded-md border border-[#D9D9D9] p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSubmit}
            className="w-full rounded-md bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring"
          >
            Submit
          </button>
          {/* The Free Remedy button below the heading */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
