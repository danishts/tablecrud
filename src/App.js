// import React, { useState } from 'react';
// import './App.css';

// const MainTable = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John', lastName: 'Doe', phoneNumber: '1234567890', imageUrl: 'https://example.com/default.jpg' }
//   ]);
//   const [newEntry, setNewEntry] = useState({ id: '', name: '', lastName: '', phoneNumber: '', imageUrl: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEntry({ ...newEntry, [name]: value });
//   };

//   const handleSave = () => {
//     setData([...data, newEntry]);
//     setNewEntry({ id: '', name: '', lastName: '', phoneNumber: '', imageUrl: '' });
//   };

//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewEntry({ ...newEntry, imageUrl: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="main-table-container">
//       <h2>Main Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Phone Number</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.lastName}</td>
//               <td>{item.phoneNumber}</td>
//               <td><img src={item.imageUrl} alt="Avatar" width="50" height="50" /></td>
//               <td>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td><input type="text" name="id" value={newEntry.id} onChange={handleInputChange} /></td>
//             <td><input type="text" name="name" value={newEntry.name} onChange={handleInputChange} /></td>
//             <td><input type="text" name="lastName" value={newEntry.lastName} onChange={handleInputChange} /></td>
//             <td><input type="text" name="phoneNumber" value={newEntry.phoneNumber} onChange={handleInputChange} /></td>
//             <td>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </td>
//             <td><button onClick={handleSave}>Save</button></td>
//           </tr>
//         </tbody>
//       </table>           <form></form>
//     </div>
//   );
// };

// export default MainTable;



















// import React, { useState } from 'react';
// import './App.css';

// const MainTable = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John', lastName: 'Doe', phoneNumber: '1234567890', imageUrl: 'https://example.com/default.jpg' }
//   ]);

//   const [newEntry, setNewEntry] = useState({ name: '', lastName: '', phoneNumber: '', imageUrl: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEntry({ ...newEntry, [name]: value });
//   };

//   const handleSave = () => {
//     const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a unique ID
//     const newData = { ...newEntry, id: newId }; // Combine new entry with generated ID
//     setData([...data, newData]); // Add new entry to the data array
//     setNewEntry({ name: '', lastName: '', phoneNumber: '', imageUrl: '' }); // Clear input fields
//   };

//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewEntry({ ...newEntry, imageUrl: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="main-table-container">
//       <h2>Main Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Phone Number</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.lastName}</td>
//               <td>{item.phoneNumber}</td>
//               <td><img src={item.imageUrl} alt="Avatar" width="50" height="50" /></td>
//               <td>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{data.length > 0 ? data[data.length - 1].id + 1 : 1}</td>
//             <td><input type="text" name="name" value={newEntry.name} onChange={handleInputChange} /></td>
//             <td><input type="text" name="lastName" value={newEntry.lastName} onChange={handleInputChange} /></td>
//             <td><input type="text" name="phoneNumber" value={newEntry.phoneNumber} onChange={handleInputChange} /></td>
//             <td>
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </td>
//             <td><button onClick={handleSave}>Save</button></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MainTable;















// ok hai









// import React, { useState } from 'react';
// import './App.css';

// const MainTable = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John', lastName: 'Doe', phoneNumber: '1234567890', imageUrl: 'https://example.com/default.jpg' }
//   ]);

//   const [newEntry, setNewEntry] = useState({ name: '', lastName: '', phoneNumber: '', imageUrl: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEntry({ ...newEntry, [name]: value });
//   };

//   const handleSave = () => {
//     const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a unique ID
//     const newData = { ...newEntry, id: newId }; // Combine new entry with generated ID
//     setData([...data, newData]); // Add new entry to the data array
//     setNewEntry({ name: '', lastName: '', phoneNumber: '', imageUrl: '' }); // Clear input fields
//   };

