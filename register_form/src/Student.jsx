import { useState } from "react";

function Student()
{
    const [email,SetEmail] = useState("")
    const [password,SetPassword]=useState("");
    const [re_password,SetRePassword]=useState("")
    const [firstname,SetFirstname]=useState("")
    const [lastname,SetLastname]=useState("");
    const [gender,SetGener]=useState("");
    const [country,SetCountry]=useState("");
    const [fbox,SetFbox]=useState("");
    const [sbox,SetSbox]=useState("");
    const [a,SetA]=useState()
    function get_data()
    {
        SetA(10)
    }
    return(
       <div className="my">
        <h2>Registration Form</h2>
            <form>
                <table>
                    <tr>
                            <td>Email </td>
                            <td><input type="text" name="email" onChange={(e)=>SetEmail(e.target.value)}></input></td>
                    </tr>
                    <tr>
                            <td>Password</td>
                            <td><input type="password" name="pass" onChange={(e)=>SetPassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                            <td>Re-Type Password</td>
                            <td><input type="password" name="re_pass" onChange={(e)=>SetRePassword(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>First Name </td>
                        <td><input type="text" name="firstname" size={10} onChange={(e)=>SetFirstname(e.target.value)}></input> Last Name </td>
                        <td><input type="text" name="lastname" size={10} onChange={(e)=>SetLastname(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="gender" onChange={(e)=>SetGener(e.target.value)}/>Male </td>
                        <td><input type="radio" name="gender" onChange={(e)=>SetGener(e.target.value)}></input>Female</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <select onChange={(e)=>SetCountry(e.target.value)}>
                                <option>USA</option>
                                <option>INDIA</option>
                                <option>UK</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" name="fc" onChange={(e)=>SetFbox(e.target.checked)}></input>I Agree With Term And Conditions</td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <input type="checkbox" name="sc" onChange={(e)=>SetSbox(e.target.checked)}></input>I Want To Reveive The Newsletter
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                            <button type="button" onClick={get_data} name="save">Register</button>
                    </tr>
                </table>
                
            </form>
            <table border={1}>
  {a && (
    <>
      <tr>
        <td>Email</td>
        <td>Password</td>
        <td>Re-Type Password</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Gender</td>
        <td>Country</td>
        <td>Condition</td>
        <td>Second Condition</td>
      </tr>

      <tr>
        <td>{email}</td>
        <td>{password}</td>
        <td>{re_password}</td>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{gender}</td>
        <td>{country}</td>
        <td>{fbox && "Yes" || "No"}</td>
        <td>{sbox && "Yes" || "No"}</td>
      </tr>
    </>
  )}
</table>

            
        </div>
    );
}
export default Student;