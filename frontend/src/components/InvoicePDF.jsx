import React from "react";
import { Page, Document, Text, StyleSheet } from "@react-pdf/renderer";

const InvoicePDF = ({ customerName, items, total, paymentMethod }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "rgba(255, 255, 0, 0.3)",
      padding: 20,
    },
  });

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Text>Nota Fiscal</Text>
        <Text>Cliente: {customerName}</Text>
        <Text>Método de Pagamento: {paymentMethod}</Text>

        <Text>Itens:</Text>
        {items.map(({ productName, stock, price }, index) => (
          <Text key={index}>
            - {productName} | {stock}x | R${price.toFixed(2)}
          </Text>
        ))}

        <Text>Total: R$ {total}</Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
