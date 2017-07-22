const Loading = () => (
  <p>Loading projects...</p>
)

export const ProjectListThumbnail = ({title, location, type, user}) => (
  <div>
    <h1>{title}</h1><br />
    <small>{location}</small><br />
    <img src="https://unsplash.it/200/?random" alt={title} />
    <p>{user.name}</p>
  </div>
)

const ProjectList = ({isLoading, projects}) => (
  <div>
    {
      isLoading ? <Loading /> : projects.map((project) => (
        <ProjectListThumbnail key={project.id} {...project} />
      ))
    }
  </div>
)

export default ProjectList
