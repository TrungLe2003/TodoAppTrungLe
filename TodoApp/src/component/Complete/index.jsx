import Bin from "../../../public/bin";
const Complete = (props) => {
  return (
    <>
      <div className="listTask">
        {props.tasks.completeTasks.map((task) => (
          <div className="task completedTask">
            <div className="taskName">
              <input type="checkbox" checked readOnly />
              <del className="">{task}</del>
            </div>
            <button onClick={() => props.handleDeleteTask(task)}>
              <Bin />
            </button>
          </div>
        ))}
      </div>
      <button className="deleteAll" onClick={props.deleteAllCompleteTasks}>
        <Bin></Bin>
        <div>Delete all</div>
      </button>
    </>
  );
};

export default Complete;
