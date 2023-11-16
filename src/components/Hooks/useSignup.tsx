// // useSignup.tsx
// import { useState } from 'react';
// import { auth } from '../Security/FirebaseConfig';

// const useSignup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       setError(null);
//       await auth.createUserWithEmailAndPassword(formData.email, formData.password);
//       // You can also update the user's display name
//       await auth.currentUser?.updateProfile({ displayName: formData.username });
//       // Handle success or navigate to the next page
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return { formData, error, handleChange, handleSubmit };
// };

// export default useSignup;
