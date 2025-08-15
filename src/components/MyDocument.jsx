import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { format } from "date-fns";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
    flexDirection: "column",
    gap: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 600,
  },
  name: {
    fontSize: 21,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: 600,
  },
  job: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 5,
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bold: {
    fontWeight: 600,
  },
});

function formatDate(dateStr) {
  return format(new Date(dateStr), "MMMM yyyy");
}

function MyDocument({ personalInfo, educationInfo }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{personalInfo.fullName}</Text>
        <Text style={styles.job}>{personalInfo.jobTitle}</Text>
        <View style={styles.row}>
          <Text>{personalInfo.email}</Text>
          <Text>·</Text>
          <Text>{personalInfo.phoneNumber}</Text>
          <Text>·</Text>
          <Text>{personalInfo.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.line}></Text>
          {educationInfo.map((edu) => (
            <View key={edu.id}>
              <View style={styles.date}>
                <Text style={styles.bold}>{edu.institution}</Text>
                <Text>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)} | {edu.location}
                </Text>
              </View>
              <Text>{edu.degree}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
