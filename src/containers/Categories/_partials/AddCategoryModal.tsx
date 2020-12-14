import React, { FC, useState } from "react";
import { Button, Modal, Form, Input, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

interface AddCategoryProps {
  isAddCategoryModalOpen: boolean;
  toggleAddCategoryModal: () => void;
}

const FormItem = Form.Item;
const Dragger = Upload.Dragger;

const AddCategoryModal: FC<AddCategoryProps> = ({
  isAddCategoryModalOpen,
  toggleAddCategoryModal,
}) => {
  const [file, setFile] = useState<{
    category_image: any[];
  }>({
    category_image: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((errors) => {
        console.log(errors);
      });
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
      title="Add New Item Category"
      visible={isAddCategoryModalOpen}
      destroyOnClose
      onCancel={toggleAddCategoryModal}
      footer={[
        <Button
          htmlType="submit"
          key="add-category-btn"
          onClick={handleSubmit}
          type="primary"
          loading={isLoading}
        >
          Add
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <FormItem name="category_name" label="Name">
          <Input placeholder="Enter Category Name" />
        </FormItem>

        <FormItem name="category_image" label="Category Image">
          <Dragger {...props} customRequest={() => {}}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default AddCategoryModal;
