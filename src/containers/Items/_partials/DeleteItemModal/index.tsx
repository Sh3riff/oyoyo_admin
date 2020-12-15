import React, { FC, useState } from "react";
import { Modal, Form, Input } from "antd";
import { CategoryProps } from "../../../../context/Categories/types";
import { useApiContext } from "../../../../context/Api";
import { useCategoryContext } from "../../../../context/Categories";

interface DeleteCategoryProps {
  isDeleteCategoryModalOpen: boolean;
  toggleDeleteCategoryModal: () => void;
  currCategory?: CategoryProps;
}

const DeleteCategoryModal: FC<DeleteCategoryProps> = ({
  isDeleteCategoryModalOpen,
  toggleDeleteCategoryModal,
  currCategory,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const {
    category: { deleteCategory },
  } = useApiContext();

  const { refetchCategories } = useCategoryContext();

  const handleDeleteProduct = async () => {
    try {
      const values = await form.validateFields();

      if (values.delete.toLowerCase() !== "delete") {
        Modal.error({
          title: "Please type in delete to delete this category",
        });
      } else {
        setIsLoading(true);

        const res = await deleteCategory(currCategory?.id);

        if (res.status === 204) {
          Modal.success({
            title: "Category has been deleted successfully",
          });

          toggleDeleteCategoryModal();
          refetchCategories();
        }
      }
    } catch (error) {
      if (error) return;
    }
  };

  return (
    <Modal
      title={`Delete Category`}
      okText="Delete"
      cancelText="Cancel"
      visible={isDeleteCategoryModalOpen}
      destroyOnClose
      onCancel={toggleDeleteCategoryModal}
      onOk={handleDeleteProduct}
      okButtonProps={{ loading: isLoading }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Type in delete to confirm"
          rules={[
            {
              required: true,
              message: "please enter the required text",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DeleteCategoryModal;
