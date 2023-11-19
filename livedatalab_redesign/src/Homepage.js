import React from 'react'
import logo from './cornerlogo.png';
import './Projects.css';

function Projects() {
    return (
        <div class="Homepage">
            <header class="Header">
                <div class="logo"> 
                    <img src={logo} className="LiveDataLabLogo" alt="logo" />
                </div>
                <ul class="nav-list"> 
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#projects">Projects</a></li> 
                    <li><a href="#courses">Courses</a></li> 
                    <li><a href='#manage'>Manage</a></li>
                    <li><a href='#create'>Create</a></li> 
                </ul>
                <div class="Accounts"> 
                  <ul class="nav-list"> 
                        <li>Linked Accounts</li> 
                        <li>Delete Accounts</li> 
                        <li>Log out</li>
                    </ul>
              </div> 
            </header>
            <section class="Started Projects"> 
                 <div class="box-main">
                         <h1 class="text-big"> 
                             Started Projects 
                         </h1>
                 </div> 
             </section>
            <section class="Submission History"> 
                <div class="box-main"> 
                    <div class="firstHalf"> 
                        <h1 class="text-big"> 
                            Submission History
                        </h1>
                        <select>
                            <option value="No Filter">No Filter</option>
                            <option value="Git URL">Git URL</option>
                            <option value="Created Date">Created Date</option>
                            <option value="Success">Success</option>
                            <option value="Failure">Failure</option>
                        </select>
                        <input type="text" name="search" id="search" /> 
                        <button class="btn btn-sm">Filter Value</button> 
                    </div> 
                </div> 
            </section>
        </div>
    );
  }

export default Homepage;