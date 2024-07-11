import React from 'react';

const login = () => {
    return (
        <div>
            <center>
                <from>
                    <label>Enter Username</label>
                    <input type = 'text'
                    name = 'Username'
                    value = {Username}/>
                    <label>Password:</label>
                    <input type></input>
                    onChange={(e) => setusername(e.target.)}                
                </from>    
            </center>
                
        </div>
    );
};

export default login;