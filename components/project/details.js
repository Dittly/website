export const Details = ({id, title, location, type, user}) => (
  <div>
    <h1>{title}</h1><br />
    <small>{location}</small><br />
    <img src="https://unsplash.it/200/?random" alt={title} />
    <p>{user.name}</p>
  </div>
)

export default Details

