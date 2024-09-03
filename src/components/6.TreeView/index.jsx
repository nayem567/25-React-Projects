import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import MenuList from "./Menu-List";
import menus from "./data";

const TreeView = ({ menus = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="tree-view-container"
    >
      <h1>Hi</h1>
      <MenuList list={menus} />
    </motion.div>
  );
};

export default TreeView;
