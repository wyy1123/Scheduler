import React,{useState} from 'react';
import Course from './Course';
import { StyleSheet, ScrollView,View } from 'react-native';
import TermSelector from './TermSelector'

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

});

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return(
  <View>
    <TermSelector terms={terms} setSelectedTerm={setSelectedTerm} selectedTerm={selectedTerm} />
  <ScrollView>
  <View style={styles.courseList}>
    {termCourses.map(course => <Course key={course.id} course={course} />)}
  </View>
  </ScrollView>
  </View>);
};



export default CourseList;