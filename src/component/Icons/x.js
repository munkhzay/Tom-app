export const Delete = () => {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer">
        <svg
          className="drawer-overlay"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#4B5563"
            className="dark:stroke-slate-50"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#4B5563"
            className="dark:stroke-slate-50"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      {/* <div className="drawer-side">
        {" "}
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
