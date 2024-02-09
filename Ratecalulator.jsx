// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import './Ratecalculator.css';

function RowPopup({ isOpen, onClose, onAddRow ,editItem}) {
  const [employeeName, setEmployeeName] = useState('');
  const [hourRate, setHourRate] = useState(0);
  const [currentRate, setCurrentRate] = useState(0);
  const [customRate, setCustomRate] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [actions, setActions] = useState(0);

  const handleAddRow = () => {
    const newRow = {
      employeeName,
      hourRate,
      currentRate,
      customRate,
      totalHours,
      totalRate,
      actions,
    };
    onAddRow(newRow);
    onClose()
    
  if(isOpen){
    setEmployeeName('')
    setCurrentRate('');
    setHourRate('');
    setCustomRate('');
    setTotalHours('');
    setTotalRate('');
    setActions('');
  }
  };

  console.log(editItem,">.......................................");

  return isOpen ? (
    <div className='rate_contaier'>
    <div className="popup">
      <div className="popup-content">
        <h2>Add Employee Details</h2>
        <label>
          Employee Name:
          <br />
          <select className="dropdown" value={employeeName} onChange={(e) => setEmployeeName(e.target.value) }>
            <option value="">Select an Employee</option>
            <option value='Aakash'>Aakash</option>
            <option value='AkshayKanna'>Akshay kanna</option>
            <option value='ArunKarthick'>Arun Karthick</option>
            <option value='Balamurugan'>Balamurugan</option>
            <option value='Bharath'>Bharath</option>
            <option value='Bhuvaneswari'>Bhuvaneswari</option>
            <option value='Dharmaprabu'>Dharmaprabu</option>
            <option value='Dinesh'>Dinesh</option>
            <option value='Ezhilarasi'>Ezhilarasi </option>
            <option value='GladsonRaj '>Gladson Raj </option>
            <option value='GowthamRavichandran'>Gowtham Ravichandran</option>
            <option value='Hari Vishnu'>Hari Vishnu</option>
            <option value='Harini '>Harini </option>
            <option value='Indrazith '>Indrazith </option>
            <option value='Iswarya '>Iswarya </option>
            <option value='Jayeshwaran '>Jayeshwaran </option>
            <option value='Jeevanantham '>Jeevanantham </option>
            <option value="JiniShaji">Jini Shaji</option>
            <option value="Kanakavalli ">Kanakavalli</option>
            <option value="Karthick ">Karthick</option>
            <option value='Kiruthikaa '>Kiruthika</option>
            <option value='Lakshmikanthan '>Lakshmikanthan </option>
            <option value='Mahesha '>Mahesha </option>
            <option value='Manikandan '>Manikandan</option>
            <option value='Meenambika'>Meenambika </option>
            <option value='Mugundhan '>Mugundhan </option>
            <option value='NaveenKumar'>Naveen Kumar</option>
            <option value='Navin Prasanth'>Navin Prasanth</option>
            <option value='Nivetha'>Nivetha</option>
            <option value='Pavithra '>Pavithra </option>
            <option value='Prabakaran '>Prabakaran </option>
            <option value='PradeepMurugan '>Pradeep Murugan</option>
            <option value='Revathi '>Revathi </option>
            <option value='Rithika '>Rithika </option>
            <option value='Sakthi Kumar '>Sakthi Kumar</option>
            <option value='Sakthi SanjeevKavara'>Sanjeev Kavara</option>
            <option value='SaranyaG '>Saranya G</option>
            <option value='SaranyaP'>Saranya P</option>
            <option value='Selvakannan'>Selvakannan</option>
            <option value='ShaliqMohammed '>Shaliq Mohammed</option>
            <option value='Shenbagavalli'>Shenbagavalli</option>
            <option value='ShivaDharshini'>Shiva Dharshini</option>
            <option value='Siddarth'>Siddarth</option>
            <option value='Sreedharsan'>Sreedharsan</option>
            <option value='SuryaShree'>SuryaShree</option>
            <option value='Swathikka'>Swathikka</option>
            <option value='SyedMoosa'>Syed Moosa</option>
            <option value='Tharunya'>Tharunya</option>
            <option value='Thiruppathi'>Thiruppathi</option>
            <option value='Velayutham'>Velayutham</option>
            <option value='Vignesh'>Vignesh</option>
          </select>
        </label>
        <br /><br></br>
        <label>Our Rate $/hr </label>
        <br />  
        <input type="number" value={hourRate} onChange={(e) => setHourRate(e.target.value)} />
        <br /><br />
        <label>Current $/hr rate </label>
        <br />
        <input type="number" value={Math.round(dollar).toFixed(2)} />
        <br /><br />
        {/* <label>/hr Rate </label>
        <br />
        <input type="number" value={customRate} onChange={(e) => setCustomRate(e.target.value)} />
        <br /> */}
        <label>Total hrs/mon </label>
        <br />
        <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
        <br /><br></br>
        {/* <label>Total Rate/mon </label>
        <br />
        <input type="number" value={totalRate} onChange={(e) => setTotalRate(e.target.value)} />
        <br /> */}
        <button id="add_btn" onClick={handleAddRow}>Submit</button>
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
    </div>
  ) : null;
}

