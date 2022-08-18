import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import css from "../styles/FilterModal.module.css"
const FilterModal = ({setOpenModal, opened}) => {
  const theme = useMantineTheme();
  const handleSubmit = () => {

  };
  
  return (
    <Modal
    overlayColor={
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2]
    }
    overlayOpacity={0.55}
    overlayBlur={3}
    opened={opened}
    onClose={() => setOpenModal(false)}
    >
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input type="text" />
      </form>
    </Modal>
  )
}

export default FilterModal