import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {

    //init context
    const githubContext = useContext(GithubContext);

    //destructuring
    const {loading, users} = githubContext;

    // show spinner if still loading
    if(loading) {
        return <Spinner />;
    } else {
       // return an individual UserItem for every user fetched using map()
        return (
            <div style={userStyle} >
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    };
};

// styling for all Users shown
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;
 