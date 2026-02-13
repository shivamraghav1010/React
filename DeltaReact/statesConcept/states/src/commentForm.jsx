import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } else if (values.username.length > 15) {
     errors.username = 'username required';
   }
   if (!values.remarks) {
     errors.remarks = 'Required';
   } else if (values.remarks.length > 15) {
     errors.remarks = 'username required';
   }
   

   return errors;
 };

export default function commentForm({addNewComment})
{
        // let [formData,setFormData] = useState({
        //     username:"",
        //     remarks:"",
        //     rating:5
        // })

    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating:5
     },
     validate, 
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

        // let handleInputChange = (event) =>{
        //     setFormData((currData)=>{
        //         return {...currData , [event.target.name]:event.target.value}
        //     })
        // }

           let [visit, setVisit] = useState(true)

        // let handleSubmit = (event) => {
        //     if(!formData.username)
        //     {    
        //         setVisit(false)
        //         console.log("username not entered")
        //         event.preventDefault();
        //         return;
        //     }

        //     addNewComment(formData)
            
        //     console.log(formData)
        //     setFormData({
        //          username:"",
        //          remarks:"",
        //          rating:5
        //     })
        // }

       return(
            <div>
                    <h1>Comment form</h1>
                <form onSubmit={formik.handleSubmit}>
                <input placeholder="Enter Username " type="text" name="username"  onChange={formik.handleChange} value={formik.values.username}/>
                   {/* {!visit && <p>Username required</p>} */}
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br></br><br></br>
                <textarea placeholder="Add Few Remarks" name="remarks" onChange={formik.handleChange} value={formik.values.remarks} ></textarea>
                 {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                <br></br> <br></br>
                <input placeholder="rating" type="number" min={1} max={5} name="rating" onChange={formik.handleChange} value={formik.values.rating}/>
                 {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
                <br></br> <br></br>
                <button type="submit">Submit</button>
            </form>
            </div>
       )
}