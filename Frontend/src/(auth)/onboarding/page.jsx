// import React, { useState } from 'react';
// import { useNavigate, Routes, Route } from 'react-router-dom';
// import { useClerk } from '@clerk/clerk-react';
// import { User, Doctor } from '../../../../Server/model/user';

// const OnboardingPage = () => {
//   const { currentUser } = useClerk();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     fullName: '',
//     dateOfBirth: '',
//     isDoctor: false,
//     degree: '',
//     experience: '',
//     hospital: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (formData.isDoctor) {
//         const doctor = new Doctor({
//           degree: formData.degree,
//           experience: formData.experience,
//           hospital: formData.hospital,
//           name: currentUser.id,
//         });

//         await doctor.save();
//       } else {
//         const user = new User({
//           username: formData.username,
//           email: formData.email,
//           password: formData.password,
//           fullName: formData.fullName,
//           dateOfBirth: formData.dateOfBirth,
//           isDoctor: formData.isDoctor,
//         });

//         await user.save();
//       }

//       navigate('/'); // Navigate to the home route
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome, {currentUser && currentUser.fullName}</h1>
//       <Routes>
//         <Route
//           path="/"
//           element={<div>Home Page</div>}
//         />
//         <Route
//           path="onboarding"
//           element={
//             <form onSubmit={handleSubmit}>
//               {/* Your form inputs */}
//               <button type="submit">Submit</button>
//             </form>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default OnboardingPage;
