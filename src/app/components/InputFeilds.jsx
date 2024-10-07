const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) => {
  const styles = {
    container: "flex flex-col gap-2 w-full md:w-1/4",
    label: "text-xs text-gray-500",
    input: "ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full",
    errorText: "text-xs text-red-400",
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        {...register(name)}
        className={styles.input}
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className={styles.errorText}>{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
