const Create = ({createProject}) => (
  <div>
    <h1>Create a Project</h1>
    <form onSubmit={createProject}>
      <label htmlFor="create-project-name"><br />Project Title*<br />
        <input id="create-project-name" name="create-project-name" placeholder="e.g. Kitchen Makeover" type="text" />
      </label>
      <label htmlFor="create-project-location"><br /><br />Where are you building this project?<br />
        <input id="create-project-location" name="create-project-location" placeholder="Start typing a location" type="text" />
      </label>
      <label htmlFor="create-project-label"><br /><br />What kind of project is it?<br />
        <select id="create-project-label" name="create-project-label">
          <option>Labels go here</option>
        </select>
        <select id="create-project-type" name="create-project-type">
          <option>Types go here</option>
        </select>
      </label>
      <br /><br />
      <button>Create</button>
    </form>
  </div>
)

export default Create
