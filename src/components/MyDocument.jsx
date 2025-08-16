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
    marginBottom: 25,
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
  paddingTop: {
    paddingTop: 5,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 12,
    color: "gray",
  },
});

function formatDate(dateStr) {
  return format(new Date(dateStr), "MMMM yyyy");
}

function MyDocument({ personalInfo, educationInfo, experienceInfo }) {
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
          <Text style={styles.heading}>Summary</Text>
          <Text style={styles.line}></Text>
          <Text>{personalInfo.summary}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.line}></Text>
          {educationInfo.map((edu) => (
            <View key={edu.id} wrap={false}>
              <View style={styles.date}>
                <Text style={styles.bold}>{edu.institution}</Text>
                <Text style={styles.bold}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)} |{" "}
                  {edu.location}
                </Text>
              </View>
              <Text style={styles.bold}>{edu.degree}</Text>
              <Text style={styles.paddingTop}>{edu.description}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          <Text style={styles.line}></Text>
          {experienceInfo.map((exp) => (
            <View key={exp.id} wrap={false}>
              <View style={styles.date}>
                <Text style={styles.bold}>{exp.employer}</Text>
                <Text style={styles.bold}>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)} |{" "}
                  {exp.location}
                </Text>
              </View>
              <Text style={styles.bold}>{exp.jobTitle}</Text>
              <Text style={styles.paddingTop}>{exp.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
