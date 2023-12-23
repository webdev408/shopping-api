/* eslint-disable react/prop-types */
const Home = ({ people, addPeople, handleEdit, handleDelete }) => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Store Management Team</h1>
      <div className="row">
        {Array.isArray(people) &&
          people.map((person) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={person.id}>
                <div className="card">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <h6 className="card-text">{person.job}</h6>
                    <p className="card-text">{person.age} years old</p>
                  </div>
                </div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(person.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mb-2"
                  onClick={() => handleDelete(person.id)}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
      <button className="btn btn-primary" onClick={addPeople}>
        Add
      </button>
    </div>
  );
};
export default Home;
