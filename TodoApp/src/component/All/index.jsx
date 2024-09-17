const All = (props) => {
  return (
    <>
      <div className="addTask">
        <input
          type="text"
          placeholder="add details"
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
        />
        <button className="addTaskBtn" onClick={props.handleAddTask}>
          Add
        </button>
      </div>
      <div className="listTask">
        {props.tasks.activeTasks.map((task) => (
          <div className="task">
            <div className="taskName">
              <input
                type="checkbox"
                onChange={() => {
                  props.handleCompleteTask(task);
                }}
              />

              <div className="">{task}</div>
            </div>
          </div>
        ))}
        {props.tasks.completeTasks.map((task) => (
          <div className="task">
            <div className="taskName">
              <input type="checkbox" checked readOnly />
              {!props.scratchOut ? (
                <del>{task}</del>
              ) : (
                <div className="">{task}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default All;
