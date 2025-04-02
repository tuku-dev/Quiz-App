export default function Cross() {
  function handleClick() {}
  return (
    <div onClick={handleClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 36.6667C10.7953 36.6667 3.33335 29.2048 3.33335 20C3.33335 10.7953 10.7953 3.33334 20 3.33334C29.2048 3.33334 36.6667 10.7953 36.6667 20C36.6667 29.2048 29.2048 36.6667 20 36.6667Z"
          fill="#E6E6E6"
        />
        <path
          d="M13.8167 23.8167C13.1667 24.4667 13.1667 25.5167 13.8167 26.1667C14.15 26.5 14.5667 26.65 15 26.65C15.4333 26.65 15.85 26.4833 16.1833 26.1667L20 22.35L23.8167 26.1667C24.15 26.5 24.5667 26.65 25 26.65C25.4333 26.65 25.85 26.4833 26.1833 26.1667C26.8333 25.5167 26.8333 24.4667 26.1833 23.8167L22.3667 20L26.1833 16.1833C26.8333 15.5333 26.8333 14.4833 26.1833 13.8333C25.5333 13.1833 24.4833 13.1833 23.8333 13.8333L20.0167 17.65L16.2 13.8333C15.55 13.1833 14.5 13.1833 13.85 13.8333C13.2 14.4833 13.2 15.5333 13.85 16.1833L17.6667 20L13.85 23.8167H13.8167Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
