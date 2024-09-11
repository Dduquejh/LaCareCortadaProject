interface FormFieldsProps {
  type: "model" | "product" | "event" | "membership";
}

const FormFields = ({ type }: FormFieldsProps) => {
  switch (type) {
    case "model":
      return (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio URL"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
        </>
      );
    case "product":
      return (
        <>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
        </>
      );
    case "event":
      return (
        <>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            name="hour"
            placeholder="Hour"
            className="w-full p-2 border rounded mb-2  bg-slate-300 text-black placeholder:text-gray-600"
          />
        </>
      );
    default:
      return null;
  }
};

export default FormFields;