//<<<<<<<<<<<<<<<<<<<<< EDIT ROW >>>>>>>>>>>>>>>>>>>>>>>
function EditRow({ editOpen, editClose, onAddRow, edit }) {
  const [employeeName, setEmployeeName] = useState('');
  const [hourRate, setHourRate] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    if (edit) {
      setEmployeeName(edit.employeeName || '');
      setHourRate(edit.hourRate || 0);
      setTotalHours(edit.totalHours || 0);
    }
  }, [edit]);

  const handleAddRow = () => {
    const newRow = {
      employeeName,
      hourRate,
      totalHours,
    };
    onAddRow(newRow);
    editClose();
  };

  return editOpen ? (
    <div className='rate_contaier'>
      <div className="popup">
        <div className="popup-content">
          <h2>Update Employee Details</h2>
          <label>
            Employee Name:
            <br />
            <select className="dropdown" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} disabled >
            <option value="">Select an Employee</option>
            <option value='Aakash'>Aakash</option>
            <option value='AkshayKanna'>Akshay kanna</option>
            <option value='ArunKarthick'>Arun Karthick</option>
            <option value='Balamurugan'>Balamurugan</option>
            <option value='Bharath'>Bharath</option>
            <option value='Bhuvaneswari'>Bhuvaneswari</option>
            <option value='Dharmaprabu'>Dharmaprabu</option>
            <option value='Dinesh'>Dinesh</option>
            <option value='Ezhilarasi'>Ezhilarasi </option>
            <option value='GladsonRaj '>Gladson Raj </option>
            <option value='GowthamRavichandran'>Gowtham Ravichandran</option>
            <option value='HariVishnu'>Hari Vishnu</option>
            <option value='Harini '>Harini </option>
            <option value='Indrazith '>Indrazith </option>
            <option value='Iswarya '>Iswarya </option>
            <option value='Jayeshwaran '>Jayeshwaran </option>
            <option value='Jeevanantham '>Jeevanantham </option>
            <option value="JiniShaji">Jini Shaji</option>
            <option value="Kanakavalli ">Kanakavalli</option>
            <option value="Karthick ">Karthick</option>
            <option value='Kiruthikaa '>Kiruthika</option>
            <option value='Lakshmikanthan '>Lakshmikanthan </option>
            <option value='Mahesha '>Mahesha </option>
            <option value='Manikandan '>Manikandan</option>
            <option value='Meenambika'>Meenambika </option>
            <option value='Mugundhan '>Mugundhan </option>
            <option value='NaveenKumar'>Naveen Kumar</option>
            <option value='Navin Prasanth'>Navin Prasanth</option>
            <option value='Nivetha'>Nivetha</option>
            <option value='Pavithra '>Pavithra </option>
            <option value='Prabakaran '>Prabakaran </option>
            <option value='PradeepMurugan '>Pradeep Murugan</option>
            <option value='Revathi '>Revathi </option>
            <option value='Rithika '>Rithika </option>
            <option value='Sakthi Kumar '>Sakthi Kumar</option>
            <option value='Sakthi SanjeevKavara'>Sanjeev Kavara</option>
            <option value='SaranyaG '>Saranya G</option>
            <option value='SaranyaP'>Saranya P</option>
            <option value='Selvakannan'>Selvakannan</option>
            <option value='ShaliqMohammed '>Shaliq Mohammed</option>
            <option value='Shenbagavalli'>Shenbagavalli</option>
            <option value='ShivaDharshini'>Shiva Dharshini</option>
            <option value='Siddarth'>Siddarth</option>
            <option value='Sreedharsan'>Sreedharsan</option>
            <option value='SuryaShree'>SuryaShree</option>
            <option value='Swathikka'>Swathikka</option>
            <option value='SyedMoosa'>Syed Moosa</option>
            <option value='Tharunya'>Tharunya</option>
            <option value='Thiruppathi'>Thiruppathi</option>
            <option value='Velayutham'>Velayutham</option>
            <option value='Vignesh'>Vignesh</option>
          </select>
          </label>
          <br /><br />
          <label>Our Rate $/hr </label>
          <br />
          <input type="number" value={hourRate} onChange={(e) => setHourRate(e.target.value)} />
          <br /><br />
          <label>Total hrs/mon </label>
          <br />
          <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
          <br /><br />
          <button id="add_btn" onClick={handleAddRow}>Update</button>
          <button className="close" onClick={editClose}>Close</button>
        </div>
      </div>
    </div>
  ) : null;
}
var dollar;
fetch(`https://open.er-api.com/v6/latest/USD`)
  .then(resp => resp.json())
  .then((data) => {
   dollar=data.rates.INR; 
    console.log(data.rates.INR)
  });

