import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// UserItem functional component. uses login, avatar_url, html_url as props
// 'user' defined with the aforementioned props
const UserItem = ({ user: {login, avatar_url, html_url} }) => {

    // return UserItem item div w/ avatar, gh url, and username 
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{ width: '60px' }} />

            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>

        </div>
    );
};

// define UserItem prop-types
UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
