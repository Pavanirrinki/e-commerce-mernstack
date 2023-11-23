import axios from "axios"
export const files =[]
export const imagessubmit=(e,image)=>{
    e.preventDefault();
    const formdata = new FormData();
    for (let i = 0; i < image.length; i++) {
    formdata.append("file",image[i]);
    formdata.append("upload_preset",'xenymzuf');
    axios.post("https://api.cloudinary.com/v1_1/dvbvggl5f/image/upload",formdata).
    then((res)=>files.push(res.data.url)).catch((error)=>console.log(error))
    }
     }