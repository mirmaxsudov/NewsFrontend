const NavSearchInput = () => {
  return (
    <>
      <div className=" flex bg-[#F5F5F5] justify-between items-center border border-gray-200 rounded-lg px-3 py-2">
        <div className="size-[30px] flex justify-center items-center">
          <svg
            width="6"
            height="18"
            viewBox="0 0 6 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 13.0625C4.17188 13.0625 5.1875 14.0781 5.1875 15.25C5.1875 16.4609 4.17188 17.4375 3 17.4375C1.78906 17.4375 0.8125 16.4609 0.8125 15.25C0.8125 14.0781 1.78906 13.0625 3 13.0625ZM3 6.8125C4.17188 6.8125 5.1875 7.82812 5.1875 9C5.1875 10.2109 4.17188 11.1875 3 11.1875C1.78906 11.1875 0.8125 10.2109 0.8125 9C0.8125 7.82812 1.78906 6.8125 3 6.8125ZM3 4.9375C1.78906 4.9375 0.8125 3.96094 0.8125 2.75C0.8125 1.57812 1.78906 0.5625 3 0.5625C4.17188 0.5625 5.1875 1.57812 5.1875 2.75C5.1875 3.96094 4.17188 4.9375 3 4.9375Z"
              fill="#3E3232"
              fill-opacity="0.75"
            />
          </svg>
        </div>
        <input
          className="ml-2 outline-none bg-inherit w-[200px]"
          type="text"
          placeholder="Search anything"
        />

        <div className="size-[30px] flex justify-center items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5312 18.3438L15.8438 13.6562C16.8984 12.0938 17.4453 10.1406 17.1719 8.03125C16.6641 4.4375 13.7344 1.54688 10.1797 1.07812C4.86719 0.414062 0.375 4.90625 1.03906 10.2188C1.50781 13.7734 4.39844 16.7031 7.99219 17.2109C10.1016 17.4844 12.0547 16.9375 13.6562 15.8828L18.3047 20.5703C18.9297 21.1562 19.9062 21.1562 20.5312 20.5703C21.1172 19.9453 21.1172 18.9688 20.5312 18.3438ZM4.08594 9.125C4.08594 6.39062 6.3125 4.125 9.08594 4.125C11.8203 4.125 14.0859 6.39062 14.0859 9.125C14.0859 11.8984 11.8203 14.125 9.08594 14.125C6.3125 14.125 4.08594 11.8984 4.08594 9.125Z"
              fill="#3E3232"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default NavSearchInput;
