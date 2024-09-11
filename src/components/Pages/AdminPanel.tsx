import DropdownMenu from "../AdminPanel/DropdownMenu";

const AdminPanel = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Admin Panel
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-16">
          <DropdownMenu name="Products" type="product" />
          <DropdownMenu name="Models" type="model" />
          <DropdownMenu name="Events" type="event" />
          <DropdownMenu name="Membership" type="membership" />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
