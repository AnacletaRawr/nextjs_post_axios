"use client";
import useAxios from "axios-hooks";

type AddResponse = {
  success: boolean;
};
export default function NueavoProducto() {
  const [{ data, loading, error }, add] = useAxios<AddResponse>(
    {
      baseURL: "http://localhost:8080",
      url: "/emprendedores/nuevo",
      method: "POST",
    },
    {
      manual: true,
    }
  );
  console.log(data);
  /**
   *     "nombreEmprendedor": "Emprendedor 3",
      "nombreEmprendimiento": "emprendimiento 3",
      "historiaEmprendedor": "Esta es la historia del emprendedor 2",
      "fotoEmprendedor": "ruta/de/la/foto/del/emprendedor2"
   */
  return (
    <div style={{ padding: 16 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <h1>Sign Up</h1>
        <input name="nombreEmprendedor" />
        <input name="nombreEmprendimiento" />
        <input name="historiaEmprendedor" />
        <input name="fotoEmprendedor" />
        {error && <p>{error.message}</p>}
        {data && <p>Producto creado</p>}

        <div>
          <button>{loading ? "Loading..." : "Sign up"}</button>
        </div>
      </form>
    </div>
  );
}
