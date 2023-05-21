interface Props {
  message: string;
  confirmedDelete: () => void;
  CloseConfirmationComponent: () => void;
}
const DeleteConfirmation: React.FC<Props> = ({
  message,
  confirmedDelete,
  CloseConfirmationComponent,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
      <div className="felx flex-col justify-center items-center rounded-3xl border-2 border-green bg-white px-32 py-20 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <h3 className="text-black text-center font-bold text-2xl">
          Are you sure you want to delete
        </h3>
        <span className="text-green flex items-center justify-center font-bold text-2xl">{message}</span>
        <div className="flex items-center justify-center text-white py-2">
          <button
            className="text-red-800 font-bold text-xl px-6 py-2 mr-2 border border-red-800 cursor-pointer rounded-xl hover:bg-red-800 hover:text-white"
            onClick={confirmedDelete}
          >
            Yes
          </button>
          <button
            className="text-green font-bold text-xl px-6 py-2 ml-2 border border-green cursor-pointer rounded-xl hover:bg-green hover:text-white"
            onClick={CloseConfirmationComponent}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
