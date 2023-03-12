import React from "react";
import { StyleSheet, View } from "react-native";
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return <View style={styles.container}>{children}</View>;
};

export default Layout;
