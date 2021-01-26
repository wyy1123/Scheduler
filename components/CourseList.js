import React from 'react';
import Course from './Course';
import { StyleSheet, ScrollView,View } from 'react-native';

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

});

const CourseList = ({courses}) => (
    <ScrollView>
    <View style={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </View>
    </ScrollView>
  );

export default CourseList;