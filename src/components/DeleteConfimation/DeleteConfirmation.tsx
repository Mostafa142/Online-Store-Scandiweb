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
      <div className="felx flex-col justify-center items-center bg-white px-32 py-20 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <h3 className="text-black text-center font-bold text-2xl">{message}</h3>
        <div className="flex items-center justify-center text-white">
          <button
            className="bg-red-800 text-white px-6 py-2 mr-2 border-none cursor-pointer"
            onClick={confirmedDelete}
          >
            Yes
          </button>
          <button
            className="bg-green text-white px-6 py-2 ml-2 border-none cursor-pointer"
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