//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewEntry({ ...newEntry, imageUrl: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="main-table-container">
//       <h2>Main Table</h2>
//       <div className="table-wrapper">
//         <table>
//           <thead>
//             <tr>
//               <td></td><th>ID</th>
//               <th>Name</th>
//               <th>Last Name</th>
//               <th>Phone Number</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.phoneNumber}</td>
//                 <td><img src={item.imageUrl} alt="Avatar" /></td>
//                 <td>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td>{data.length > 0 ? data[data.length - 1].id + 1 : 1}</td>
//               <td><input type="text" name="name" value={newEntry.name} onChange={handleInputChange} /></td>
//               <td><input type="text" name="lastName" value={newEntry.lastName} onChange={handleInputChange} /></td>
//               <td><input type="text" name="phoneNumber" value={newEntry.phoneNumber} onChange={handleInputChange} /></td>
//               <td>
//                 <input type="file" accept="image/*" onChange={handleImageUpload} />
//               </td>
//               <td><button onClick={handleSave}>Save</button></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MainTable;



















// import React, { useState } from 'react';
// import './App.css';

// const MainTable = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John', lastName: 'Doe', phoneNumber: '1234567890', imageUrl: 'https://example.com/default.jpg' }
//   ]);

//   const [newEntry, setNewEntry] = useState({ name: '', lastName: '', phoneNumber: '', imageUrl: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEntry({ ...newEntry, [name]: value });
//   };

//   const handleSave = () => {
//     const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a unique ID
//     const newData = { ...newEntry, id: newId }; // Combine new entry with generated ID
//     setData([...data, newData]); // Add new entry to the data array
//     setNewEntry({ name: '', lastName: '', phoneNumber: '', imageUrl: '' }); // Clear input fields
//   };

//   const handleDelete = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewEntry({ ...newEntry, imageUrl: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="main-table-container">
//       <h2>Main Table</h2>
//       <div className="table-wrapper">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Last Name</th>
//               <th>Phone Number</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.phoneNumber}</td>
//                 <td><img src={item.imageUrl} alt="Avatar" /></td>
//                 <td>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td>{data.length > 0 ? data[data.length - 1].id + 1 : 1}</td>
//               <td><input type="text" name="name" value={newEntry.name} onChange={handleInputChange} /></td>
//               <td><input type="text" name="lastName" value={newEntry.lastName} onChange={handleInputChange} /></td>
//               <td><input type="text" name="phoneNumber" value={newEntry.phoneNumber} onChange={handleInputChange} /></td>
//               <td>
//                 <input type="file" accept="image/*" onChange={handleImageUpload} />
//               </td>
//               <td><button onClick={handleSave}>Save</button></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MainTable;



















// add firebase

import React, { useState, useEffect } from 'react';
import './App.css';
import { db, storage } from './firebase'; // Import Firebase configuration
import { collection, addDoc, deleteDoc, doc ,getDocs } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const MainTable = () => {
  const [data, setData] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: '', lastName: '', phoneNumber: '', imageUrl: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const querySnapshot = await collection(db, "tableData").get();
        const querySnapshot = await getDocs(collection(db, "tableData"));

        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({ ...doc.data(), id: doc.id });
        });
        setData(newData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSave = async () => {
    
    const newId = data.length > 0 ? parseInt(data[data.length - 1].id) + 1 : 1;
    const newData = { ...newEntry, id: newId.toString() };

    try {
      console.log("in fn ");
      // Add new entry data to Firestore
      const docRef = await addDoc(collection(db, "tableData"), newData);
      console.log("doc ref not working");
      console.log("Document added with ID: ", docRef.id);
      setData([...data, newData]);
      setNewEntry({ name: '', lastName: '', phoneNumber: '', imageUrl: '' });

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `images/${docRef.id}`);
      await uploadBytes(imageRef, newEntry.imageUrl);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.log("er,");
      console.error("Error adding document: ", error);

    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tableData", id));
      console.log("Document deleted successfully!");
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewEntry({ ...newEntry, imageUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="main-table-container">
      <h2>Main Table</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <td><img src={item.imageUrl} alt="Avatar" width="50" height="50" /></td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>{data.length > 0 ? parseInt(data[data.length - 1].id) + 1 : 1}</td>
              <td><input type="text" name="name" value={newEntry.name} onChange={handleInputChange} /></td>
              <td><input type="text" name="lastName" value={newEntry.lastName} onChange={handleInputChange} /></td>
              <td><input type="text" name="phoneNumber" value={newEntry.phoneNumber} onChange={handleInputChange} /></td>
              <td>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </td>
              <td><button onClick={handleSave}>Save</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
