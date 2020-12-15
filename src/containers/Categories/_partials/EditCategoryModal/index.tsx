import React, { useState, FC, useEffect } from "react";
import { Button, Modal, Form, Input, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useApiContext } from "../../../../context/Api";
import { useCategoryContext } from "../../../../context/Categories";
import { CategoryProps } from "../../../../context/Categories/types";

interface EditCategoryProps {
  isEditCategoryModalOpen: boolean;
  toggleEditCategoryModal: () => void;
  currCategory?: CategoryProps;
}

const FormItem = Form.Item;
const Dragger = Upload.Dragger;

const EditCategoryModal: FC<EditCategoryProps> = ({
  isEditCategoryModalOpen,
  toggleEditCategoryModal,
  currCategory,
}) => {
  const [file, setFile] = useState<{
    category_image: any[];
  }>({
    category_image: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
    } catch (error) {}
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
      visible={isEditCategoryModalOpen}
      destroyOnClose
      onCancel={toggleEditCategoryModal}
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
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          category_name: currCategory?.name,
        }}
      >
        <FormItem
          name="category_name"
          label="Name"
          rules={[
            {
              message: "Please enter category name!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter Category Name" />
        </FormItem>

        <FormItem
          name="category_image"
          label="Category Image"
          rules={[
            {
              message: "Please upload cateegory image!",
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
      </Form>
    </Modal>
  );
};

export default EditCategoryModal;
