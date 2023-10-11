import React from "react";
import { Tabs } from "react-tabs";
import styles from "./CustomTabs.module.scss";

const CustomTabs = ({ children }) => {
  return (
    <Tabs
      selectedTabClassName={styles.selectedTab}
      selectedTabPanelClassName={styles.selectedTabPanel}
      className={styles.tabsWrapper}
    >
      {children}
    </Tabs>
  );
};

export default CustomTabs;