function RateCalculator() {
  const [tableData, setTableData] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editItem,setEditItem] = useState();
  const [sno, setSno] =  useState(1);

 const handleAddRow = (newRow) => {
  setTableData([...tableData, { ...newRow, sno: sno }]); // Add sno to the newRow
  setSno(sno + 1); // Increment sno counter for the next row
 };
 
 const handleEditRow = (editedRow) => {
  console.log('editedRow-------------', editedRow);
      const updatedData = tableData.map((item) => {
        if (item.sno === editItem.sno) {
          return { ...editedRow, sno: editItem.sno }; // Update the edited row with the same sno
        }
        return item;
      });
  console.log('updatedData----------', updatedData);
  
      setTableData(updatedData);
      setIsEditOpen(false);
    };

 const handleDeleteRow = (rowIndex) => {
  const updatedTableData = tableData.filter((_, index) => index !== rowIndex);
  setTableData(updatedTableData);
}
return (
    <>
   <div className='rate_heading'></div>
   <div className='rate_nav'></div> 
   <div id='heading'>
    <h1><span>R</span>ate Calculator</h1>
      <button id="btn" onClick={() => setPopupOpen(true)}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 5 23 8" height="2vh" width="2vh" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="#000" stroke-width="2" d="M12,22 L12,2 M2,12 L22,12"></path></svg> Add New
      </button>
      </div>
      <table className="table">
      <th>S.No</th>
      <th>Employee Names</th>
      <th>Our Rate $/hr </th>
      <th>Current $/hr rate </th>
      <th>/hr Rate </th>
      <th>Total hrs/mon </th>
      <th>Total Rate/mon </th>
      <th>Actions</th>
      <tbody>
         {
          tableData.map((e,index)=>{
            // let customrate = e.hourRate * dollar;
           
            let customrate = Math.round(e.hourRate * dollar).toFixed(2); 
          return<>
            <tr>
              <td>{index+1}</td>
              <td>{e.employeeName}</td>
              <td>{e.hourRate+' $/hr'}</td>
              <td>{'1$ : ₹'+Math.round(dollar).toFixed(2)}</td>
              <td>{'₹'+customrate}</td> 
              <td>{e.totalHours+' hrs'}</td>
              {/* <td>{'₹'+(customrate * e.totalHours)}</td> */}
              <td>{'₹'+Math.round(customrate * e.totalHours).toFixed(2)}</td>
              <td>
              <button id='edit_btn' onClick={() => {setEditItem(e); setIsEditOpen(true)}}>
                  <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button> 
            
              <button id='delete_btn' onClick={() => handleDeleteRow(index)}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.1em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
              <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/>
              </g></svg></button>
            </td>
            </tr> 
          </>
          })
         }
      </tbody>
      </table>
      <RowPopup isOpen={isPopupOpen} onClose={() => {setPopupOpen(false)}} onAddRow={handleAddRow} />
      <EditRow  edit={editItem} editOpen={isEditOpen} editClose={() => setIsEditOpen(false)}  onAddRow={handleEditRow} />
    </>
  );
}
export default RateCalculator;