import React from 'react';
import {useState} from 'react';

function Project() {
    
    return (
        <>
            <title>Project Page</title>
            <button type="button" class="smallerbutton">Back</button>
            <h2 class="center">Project Name</h2>
            <p class="center">Team Name</p>
            <div class="row">
            <div class="column left">
                <h4>Project Team Members</h4>
            <ul>
                <li>Teammate</li>
            </ul>
            </div>
            <div class="column middle">
                <h4>Project Tasks</h4>
                <ul>
                    <li>Task</li>
                </ul>
            </div>
            <div class="column right">
                <h4>Working on the project?</h4>
                <button type="button" class="button">Notify Team Members</button>
            </div>
            </div>
        </>
   );
}
export default LoginPage;