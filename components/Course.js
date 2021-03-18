import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCourseNumber } from '../utils/course'

const courseButton = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
  backgroundColor: '#66b0ff',
}

const styles = StyleSheet.create({
  courseButton,
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  courseButtonSelected: {
    ...courseButton,
    backgroundColor: "#004a99"
  },
  courseButtonDisabled: {
    ...courseButton,
    backgroundColor: "#d3d3d3"
  },
});

const Course = ({course, isSelected, isDisabled, select}) => (
  <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton' ]}
      onPress={() => { if (!isDisabled) select(course)}}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

export default Course;