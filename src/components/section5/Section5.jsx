import React from "react";
import "./section5.css";
// Importar imágenes
import a from "../../img/deptos/deptos (4).svg";
import b from "../../img/deptos/deptos (3).svg";
import c from "../../img/img-fondo-gris.png";

// Datos de los dúplex
const duplexData = [
    {
        title: "Lavanda",
        description:
            "Promueve la calma y la relajación. Capacidad 2 personas.",
        imageSrc: a,
    },
    {
        title: "Magnolia",
        description:
            "Representa la dignidad y la pureza. Capacidad 2 personas.",
        imageSrc: b,
    },
    {
        title: "Lirio",
        description:
            "Simboliza la pureza y la elegancia. Capacidad 2 personas.",
        imageSrc: c,
    },
    {
        title: "Flor de Loto",
        description:
            "  Representa la pureza, la iluminación y la resurrección. Capacidad 2 personas.",
        imageSrc: a,
    }
];

function Section5() {
    // Función para enviar el mensaje de WhatsApp
    const reservarYa = (duplexTitle) => {
        // Mensaje dinámico con el título del dúplex
        const mensaje = `Hola! Quisiera consultar disponibilidad en Hanakotoba para la unidad ${duplexTitle}.`;
    
        // Número de contacto (código internacional incluido)
        const numero = "+5493456445945";
    
        // Construcción de la URL de WhatsApp
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    
        // Abrir el enlace en una nueva pestaña
        window.open(url, "_blank");
    };
    

    return (
        <div className="container-cards">
            {/* Título */}
            <div className="titulo">
                <h3 className="titulo-h3-s4" >Nuestros departamentos:</h3>
            </div>

            {/* Contenedor de los dúplex */}
            <div className="duplex">
                {duplexData.map((duplex, index) => (
                    <div className={`duplex${index + 1} duplexs`} key={index}>

                        <div className="contenedor-img">
                            <img
                                src={duplex.imageSrc}
                                className="tamanio-img"
                                alt={duplex.title}
                            />
                        </div>

                        {/* Texto */}
                        <div className="contenedor-texto">
                            <h4>{duplex.title}</h4>
                            <p>{duplex.description}</p>

                            {/* Botón */}
                            <div className="contenedor-btn">
                                <button
                                    className="btn-unidades"
                                    onClick={() => reservarYa(duplex.title)} // Pasar el título como parámetro
                                >
                                Consular disponibilidad
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section5;
