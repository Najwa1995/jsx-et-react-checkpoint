import { Component } from 'react';
import './projects.css';
function Projects() {
    return (
        <>
            <section className='Education' id="projects">
                <h2 className='titre1'>Education</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>2021</h2>
                            <h5>Master de recherche en sciences informtique</h5>
                        </div>
                        <div className='col-md-3'>
                            <h2>2017</h2>
                            <h5>Licence fondamentale en sciences informtique</h5>
                        </div>
                        <div className='col-md-3'>
                            <h2>2014</h2>
                            <h5>Baccalaureat specialite informatique</h5>
                        </div>


                    </div>
                </div>

            </section>

            <section className='blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h2>Our Projects</h2>

                        </div>
                    </div>
                </div>



            </section>
        </>

    );
}

export default Projects;