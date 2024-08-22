const toggleMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};
export const Shadow = () => {
  return (
    <div onClick={toggleMode}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 2V4"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 20V22"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.92993 4.92969L6.33993 6.33969"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.6599 17.6602L19.0699 19.0702"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 12H4"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 12H22"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.33993 17.6602L4.92993 19.0702"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.0699 4.92969L17.6599 6.33969"
          stroke="#4B5563"
          strokeWinecap="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
