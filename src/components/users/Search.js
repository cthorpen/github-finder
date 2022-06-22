import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    //handle submission after search button click
    const onChange = (e) => {
        setText(e.target.value);
    };
    
    //if we dont use an arrow function, we must explicitly bind 'this' with the function (would be done below)
    // changed to arrow function
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            //nothing was inputted in searchbar
            alertContext.setAlert('Please enter something', 'light');
        } else {
            // sending a prop up to App.js
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={text} 
                    onChange={onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block" 
                />
            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-loght btn-block" onClick={githubContext.clearUsers}>Clear</button>
            )}
        </div>
    );
};

export default Search;
