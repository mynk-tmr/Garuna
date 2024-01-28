const IconedInputField = ({ baseStyles = "", icon, ...props }) => {
  return (
    <div
      className={`
        [&>svg]:inline [&>svg]:w-6 [&>svg]:opacity-50
        [&>input]:p-2 [&>input]:outline-none
        ${baseStyles}
      `}>
      {icon}
      <input {...props} />
    </div>
  );
};

export default IconedInputField;
