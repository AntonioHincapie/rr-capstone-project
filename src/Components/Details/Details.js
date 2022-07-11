import { NavLink } from "react-router-dom";

export default function Details() {
  return (
    <div>
      <NavLink to={`/`}>
        <button type="button">Adios</button>
      </NavLink>
      <h4>Hola</h4>
    </div>
  )
}
