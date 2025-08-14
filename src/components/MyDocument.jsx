import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
  },
});

function MyDocument({ personalInfo, educationInfo }) {
  console.log(educationInfo);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Personal Info</Text>
          <Text>Name: {personalInfo.fullName}</Text>
          <Text>Email: {personalInfo.email}</Text>
          <Text>Job Title: {personalInfo.jobTitle}</Text>
          <Text>Phone Number: {personalInfo.phoneNumber}</Text>
          <Text>Location: {personalInfo.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          {educationInfo.map((edu) => (
            <View key={edu.id} style={{ marginBottom: 10 }}>
              <Text>Institution: {edu.institution}</Text>
              <Text>Degree: {edu.degree}</Text>
              <Text>Start Date: {edu.startDate}</Text>
              <Text>End Date: {edu.endDate}</Text>
              <Text>Location: {edu.location}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
