import React from 'react';
import './home.css'
import CV from '../../assets/pdf/MuhammedSaidBayriCV.pdf'

function Home() {

    const openPDF = () => {
        window.open(CV, '_blank');
    }

    return (
        <div>
            <section id={"home"} className={"Content"}>
                <h1>HEY I'M MUHAMMED SAİD</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus ex inventore libero
                    molestias neque quae! Adipisci cumque deleniti dolore eveniet expedita laudantium numquam omnis!
                    Doloribus eveniet iure provident quisquam!</p>
                <button onClick={openPDF} className={"Button"}>Resume</button>
            </section>
        </div>
    );
}

export default Home;