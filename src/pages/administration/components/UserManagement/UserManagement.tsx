import { useEffect, useState } from "react";
import Table from "../../../../components/Table";
import Modal from "../../../../components/Modal";
import AddUserForm from "./AddUserForm";
import { Column } from "../../../../types/table";
import Card from "../../../../components/Card";
import {
  IProjectWithZones,
  IRole,
  IUser,
  masterData,
  userManagementApi,
} from "../../../../api/user.api";
import {
  IParsedUser,
  parseUserFields,
  parseUserPayloadFields,
} from "../../../../utils/userUtils";

type UserManagementProps = Record<string, unknown>;

const UserManagement: React.FC<UserManagementProps> = () => {
  const [users, setUsers] = useState<IParsedUser[]>([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState<Column[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [zoneRolesData, setZoneRolesData] = useState<IRole[]>([]);
  const [projectRolesData, setProjectRolesData] = useState<IRole[]>([]);
  const [projectWithZoneData, setProjectWithZoneData] = useState<
    IProjectWithZones[]
  >([]);
  const [systemRolesData, setSystemRolesData] = useState<IRole[]>([]);

  useEffect(() => {
    fetchMasterData();
    fetchUsers();
  }, []);

  const handleAddUser = (user: any) => {
    console.log("User added:", user);
    const parsedUserPayload = parseUserPayloadFields(
      user,
      projectWithZoneData?.[0]?.projectId ?? 1
    );
    console.log("Parsed User Payload:", parsedUserPayload);

    addUser(parsedUserPayload);
  };

  const handleEdit = (row: any) => {
    setEditRow(row);
    setEditModalOpen(true);
  };

  const fetchMasterData = async () => {
    try {
      const [projectWithZoneResponse, rolesResponse] = await Promise.all([
        masterData.getProjectWithZones(),
        masterData.getRoles(),
      ]);
      setProjectWithZoneData(projectWithZoneResponse.data);
      setZoneRolesData(
        rolesResponse.data.filter((role) => role.isZoneSpecific)
      );
      setProjectRolesData(
        rolesResponse.data.filter(
          (role) => !role.isZoneSpecific && role.source === "Project"
        )
      );
      setSystemRolesData(
        rolesResponse.data.filter((role) => role.source === "System")
      );
    } catch (error) {
      console.error("Error fetching master data:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userManagementApi.getUsers();
      const parsedUsers = parseUserFields(response.data);
      if (!parsedUsers || parsedUsers.length === 0) {
        setUsers([]);
        setColumns([]);
        return;
      }
      const dynamicColumns = Object.keys(parsedUsers[0]).map((key) => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      }));

      setUsers(parsedUsers);
      setColumns(dynamicColumns);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
      setColumns([]);
    }
  };

  const addUser = async (user: IUser) => {
    try {
      const response = await userManagementApi.addUsers(user);
      if (response.success) {
          setIsModalOpen(false);
          fetchUsers();
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <Card title="Users">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black font-normal text-sm icon-search" />
          <input
            type="text"
            placeholder=""
            className="border border-gray-300 rounded pl-10 pr-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-red-200"
          />
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
            onChange={(e) => {
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
      <Table
        columns={columns}
        data={paginatedUsers}
        showAction={true}
        onEditRow={handleEdit}
      />

      <Modal isOpen={isModalOpen} title="Add New User" size="xxl">
        <AddUserForm
          onAdd={handleAddUser}
          onClose={() => setIsModalOpen(false)}
          projectRolesData={projectRolesData}
          zoneRolesData={zoneRolesData}
          projectWithZoneData={projectWithZoneData}
          systemRolesData={systemRolesData}
        />
      </Modal>

      <Modal isOpen={editModalOpen} title="Edit User" size="xxl">
        {editRow && (
          <AddUserForm
            onAdd={handleAddUser}
            onClose={() => setEditModalOpen(false)}
            editData={editRow}
            projectRolesData={projectRolesData}
            zoneRolesData={zoneRolesData}
            projectWithZoneData={projectWithZoneData}
            systemRolesData={systemRolesData}
          />
        )}
      </Modal>
    </Card>
  );
};

export default UserManagement;
