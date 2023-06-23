import React from 'react';
import './about.css'
import Profile from '../../assets/images/profile.JPG'

function About() {
    return (
        <div>
            <section id={"about"} className={"Content"}>
                <h1 style={{marginTop: "5rem"}}>ABOUT ME</h1>
                <div className={"AboutGrid"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid consectetur cupiditate
                        debitis distinctio dolorem ea error explicabo id incidunt itaque laborum libero natus numquam
                        odio officia perspiciatis, quis quo ratione repudiandae sequi tempora temporibus veniam voluptas
                        voluptates! Ad beatae delectus deleniti eaque est facere id iusto libero maxime odit, officiis
                        optio placeat quia velit voluptatibus? Alias distinctio esse explicabo facere fugiat
                        perferendis, similique velit? Aperiam aspernatur aut autem corporis enim fuga fugit, ipsa iusto,
                        maxime neque nesciunt odio quidem ratione, velit voluptate? Alias maxime nam nobis quo. At autem
                        commodi consectetur dolore dolorum mollitia nostrum quaerat quidem, reiciendis reprehenderit
                        rerum sed sit sunt? Ab assumenda dolorem doloremque expedita laboriosam nobis veritatis? Culpa
                        deleniti eius error esse explicabo fugit, incidunt labore laudantium libero magni nesciunt nisi
                        nobis, officia pariatur provident quis veniam voluptatem voluptatum!
                        velit!
                    </p>

                    <img src={Profile} alt="profile"/>
                </div>
            </section>
        </div>
    );
}

export default About;