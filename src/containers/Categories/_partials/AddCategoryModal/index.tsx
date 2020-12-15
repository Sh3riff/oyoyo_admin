import React, { FC, useState } from "react";
import { Button, Modal, Form, Input, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useApiContext } from "../../../../context/Api";
import { useCategoryContext } from "../../../../context/Categories";

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

  const { category } = useApiContext();
  const { refetchCategories } = useCategoryContext();

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

      const res = await category.addCategory(formData);

      console.log(res.data);

      const { status } = res.data;

      if (status === 201) {
        message.success("A new category has been added successfully", 5);
        toggleAddCategoryModal();
        refetchCategories();
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

export default AddCategoryModal;
