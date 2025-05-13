import { useEffect, useState } from "react";
import Table from "../../../components/Table";
import { Column } from "../../../types/table";
import Modal from "../../../components/Modal";
import AddUserForm from "./AddUserForm";
import Card from "../../../components/Card";

type UserManagementProps = Record<string, unknown>;

const UserManagement: React.FC<UserManagementProps> = () => {
    const [users, setUsers] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState<Column[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddUser = (user: any) => {
        console.log("User added:", user);
        // setUsers((prev) => [...prev, user]);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();

            if (json && json.length > 0) {
                setUsers(json);
                // Dynamically create column config
                const dynamicColumns: Column[] = Object.keys(json[0]).map((key) => ({
                    key,
                    label: key.charAt(0).toUpperCase() + key.slice(1),
                }));
                setColumns(dynamicColumns);
            }
        };

        fetchData();
    }, []);

    // Calculate paginated users
    const paginatedUsers = users.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    return (
        <Card title="Users">
          
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="" className="border border-gray-300 rounded px-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-red-200" />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-black text-white rounded px-5 py-2 font-semibold text-sm hover:bg-gray-800 transition"
                    >
                        Add User
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Show</span>
                    <select
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                        value={entriesPerPage}
                        onChange={e => {
                            setEntriesPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    <span className="text-sm text-gray-700">Entries</span>
                </div>
            </div>
            <Table columns={columns} data={paginatedUsers} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New User">
                <AddUserForm onAdd={handleAddUser} onClose={() => setIsModalOpen(false)} />
            </Modal>
        </Card>
    );
};

export default UserManagement;