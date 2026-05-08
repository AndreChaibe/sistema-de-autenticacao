interface SubmitButtonProps {
  loading: boolean;
  label: string;
  loadingLabel: string;
}

export const SubmitButton = ({ loading, label, loadingLabel }: SubmitButtonProps) => {
  return (
    <button
      className="bg-[#544f4b] cursor-pointer text-white py-3 w-full rounded-[20px] tracking-[2px] text-[26px] hover:bg-[#2c2927] duration-300 mt-8"
      type="submit"
    >
      {loading ? loadingLabel : label}
    </button>
  );
};