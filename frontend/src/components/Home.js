// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function ProfileForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     profilePic: null,
//   });
//   const [selectedType, setSelectedType] = useState('');
//   const [profiles, setProfiles] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, profilePic: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setProfiles([...profiles, formData]);
//     setFormData({ firstName: "", lastName: "", age: "", profilePic: null });
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex gap-2">
//         <button type="button" className="btn btn-secondary" onClick={() => setSelectedType('Missing')}>
//           Missing
//         </button>
//         <button type="button" className="btn btn-primary" onClick={() => setSelectedType('Report')}>
//           Report
//         </button>
//       </div>

//       <div className="d-flex mt-4 gap-2">
//         <div>
//           {selectedType && (
//             <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
//               <h2 className="text-center mb-4">{selectedType} Form</h2>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   name="age"
//                   placeholder="Age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 Submit
//               </button>
//             </form>
//           )}
//         </div>
//         <div className="w-100" style={{ maxWidth: "400px" }}>
//           {profiles.map((profile, index) => (
//             <div key={index} className="card p-3 mb-3 d-flex flex-row align-items-center">
//               <img src={profile.profilePic ? URL.createObjectURL(profile.profilePic) : "https://via.placeholder.com/50"}
//                 alt="Profile" className="rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
//               <div>
//                 <h5 className="mb-1">{profile.firstName} {profile.lastName}</h5>
//                 <p className="mb-0 text-muted">Age: {profile.age} | Gender: N/A</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react'

const Home = () => {
  return (
   <>
   <div>A big photo or a div containing a slogan </div>
   <div>a div containing something like - if u want to report a  missing person click here [Repot Missing button]</div>
   <div>same for found</div>
   <div> add testimonoials - 3 cards in a row how our website helped them </div>
   <div>add vid or images </div>
   <div>faqs</div>
   <div>contact us</div>
   </>
  )
}

export default Home
