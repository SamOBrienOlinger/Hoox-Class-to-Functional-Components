// import React from 'react'
import css from "./css/Content.module.css";
// import {fetchedPosts} from "../posts.json";
// import {savedPosts} from "../posts.json";
// import PostItem from "./PostItem";
// import Loader from "./Loader"
import React, {useState} from 'react'



const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    const [fetchedPosts, setFetchedPosts] = useState([0]);
    const  [isLoaded, setisLoaded] = useState([0])
    }



function ContentHooks() {   
    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                    //     id="id-name"
                    //     name="name"
                    //     type="text"
                    // />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        // id="id-category"
                        // name="category"
                        // value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                        }
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        // id="id-comments"
                        // name="comments"
                        // value={comments}
                        onChange={
                            (e) => setComments(e.target.value)
                        }
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(fetchedPosts, isLoaded);
// }

// function ContentHooks() {
//     const [fetchedPosts, setFetchedPosts] = useState([0]);
//     const  [isLoaded, setisLoaded] = useState([0]);
    
//     return (
//         <div className={css.Content}>
            
//             <div className={css.TitleBar}>
//                 <h1>My Photos</h1>
//                 <form>
//                     <label htmlFor='searchinput'>Search</label>
//                     <input 
//                     type='search' 
//                     id='searchinput' 
//                     placeholder='By Author'
//                     onChange={(e) => handleChange(e)}
//                     />
//                     <h4>posts found {fetchedPosts.length}</h4>
//                 </form>
//             </div>

//             <div className={css.SearchResults}>
//                 {
//                     isLoaded ?
//                     <PostItem savedPosts={fetchedPosts} />
//                     : <Loader />
//                 }
//             </div>
//         </div>
//     )
// }

export default ContentHooks