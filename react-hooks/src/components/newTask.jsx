import { NavbarSide } from "./navsidebar";

export const Newtask = () => {
  return (
    <div id="fllexd">
      <NavbarSide />
      <div>
        <input type={"text"} placeholder="Title" name="title" />
        <input type={"text"} placeholder="subTask" name="Subtask" />
        <button>ADD</button>
        <br />
        <br />
        <textarea
          name="description"
          id=""
          cols="20"
          rows="8"
          placeholder="Description"
        ></textarea>
        <br />
        <input type={"radio"} name="status" value="todo" /> <span>Todo</span>
        <br />
        <input type={"radio"} name="status" value="done" />{" "}
        <span>In Progress</span>
        <br />
        <input type={"radio"} name="status" value="Done" /> <span>Done</span>
        <br />
        <br />
        <br />
        <h3>Tags</h3>
        <input type={"Checkbox"} value="official" name="official" />
        <span>Official</span>
        <br />
        <input type={"Checkbox"} value="Personal" name="Personal" />
        <span>Personal</span>
        <br />
        <input type={"Checkbox"} value="Others" name="Others" />
        <span>Others</span>
        <br />
      </div>

      <div>
        <br />

        <input type="date" name="date" />
        <br />
        <button>Create new task</button>
      </div>
    </div>
  );
};
