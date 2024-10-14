import React, { useState } from "react";

import { Clipboard } from "flowbite-react";
import { docFile, txtFile } from "./regAction.config";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

function RegistrationForm() {
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [dial, setDail] = useState("");
  const [docp, setDocp] = useState("");

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const pdfs = ref(docFile, `Pdfs/${v4()}`);
    uploadBytes(pdfs, e.target.files[0]).then((data) => {
      console.log(data, "pdfs");
      getDownloadURL(data.ref).then((val) => {
        setDocp(val);
      });
    });
  };
  const [isDisabled, setIsDisabled] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    const valRef = collection(txtFile, "txtData");
    await addDoc(valRef, {
      txtVal: text,
      dialVal: dial,
      mailVal: mail,
      pdfVal: docp,
    });
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 3000); // Adjust the delay time as neede
    alert("Data received successfully.");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="w-full max-w-md">
        <div className="p-12 shadow-2xl bg-gradient-to-tr from-slate-900 to-amber-600 rounded-md">
          <p className="text-white font-medium">This is the account details:</p>
          <br />

          <p className="text-white text-2xl font-medium">GTB - ANORA MEDIA</p>
          <div className="mt-2 grid w-full max-w-[23rem] grid-cols-8 gap-2 sm:grid-cols-1">
            {" "}
            <label className="sr-only">Label</label>
            <input
              id="npm-install"
              type="text"
              className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value="0656890371"
              disabled
              readOnly
            />
            <Clipboard valueToCopy="0656890371" label="Copy" />
          </div>
          <hr className="mt-3" />
          <div>
            <label className="block text-white font-semibold text-2xl mb-5 mt-2">
              Full Name
            </label>
            <input
              onChange={(e) => setText(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              type="text"
              required
              placeholder="Full Name"
            />

            <div>
              <label className="block text-white font-semibold text-2xl mb-5 mt-2">
                Email
              </label>
              <input
                onChange={(e) => setMail(e.target.value)}
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-2xl mb-5 mt-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                required
                onChange={(e) => setDail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-white font-semibold text-2xl mb-5 mt-2">
                Upload Payment Receipt
              </label>
              <input
                className="border w-full text-base text-white px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
                type="file"
                accept=".pdf"
                onChange={(e) => handleUpload(e)}
              />
            </div>
          </div>
          <button
            disabled={isDisabled}
            onClick={handleClick}
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
