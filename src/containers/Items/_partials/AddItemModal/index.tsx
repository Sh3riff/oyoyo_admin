import React, { FC, useState } from "react";
import { Button, Modal, Form, Input, Upload, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useApiContext } from "../../../../context/Api";
import { useCategoryContext } from "../../../../context/Categories";
import { useItemContext } from "../../../../context/Items";

interface AddItemProps {
  isAddItemModalOpen: boolean;
  toggleAddItemModal: () => void;
}

const FormItem = Form.Item;
const Dragger = Upload.Dragger;

const AddItemModal: FC<AddItemProps> = ({
  isAddItemModalOpen,
  toggleAddItemModal,
}) => {
  const [file, setFile] = useState<{
    category_image: any[];
  }>({
    category_image: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const { items } = useApiContext();
  const { refetchItems } = useItemContext();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);

      setIsLoading(true);

      const {
        category_name,
        category_image: { file },
      } = values;

      const categoryData: any = {
        name: category_name,
        image: file,
      };

      const formData = new FormData();

      for (const key in categoryData) {
        formData.append(key, categoryData[key]);
      }

      const res = await items.addItem(formData);

      console.log(res.data);

      const { status } = res.data;

      if (status === 201) {
        message.success("Item has been added successfully", 5);
        toggleAddItemModal();
        refetchItems();
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const props = {
    onRemove: (file: any) => {
      setFile((state) => {
        const index = state.category_image.indexOf(file);
        const newFileList = state.category_image.slice();
        newFileList.splice(index, 1);
        return {
          ...state,
          category_image: newFileList,
        };
      });
    },
    beforeUpload: (file: any) => {
      setFile((state) => ({
        ...state,
        category_image: [...state.category_image, file],
      }));
      return false;
    },
    fileList: file.category_image,
  };

  return (
    <Modal
      title="Add New Item"
      visible={isAddItemModalOpen}
      destroyOnClose
      onCancel={toggleAddItemModal}
      footer={[
        <Button
          htmlType="submit"
          key="add-item-btn"
          onClick={handleSubmit}
          type="primary"
          loading={isLoading}
        >
          Add
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        {/* ======== Item Name Start ======== */}
        <FormItem
          name="item_name"
          label="Name"
          rules={[
            {
              message: "Please enter item name!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter Item Name" />
        </FormItem>
        {/* ======== Item Name End ======== */}

        {/* ======== Description Start ======== */}
        <FormItem name="description" label="Description">
          <Input placeholder="Enter Description" />
        </FormItem>
        {/* ======== Description End ======== */}

        {/* ======== Weight Start ======== */}
        <FormItem
          name="weight"
          label="Weight"
          rules={[
            {
              message: "Please enter item weight!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter Item Weight" />
        </FormItem>
        {/* ======== Weight End ======== */}

        {/* ======== Price Start ======== */}
        <FormItem
          name="price"
          label="Price"
          rules={[
            {
              message: "Please enter item price!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter Item Price" />
        </FormItem>
        {/* ======== Price End ======== */}

        {/* ======== Status Start ======== */}
        <FormItem name="status" label="Status">
          <Select placeholder="Select Item Status">
            <Select.Option key="available" value="Available">
              Available
            </Select.Option>
            <Select.Option key="unavailable" value="unavailable">
              Unavailable
            </Select.Option>
          </Select>
        </FormItem>
        {/* ======== Status End ======== */}

        {/* ======== Category Start ======== */}
        <FormItem name="status" label="Category">
          <Select placeholder="Select Item Category">
            <Select.Option key="fatsa and oil" value="fatsa and oil">
              Fats and Oil
            </Select.Option>
            <Select.Option key="Protein" value="Protein">
              Protein
            </Select.Option>
          </Select>
        </FormItem>
        {/* ======== Category End ======== */}

        {/* ======== Market Start ======== */}
        <FormItem name="status" label="Market Name">
          <Select placeholder="Select Market">
            <Select.Option key="Oyingbo Market" value="Oyingbo Market">
              Oyingbo Market
            </Select.Option>
            <Select.Option key="Mile 12" value="Mile 12">
              Mile 12
            </Select.Option>
          </Select>
        </FormItem>
        {/* ======== Market End ======== */}

        {/* ======== Item Image Start ======== */}
        <FormItem
          name="image"
          label="Image"
          rules={[
            {
              message: "Please upload item image!",
              required: true,
            },
          ]}
        >
          <Dragger {...props} customRequest={() => {}}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </FormItem>
        {/* ======== Item Image End ======== */}
      </Form>
    </Modal>
  );
};

export default AddItemModal;
