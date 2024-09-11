import DropdownMenu from "../AdminPanel/DropdownMenu";

const AdminPanel = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full">
                <div className="w-full max-w-7xl mx-auto my-10 px-4">
                    <h1 className="text-4xl font-bold text-white mb-4 text-center">
                        Admin Panel
                    </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                            <DropdownMenu name="Products" type="product" />
                            <DropdownMenu name="Models" type="model" />
                            <DropdownMenu name="Events" type="event" />
                            <DropdownMenu name="Membership" type="membership" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
