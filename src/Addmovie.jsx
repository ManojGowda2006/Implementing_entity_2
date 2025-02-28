import React  from "react";
import './Addmovie.css'
import {Link} from 'react-router-dom'
function Addmovie(){
    return(
        <div className="container">
            <form>
                <lable>Title</lable>
                <input type="text"></input>
                <lable>Director</lable>
                <input type="text"></input>
                <lable>Genre</lable>
                <select>
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
                <lable>Release year</lable>
                <input typt="number"></input>
                <lable>Synopsis</lable>
                <textarea></textarea>
                <lable>Poster Image URL</lable>
                <input type="url"></input>
                <button className="submit-btn">Submit</button>
                <Link to="/"><button className="cancel-btn">cancel</button></Link>
            </form>
        </div>
    )
}

export default Addmovie;