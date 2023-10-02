import './App.css'
import {uploadFile} from './services/api'
import { useRef ,useState,useEffect} from 'react';//virtual dom Access 
function App() {
  const [file,setFile]= useState('');
  const logo="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
  const fileInputRef=useRef();
  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file)
        const res = await uploadFile(data)//API ka Function h
        
      }
    }
    getImage();//call the function when component is mounted
  },[file])
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className="container">
      <img src={logo} alt="Banner" />
      <div className="wrapper">
           <h1>Ishare</h1>
           <p>The Only Free,Robust File Sharing App</p> 
           <input type='file'
           ref={fileInputRef}
           style={{display:'none'}}
           onChange={(e)=>setFile(e.target.files[0])}
           />
           <button type="submit" onClick={()=>{
            onUploadClick();
            

           }}>Upload Image</button><br/>
      </div>
    </div>
  );
}

export default App;
