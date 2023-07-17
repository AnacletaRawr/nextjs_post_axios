"use client";

//axios.defaults.baseURL = "https://dummyjson.com";

export default function Add_fetch() {
    // Para este ejemplo, data corresponde al JSON que se enviará en la solicitud POST
    const handleAdd = () => {
        const data = {
            nombreEmprendedor: "Emprendedor 3",
            nombreEmprendimiento: "emprendimiento 3",
            historiaEmprendedor: "Esta es la historia del emprendedor 2",
            fotoEmprendedor: "ruta/de/la/foto/del/emprendedor2"
        };
        /**
         *     "nombreEmprendedor": "Emprendedor 3",
            "nombreEmprendimiento": "emprendimiento 3",
            "historiaEmprendedor": "Esta es la historia del emprendedor 2",
            "fotoEmprendedor": "ruta/de/la/foto/del/emprendedor2"
         */
        console.log(data);
        // Como primer argumento de fetch debe ir la ruta que corresponda a una solicitud POST en la API de springboot
        fetch("http://localhost:8080/emprendedores/nuevo", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            })
            .then((response) => console.log("Success:", response));
    };

    return (
        <div style={{ padding: 16 }}>
            <button onClick={() => handleAdd()}>Agregar</button>
        </div>
    );
}