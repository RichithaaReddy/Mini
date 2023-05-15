import React, { useState, useReducer } from "react";
import axios from "axios";
import swal from "sweetalert";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const TestPatternAdd = () => {
  const [count, setcount] = useState(1);
  const [formData, setformData] = useReducer(formReducer, {});
  const [section, setsection] = useState("");
  const [title, settitle] = useState("");
  const [noofques, setques] = useState("");
  const [difficulty, setdiffi] = useState("");
  const [duration, setduration] = useState("");
  const [totalsections, settotalsections] = useState([]);

  const postData = async (url, data) => {
    const response = await axios.post(url, data);
    return response.data;
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const getCloudLink = async (base64) => {
    const stat = axios.post("http://localhost:5000/getcloudinary", {
      url_image: base64,
    });
    stat
      .then((res) => {
        console.log(res);
        formData.logo = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      getCloudLink(base64);
      return;
    }
  };

  const handleFinalSubmit = async (e) => {
    getCloudLink(formData.logo);
    var names = formData.companyname;
    names = names[0].toUpperCase() + names.substring(1);
    formData.companyname = names;
    formData.testsections = totalsections;
    //        var l = Object.keys(formData).length
    //        if(l!=7)
    //        {
    //             swal("Enter all Details");
    //             return;
    //        }
    if (formData.testsections.length === 0) {
      swal("Enter Sections as No section was added");
      return;
    }
    const k = postData("http://localhost:5000/testpatternsadd",formData);
    console.log(k);
    console.log(formData);
    swal(formData.companyname + "  Details Added Successfully");
    //push("/dashboard/admin/testpatterns");
  };

  const handleSection = (e) => {
    e.preventDefault();
    setcount(count + 1);
    if (difficulty == "") {
      difficulty = "Varies";
    }
    totalsections.push({
      section: section,
      title: title,
      noofques: noofques,
      difficulty: difficulty,
      duration: duration,
    });
    setsection("");
    settitle("");
    setques("");
    setdiffi("");
    setduration("");
  };
  return (
    <div className="mt-[12vh]">
    
      <form className="grid lg:grid-cols-3 md:grid-cols-2 mx-5">
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="companyname"
            onChange={setformData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500"
            placeholder="Company"
            required
          />
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="file"
            name="logo"
            onChange={uploadImage}
            className="w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500 text-center"
            placeholder="Logo"
            required
          />
          <p className="text-xs px-5">Upload JPG/JPEG less than 1mb</p>
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="rolename"
            onChange={setformData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500"
            placeholder="Role Name"
            required
          />
        </div>
        <div className="input-type px-2 py-2">
          <select
            name="jobtype"
            onChange={setformData}
            className="browser-default custom-select border py-3 w-full rounded px-5"
          >
            <option value="Assessment Partners" className="hover:bg-orange-200">
              Assessment Partner
            </option>
            <option value="Service Companies" className="hover:bg-orange-200">
              Service Companies
            </option>
            <option
              value="Product / Dream Companies"
              className="hover:bg-orange-200"
            >
              Product/Dream Company
            </option>
            <option
              value="Product / Super Dream"
              className="hover:bg-orange-200"
            >
              Product / Super Dream
            </option>
          </select>
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="duration"
            onChange={setformData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500"
            placeholder="Duration"
            required
          />
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="overallcutoff"
            onChange={setformData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500"
            placeholder="Overallcut Off"
            required
          />
        </div>
      </form>
      <h3 className=" text-2xl text-gray-500 my-6 text-center">
        Add Test Pattern Section - {count}
      </h3>

      <form
        className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3 mx-5"
        onSubmit={handleSection}
      >
        <div className="input-type px-2 py-2">
          <input
            type="number"
            name="section"
            value={section}
            onChange={(e) => {
              setsection(e.target.value);
            }}
            className="border w-full px-5 py-3 focus:border-gray-500 rounded-md"
            placeholder="Section"
            required
          />
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="border w-full px-5 py-3 focus:border-gray-500 rounded-md"
            placeholder="title"
            required
          />
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="noofques"
            value={noofques}
            onChange={(e) => {
              setques(e.target.value);
            }}
            className="border w-full px-5 py-3 focus:border-gray-500 rounded-md"
            placeholder="No of Questions"
            required
          />
        </div>
        <div className="input-type px-3 py-2 w-full">
          <select
            defaultValue={"Varies"}
            onChange={(e) => {
              setdiffi(e.target.value);
            }}
            className="browser-default custom-select border py-3 w-full rounded px-5"
          >
            <option value="varies" className="hover:bg-orange-200">
              Varies
            </option>
            <option value="Easy" className="hover:bg-orange-200">
              Easy
            </option>
            <option value="Medium" className="hover:bg-orange-200">
              Medium
            </option>
            <option value="Hard" className="hover:bg-orange-200">
              Hard
            </option>
          </select>
        </div>
        <div className="input-type px-2 py-2">
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={(e) => {
              setduration(e.target.value);
            }}
            className="border w-full px-5 py-3 focus:border-gray-500 rounded-md"
            placeholder="Enter Duration in Minutes (Ex : 25 Minutes)"
            required
          />
        </div>
        <div className="text-center">
          <button className="rounded border text-gray-800 border-gray-600 cursor-pointer mt-4 px-4 py-2">
            Add Section {count}
          </button>
        </div>
      </form>
      <div className="p-3 text-center my-5 mx-5">
        <button
          className="px-4 py-2 border rounded border-gray-800 text-gray-800 bg-gray-100"
          onClick={handleFinalSubmit}
        >
          Post Patterns
        </button>
      </div>
    </div>
  );
};

export default TestPatternAdd;
