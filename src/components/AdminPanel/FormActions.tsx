import FormFields from "./FormFields";

interface FormActionsProps {
  name: string;
  type: "model" | "product" | "event" | "membership";
  selectedOption: string;
}

export const FormActions = ({
  name,
  type,
  selectedOption,
}: FormActionsProps) => {
  return (
    <div className="mt-4 p-4 bg-slate-600 rounded-lg shadow-lg">
      {selectedOption === `Add ${name}` && type != "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-center text-white">
            Add {name}
          </h3>
          <form>
            <FormFields type={type} />
            <button className="mt-4 w-full p-2 text-white font-bold bg-green-500 rounded hover:bg-green-600">
              Save
            </button>
          </form>
        </>
      )}

      {selectedOption === `Modify ${name}` && type != "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Modify {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <FormFields type={type} />
            <button className="mt-4 w-full p-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600">
              Modify
            </button>
          </form>
        </>
      )}

      {selectedOption === `Delete ${name}` && type != "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Eliminar {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-red-500 rounded hover:bg-red-600">
              Delete
            </button>
          </form>
        </>
      )}

      {selectedOption === `Add media ${name}` && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Add media {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="text"
              name="media"
              placeholder="Media URL"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-green-500 rounded hover:bg-green-600">
              Add
            </button>
          </form>
        </>
      )}

      {selectedOption === `Delete media ${name}` && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Delete media {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="number"
              name="id"
              placeholder={`ID de la media`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-red-500 rounded hover:bg-red-600">
              Delete
            </button>
          </form>
        </>
      )}

      {selectedOption === `Add achievements ${name}` && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Add achievements {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <textarea
              name="achievements"
              placeholder="Achievement"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-green-500 rounded hover:bg-green-600">
              Add
            </button>
          </form>
        </>
      )}

      {selectedOption === `Delete achievements ${name}` && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Delete achievements {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="number"
              name="id_achievement"
              placeholder={`ID del achievement`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-red-500 rounded hover:bg-red-600">
              Delete
            </button>
          </form>
        </>
      )}

      {selectedOption === `Add ${name}` && type == "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Add {name}
          </h3>
          <form>
            <input
              type="text"
              name="userID"
              placeholder="User ID"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="text"
              name="type_membership"
              placeholder="Type Membership"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-green-500 rounded hover:bg-green-600">
              Save
            </button>
          </form>
        </>
      )}

      {selectedOption === `Modify ${name}` && type == "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Modify {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="text"
              name="userID"
              placeholder="User ID"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <input
              type="text"
              name="type_membership"
              placeholder="Type Membership"
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600">
              Modify
            </button>
          </form>
        </>
      )}

      {selectedOption === `Delete ${name}` && type == "membership" && (
        <>
          <h3 className="mb-2 text-lg font-semibold text-white text-center">
            Eliminar {name}
          </h3>
          <form>
            <input
              type="number"
              name="id"
              placeholder={`ID de ${name}`}
              className="w-full p-2 border rounded mb-2 bg-slate-300 text-black placeholder:text-gray-600"
            />
            <button className="mt-4 w-full p-2 text-white font-bold bg-red-500 rounded hover:bg-red-600">
              Delete
            </button>
          </form>
        </>
      )}
    </div>
  );
};
