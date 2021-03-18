import Course from './Course'
import React,{useState} from 'react';
import { StyleSheet, ScrollView,View, TouchableOpacity,Text } from 'react-native';
import {hasConflict} from '../utils/course'

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',

    }
})


const CourseSelector = ({courses}) => {
    const [selected, setSelected] = useState([]);
  
    const toggle = course => setSelected(selected => (
      selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));
  
    return (
      <View style={styles.courseList}>
        {courses.map(course => 
        <Course key={course.id} 
        course={course} 
        isSelected={selected.includes(course)} 
        isDisabled={hasConflict(course, selected)}
        select={toggle}/>)}
      </View>
    );
  };

  export default CourseSelector;