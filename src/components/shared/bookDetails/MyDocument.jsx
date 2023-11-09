
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useLoaderData } from 'react-router-dom';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
    
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{read}</Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument