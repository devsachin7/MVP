import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import { Column } from "../../../../types/table";
import Table from "../../../../components/Table";
import Modal from "../../../../components/Modal";
import TradeForm from "./add-trade-form/trade-form";

const TradePartners: React.FC = ()=>{
    const [users, setUsers] = useState([]);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState<Column[]>([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editRow, setEditRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddUser = (user: any) => {
        console.log("User added:", user);
        // setUsers((prev) => [...prev, user]);
    };


    const handleEdit = (row: any) => {
        setEditRow(row);
        setEditModalOpen(true);
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


    return(
        <Card title="Trade Partners">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-normal text-sm icon-search" />
                    <input type="text" placeholder="" className="border border-gray-300 rounded pl-10 pr-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-red-200" />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-black text-white rounded px-5 py-2 font-semibold text-sm hover:bg-gray-800 transition"
                    >
                        Add Trade Partners
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

            <Table columns={columns} data={paginatedUsers} showAction={true} onEditRow={handleEdit} />
            
            <Modal isOpen={isModalOpen} title="Trade Partners Details" size="xxl">
                <TradeForm onAdd={handleAddUser} onClose={() => setIsModalOpen(false)} />
            </Modal>

            <Modal isOpen={editModalOpen}  title="Trade Partners Details" size="xxl">
                {editRow && (
                    <TradeForm
                        onAdd={handleAddUser}
                        onClose={() => setEditModalOpen(false)}
                        editData={editRow}
                    />
                )}
            </Modal>
        </Card>
    )
}

export default TradePartners;