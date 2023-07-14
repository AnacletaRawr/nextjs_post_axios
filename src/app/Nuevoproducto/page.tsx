"use client";
import useAxios from "axios-hooks";
type AddResponse = {
  success: boolean;
};
export default function NueavoProducto() {
  const [{ data, loading, error }, add] = useAxios<AddResponse>(
    {
      url: "https://dummyjson.com/products/add",
      method: "POST",
    },
    {
      manual: true,
    }
  );

  return (
    <div style={{ padding: 16 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <h1>Sign Up</h1>
        <input name="title" />
        {error && <p>{error.message}</p>}
        {data && <p>Successfully signed up</p>}
        <div>
          <button>{loading ? "Loading..." : "Sign up"}</button>
        </div>
      </form>
    </div>
  );
}
