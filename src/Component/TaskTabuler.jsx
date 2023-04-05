import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  useColorModeValue,
  Td,
  Button,
  Input
} from "@chakra-ui/react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import Modal from "antd/es/modal/Modal";
import { Pagination } from "antd";
import Paginations from "./Paginations";

function TaskTabuler() {
  const textColor = useColorModeValue("gray.700", "white");
  const data = JSON.parse(localStorage.getItem("entries")) || [];
  
  const [formData, setFormData] = useState([]);
  const [edit,setEdit]=useState(false)
  const [editText,setEditText]=useState(data)

  useEffect(() => {
    
    setFormData(data);
  }, []);

  const handleDelete = (index) => {
    const newData = formData.filter((item, i) => i !== index);
    localStorage.setItem("entries", JSON.stringify(newData));
    setFormData(newData);
  };
  // const [visible, setVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Edit = (id) => {
    setIsModalOpen(true);
  console.log(id)
  // const updatedId = formData.map((item, i) => i===id?setEditText(
    
  // ));
  
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [tableData, setTableData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("myTableData"));
    return storedData || [];
  });

  return (
    <Table w="80%" m="auto" variant="simple" color={textColor}>
      <Thead>
        <Tr my=".8rem" pl="0px" color="black" bgColor="blue.400">
          <Th pl="0px" color="black">
            Title
          </Th>
          <Th color="black">Description</Th>
          <Th color="black">Due Date</Th>
          <Th color="black">Tag</Th>
          <Th color="black">Status</Th>
          <Th color="black">Timestamp</Th>
          <Th color="black">Modify</Th>
          <Th color="black">Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {formData.map((item, index) => (
          <Tr key={index}>
            <Td>{item.title}</Td>
            <Td>{item.description}</Td>
            <Td>{item.dueDate}</Td>
            <Td>{item.tags}</Td>
            <Td>{item.status}</Td>
            <Td>{item.timestamp}</Td>
            <Td>
              <Button type="primary" onClick={()=>{
                       Edit(index)
              }}>
                Edit
              </Button>
              <Modal
                title="Basic Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Input
                  value={isModalOpen?.title}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, title: e.target.value };
                    });
                    console.log(setIsModalOpen, "setISModalOpen");
                  }}
                />
                <Input
                  value={isModalOpen?.description}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, description: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.dueDate}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, dueDate: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.tags}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, tags: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.status}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, status: e.target.value };
                    });
                  }}
                />
              </Modal>
            </Td>
            <Td>
              <Button colorScheme="red" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default TaskTabuler;

// This is how the "tablesTableData" imported above should look like
// const tablesTableData = [
//   {
//     logo: avatar1,
//     name: "Esthera Jackson",
//     email: "alexa@simmmple.com",
//     subdomain: "Manager",
//     domain: "Organization",
//     status: "Online",
//     date: "14/06/21",
//   },
//   {
//     logo: avatar2,
//     name: "Alexa Liras",
//     email: "laurent@simmmple.com",
//     subdomain: "Programmer",
//     domain: "Developer",
//     status: "Offline",
//     date: "12/05/21",
//   },
//   {
//     logo: avatar3,
//     name: "Laurent Michael",
//     email: "laurent@simmmple.com",
//     subdomain: "Executive",
//     domain: "Projects",
//     status: "Online",
//     date: "07/06/21",
//   },
//   {
//     logo: avatar4,
//     name: "Freduardo Hill",
//     email: "freduardo@simmmple.com",
//     subdomain: "Manager",
//     domain: "Organization",
//     status: "Online",
//     date: "14/11/21",
//   },
//   {
//     logo: avatar5,
//     name: "Daniel Thomas",
//     email: "daniel@simmmple.com",
//     subdomain: "Programmer",
//     domain: "Developer",
//     status: "Offline",
//     date: "21/01/21",
//   },
//   {
//     logo: avatar7,
//     name: "Mark Wilson",
//     email: "mark@simmmple.com",
//     subdomain: "Designer",
//     domain: "UI/UX Design",
//     status: "Offline",
//     date: "04/09/20",
//   },
// ]
// ;
