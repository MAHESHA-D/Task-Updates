
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
  const [isEmpOpen, setIsEmpOpen]=useState(false);
  const empName=[
    {value:'',label:'Select Employee'},
    {value:'Aakash',label:"Aakash"},
    {value:'Akshay',label:"Akshay"},
    {value:'ArunKarthick',label:'ArunKarthick'},
    {value:'Balamurugan',label: 'Balamurugan'},
    {value:'Bharath', label :'Bharath'},
    {value:'Bhuvaneswari',label:'Bhuvaneswari'},
    {value: 'Dharmaprabu', label : 'Dharmaprabu'},
    {value: 'Dinesh', label : 'Dinesh'},
    {value: 'Ezhilarasi', label : 'Ezhilarasi'},
    {value: 'GladsonRaj', label : 'Gladson  Raj'},
    {value: 'GowthamRavichandran', label : 'Gowtham Ravichandran'},
    {value: 'HariVishnu', label : 'Hari Vishnu'},
    {value: 'Harini', label : 'Harini'},
    {value: 'Indrazith', label : 'Indrazith'},
    {value: 'Iswarya', label : 'Iswarya'},
    {value: 'Jayeshwaran', label : 'Jayeshwaran'},
    {value: 'Jeevanantham', label : 'Jeevanantham'},
    {value: 'JiniShaji', label : 'JiniShaji'},
    {value: 'Kanakavalli', label : 'Kanakavalli'},
    {value: 'Karthick', label : 'Karthick'},
    {value: 'Kiruthikaa', label : 'Kiruthikaa'},
    {value: 'Lakshmikanthan', label : 'Lakshmikanthan'},
    {value: 'Mahesha', label : 'Mahesha'},
    {value: 'Manikandan', label : 'Manikandan'},
    {value: 'Meenambika', label : 'Meenambika'},
    {value: 'Mugundhan', label : 'Mugundhan'},
    {value: 'NaveenKumar', label : 'Naveen Kumar'},
    {value: 'NavinPrasanth', label : 'Navin Prasanth'},
    {value: 'Nivetha', label : 'Nivetha'},
    {value: 'Pavithra', label : 'Pavithra'},
    {value: 'Prabakaran', label : 'Prabakaran'},
    {value: 'PradeepMurugan', label : 'Pradeep Murugan'},
    {value: 'Revathi', label : 'Revathi'},
    {value: 'Rithika', label : 'Rithika'},
    {value: 'SakthiKumar', label : 'Sakthi Kumar'},
    {value: 'SanjeevKavara', label : 'Sanjeev Kavara'},
    {value: 'Saranya', label : 'Saranya G'},
    {value: 'SaranyaP', label : 'Saranya P'},
    {value: 'Selvakannan', label : 'Selvakannan'},
    {value: 'ShaliqMohammed', label : 'ShaliqMohammed'},
    {value: 'Shenbagavalli', label : 'Shenbagavalli'},
    {value: 'ShivaDharshini', label : 'Shiva Dharshini'},
    {value: 'Siddarth', label : 'Siddarth'},
    {value: 'Sreedharsan', label : 'Sreedharsan'},
    {value: 'SuryaShree', label : 'SuryaShree'},
    {value: 'Swathikka', label : 'Swathikka'},
    {value: 'SyedMoosa', label : 'SyedMoosa'},
    {value: 'Tharunya', label : 'Tharunya'},
    {value: 'Thiruppathi', label : 'Thiruppathi'},
    {value: 'Velayutham', label : 'Velayutham'},
    {value: 'Vignesh', label : 'Vignesh'},
  ];

  const [empArray, setEmpArray] = useState(empName)
  // const [empOpen, setIsEmpOpen] = useState();
  let newRow = {};
  const handleAddRow = () => {
     newRow = {
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

  const handleSelect = (e) => {
    setEmployeeName(e.target.value);
  }
  const handleArray = (array) =>{
    localStorage.setItem('employee', JSON.stringify([...empArray, {value: array.empId, label: array.addEmp}]));
    // setEmpArray([...empArray, {value:array.empId, label:array.addEmp}]);
    // externalArray =  array;
    loadArray();
  }   

  const loadArray = () => {
    const employeeLocalData = localStorage.getItem('employee');

    if(employeeLocalData && employeeLocalData.length > 0){
    setEmpArray(JSON.parse(employeeLocalData));
    }
  }
    useEffect(()=>{
      loadArray();
    },[])
  // loadArray();

  // useEffect(() => {
  //   if(externalArray !== undefined && externalArray.length >  0){
  //     localStorage.setItem('employee', JSON.stringiefy([...empArray, {value: externalArray.empId, label: externalArray.addEmp}]));
  //     const employeeLocalData = localStorage.getItem('employee');
  
  //     console.log('emplloyee--------------',employeeLocalData);
  //     if(employeeLocalData && employeeLocalData.length > 0){
  //     setEmpArray(JSON.parse(employeeLocalData));
  //     }
  //   }
    
  // }, [empArray, externalArray]);
  const empList = empArray.map(item =>
    <>
    <option 
    key={item.value}>
      {item.label}
    </option>
    </>
    )

  return isOpen ? (
    <>
    <div className='rate_container'>
    <div className="popup">
      <div className="popup-content">
      <button className="close" onClick={onClose}> &times;</button>
        <h2>Add Employee Details</h2>
        <label>
          Employee Name:
          <br />
          <select className="dropdown" value={employeeName} onChange={(e) => handleSelect(e) }>
            {empList}
          </select>
        <button id='new'  onClick={()=>setIsEmpOpen(true)} >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z"></path>
          <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path>
        </svg>
        </button>
        </label>
        <br /><br></br>
        <label>Bill Rate $/hr </label>
        <br />  
        <input type="number" value={hourRate} onChange={(e) => setHourRate(e.target.value)} />
        <br /><br />
        <label>Current $ rate/hr </label>
        <br />
        <input type="number" value={Math.round(dollar).toFixed(2)} />
        <br /><br />
        <label>Total hrs/mon </label>
        <br />
        <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
        <br /><br></br>
        <button id="add_btn" onClick={handleAddRow}>Submit</button>
        
      </div>
    </div>
    </div>
        <AddEmployeeName isEmpOpen={isEmpOpen}addArray={handleArray} closeWindow={() =>setIsEmpOpen(false) } />
</>
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
          
        <button className="close" onClick={editClose}>&times;</button>
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
          <br /><br />
          <label>Bill Rate $/hr </label>
          <br />
          <input type="number" value={hourRate} onChange={(e) => setHourRate(e.target.value)} />
          <br /><br />
          <label>Total hrs/mon </label>
          <br />
          <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
          <br /><br />
          <button id="add_btn" onClick={handleAddRow}>Update</button>
        </div>
      </div>
    </div>
  ) : null;
}

var dollar;
fetch(`https://open.er-api.com/v6/latest/USD`)
//fetch('https://v6.exchangerate-api.com/v6/ad504b93ff2debb5687e80bf/latest/USD')
  .then(resp => resp.json())
  .then((data) => {
   dollar=data.rates.INR;
    console.log(data.rates.INR +"............................................>>>>>>>>>>>>>>>")
  });

function AddEmployeeName({isEmpOpen, addArray, closeWindow}){
  const  [addEmp, setAddEmp]=useState('');
  const [ empId, setEmpId]=useState('');
  
  const handleCreate=()=>{
    const empData={
      addEmp,
      empId
    };
    addArray(empData);
    closeWindow();
  }

  return isEmpOpen ?(
    <>
    <div id='popup'>
      <div id='popup-content'>
      <button className='close' onClick={closeWindow}>&times;</button><br/>
      <br/><br/><br/><h2>Create New Employee</h2><br/>
        <label>Employee Name : </label><br/>
        <input type='text' value={addEmp} onChange={(e)=>setAddEmp(e.target.value)}/><br/><br/>
        <label>Employee ID : </label>
        <input type='text' value={empId} onChange={(e)=> setEmpId(e.target.value)}/> <br/><br/>
        <button id='create_btn' onClick={handleCreate}>Create</button><br/><br/>
      </div>
    </div>
    </>): null
}

function RateCalculator() {
  const [tableData, setTableData] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editItem,setEditItem] = useState();
  const [sno, setSno] =  useState(1);
  // const [dollar, setDollar]=useState();
 const handleAddRow = (newRow) => {
  setTableData([...tableData, { ...newRow, sno: sno }]); // Add sno to the newRow
  setSno(sno + 1); // Increment sno counter for the next row
 };
 
 const handleEditRow = (editedRow) => {
      const updatedData = tableData.map((item) => {
        if (item.sno === editItem.sno) {
          return { ...editedRow, sno: editItem.sno }; // Update the edited row with the same sno
        }
        return item;
      });
      setTableData(updatedData);
      setIsEditOpen(false);
    };

    useEffect(() => {
     tableLocalData()
   });
 const handleDeleteRow = (rowIndex) => {
  const updatedTableData = tableData.filter((_, index) => index !== rowIndex);
  setTableData(updatedTableData);
 }
    // // Save table data to local storage whenever table data changes

   const tableLocalData = async() => {
    if(tableData.length > 0 ) {
    localStorage.setItem('tableData', JSON.stringify(tableData));
    }
  }

  const tableSetData = () =>{
    const storedTableData = localStorage.getItem("tableData");
     console.log('storedTableData',storedTableData)
     if (storedTableData) {
       setTableData(JSON.parse(storedTableData));
     }
  }
   useEffect(() => {
    tableSetData()
   }, []);
   const storedTableData = localStorage.getItem("tableData");
   console.log('storedTableData',storedTableData)
   console.log('~~~~~~tableData~~~~~~~~~~~', tableData);

  //  useEffect(() => {
  //   fetch(`https://open.er-api.com/v6/latest/USD`)
  //     .then(resp => resp.json())
  //     .then((data) => {
  //       setDollar(data.rates.INR);
  //       console.log(data.rates.INR + "............................................>>>>>>>>>>>>>>>");
  //     });
  // }, []);

return (
    <>
    <div className='design_top'><h1>RATE CALCULATOR</h1></div>
   <div className='design_nav'></div>
      <button id="btn" onClick={() => setPopupOpen(true)}>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 5 23 8" height="2vh" width="2vh" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="white" stroke-width="3" d="M12,22 L12,2 M2,12 L22,12"></path></svg> Add New
      </button>
      <table className="table_container">
      <th>S.No</th>
      <th>Employee Names</th>
      <th>Bill Rate $/hr </th>
      <th>Current $ rate/hr </th>
      <th>/hr Rate </th>
      <th>Total hrs/mon </th>
      <th>Total Pay/mon </th>
      <th>Actions</th>
      <tbody>
         {
          tableData.map((e,index)=>{
            // let customrate = e.hourRate * dollar;
            let customrate = (e.hourRate * dollar).toFixed(2); 
          return<>
            <tr>
              <td>{index+1}</td>
              <td>{e.employeeName}</td>
              <td>{e.hourRate+' $/hr'}</td>
              <td>{'1$ : ₹'+dollar?.toFixed(2)}</td>
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