import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import { Column } from "../../../types/table";
import Modal from "../../../components/Modal";
import AddUserForm from "./AddUserForm";

type UserManagementProps = Record<string, unknown>;

const UserManagement: React.FC<UserManagementProps> = () => {
    const [users, setUsers] = useState([]);
    const [columns, setColumns] = useState<Column[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddUser = (user: any) => {
        console.log("User added:", user);
        // setUsers((prev) => [...prev, user]);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
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

    return (
        <Card title="Users">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">User Management</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-black btn-sm"
                    >
                        Add New User
                    </button>
                </div>
                <Table columns={columns} data={users} />


                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New User">
                    {/* <div> Hello from User Management</div> */}
                    <AddUserForm onAdd={handleAddUser} onClose={() => setIsModalOpen(false)} />
                </Modal>
            </div>
        </Card>
    );
};

export default UserManagement;