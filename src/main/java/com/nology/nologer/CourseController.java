package com.nology.nologer;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    List<Course> courses = new ArrayList<>();

    // create read delete

    public CourseController() {
        courses.add(new Course("0", "Math-101", "Basic principles for algebra and statistics", "01-Sep-2021", "Robert Mazik"));
        courses.add(new Course("1", "Science-Bio-101", "Introduction to biology", "04-Sep-2021", "Elenor Gamsci"));
        courses.add(new Course("2", "English", "Overview of English literature and major western writing periods", "12-Sep-2021", "Hannah Fitzroy"));
    }

    // get courses
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return this.courses;
    }

    // get course by id
    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId) {
//        int idAsInt = Integer.parseInt(courseId);

        for (Course course : this.courses) {
            if (course.getId().equals(courseId)) {
                return course;
            }
        }
        return null;

//        return this.courses.stream().findFirst(courseId);
    }

    // create course
    @PostMapping("/course")
    public Course createCourse(@RequestBody Course course) {
//        String newId = Integer.toString((int) (Math.random()*10000));
        String newId = Integer.toString(this.courses.size());

        course.setId(newId);
        this.courses.add(course);
        return course;
    }

    // delete course
    @DeleteMapping("/delete-course/{courseId}")
    public List<Course> deleteCourse(@PathVariable String courseId) {

        this.courses.removeIf(course -> course.getId().equals(courseId));

//        this.courses.remove(Integer.parseInt(courseId));
        return this.courses;
    }


}
