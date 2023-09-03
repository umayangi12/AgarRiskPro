// import React, { useState } from "react";

// export const SeverityPredictor = () => {
//   const [pred, setPred] = useState(null);
//   const [formData, setFormData] = useState({
//     disease: "",
//     nitrogen: "",
//     phosphorus: "",
//     potassium: "",
//     temperature: "",
//     humidity: "",
//     ph: "",
//   });

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // Send the form data to the server for prediction
//   fetch("/http://localhost:3000/predict", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Prediction data:", data); // Log the received data
//       setPred(data.pred);
//     })
//     .catch((error) => {
//       console.error("Error submitting form:", error); // Log any errors
//     });
// };
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };

//   return (
//     <div className="container">
//       <h1>Agarwood Severity Predictor</h1>
//       <form action="/predict" method="POST" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Disease Name</label>
//           <div className="custom_select">
//             <select name="disease" id="disease" onChange={handleInputChange}>
//               <option value="" selected hidden>
//                 Select
//               </option>
//               <option value="anthracnose">Anthracnose</option>
//               <option value="bacterialWilt">Bacterial Wilt</option>
//               <option value="cankerDisease">Canker Disease</option>
//               <option value="cercosporaLeafBlight">
//                 Cercospora Leaf Blight
//               </option>
//               <option value="dieback">Dieback</option>
//               <option value="leafSpot">Leaf Spot</option>
//               <option value="nematodeInfestations">
//                 Nematode Infestations
//               </option>
//               <option value="nutrientDeficiency">Nutrient Deficiency</option>
//               <option value="powderyMildew">Powdery Mildew</option>
//               <option value="rootRot">Root Rot</option>
//               <option value="rustDisease">Rust Disease</option>
//               <option value="salinityStress">Salinity Stress</option>
//               <option value="waterlogging">Waterlogging</option>
//             </select>
//           </div>
//           <label>Nitrogen Level (mg/kg)</label>
//           <input
//             className="input"
//             type="text"
//             name="nitrogen"
//             required
//             onChange={handleInputChange}
//             value={formData.nitrogen}
//           />
//           <div>
//             <label htmlFor="phosphorus">Phosphorus Level (mg/kg)</label>
//             <input
//               className="input"
//               type="text"
//               name="phosphorus"
//               required
//               onChange={handleInputChange}
//               value={formData.phosphorus}
//             />
//           </div>
//           <div>
//             <label htmlFor="potassium">Potassium Level (mg/kg)</label>
//             <input
//               className="input"
//               type="text"
//               name="potassium"
//               required
//               onChange={handleInputChange}
//               value={formData.potassium}
//             />
//           </div>
//           <div>
//             <label htmlFor="temperature">Temperature (°C)</label>
//             <input
//               className="input"
//               type="text"
//               name="temperature"
//               required
//               onChange={handleInputChange}
//               value={formData.temperature}
//             />
//           </div>
//           <div>
//             <label htmlFor="humidity">Humidity (%)</label>
//             <input
//               className="input"
//               type="text"
//               name="humidity"
//               required
//               onChange={handleInputChange}
//               value={formData.humidity}
//             />
//           </div>
//           <div>
//             <label htmlFor="ph">pH</label>
//             <input
//               className="input"
//               type="text"
//               name="ph"
//               required
//               onChange={handleInputChange}
//               value={formData.ph}
//             />
//             <div>
//               <input className="btn" type="submit" value="Predict Severity" />
//             </div>
//           </div>
//         </div>
//       </form>
//       <div className="result">
//         {pred === 1.0 && <p>Severity Level: Mild</p>}
//         {pred === 2.0 && <p>Severity Level: Moderate</p>}
//         {pred === 3.0 && <p>Severity Level: Severe</p>}
//       </div>{" "}
//     </div>
//   );
// };

// export default SeverityPredictor;
