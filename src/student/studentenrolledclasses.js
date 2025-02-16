import "../style/enrolledclasses.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';



function EnrolledClasses(props) {
    const [courses,setCourses]=useState([]);
    const navigate=useNavigate();
    const [cookies,setCookies]=useCookies();

   useEffect(()=>{
    axios
    .get("/get-student-courses",{
      headers:{
        'student-auth-token':cookies.StudentAuth,

      }
    })
    .then((res)=>{
      console.log(res.data);
      setCourses(res.data.courses)
    })
    .catch(err => console.error(err));
   },[])

    let role = props.role;



    return <>

        <div id="class-container"  >
            
            <div className="d-flex hd" >
                <h1 className="col-6 "> Enrolled classes</h1>

                <div className="form-group has-search searchdiv">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control in-field" placeholder="Search" />
                </div>
                
            </div>


            <div id="class-container-content" className="row">


                {
                     courses.map((course,index) => {

                        return   <div className="card"  onClick={() => {
                            //to do here we will rediect to the page where the deatils of the enrolled classes will show
                         navigate('/dashboard/classdetails',{state:{courseid:course.courseid ,coursename:course.coursename}})
                
                        }}  >
                            
                            <img className="card-img" src={require("../assets/images/images.png")} alt="Card cap" />
                            <div className="card-body">
                                <p className="card-">{course.coursename}</p>
                            </div>
                        </div>

                    }) 

                }


            </div>
        </div>
    </>
}
export default EnrolledClasses;