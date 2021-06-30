package com.nology.nologer;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class StudentController {

    List<Student> students = new ArrayList<>();

    public StudentController() {
        students.add(new Student(0, "John", "Jam", 20, "Bermondsey", new String[] {"Cows", "Fishes", "Carpentry"}));
        students.add(new Student(1, "Jill", "Chopp", 60, "London", new String[] {"Swordfighting", "Voodoo"}));
        students.add(new Student(2, "Moray", "Eel", 34, "Uzbekistan", new String[] {"Stargazing", "Rockclimbing", "Carpentry"}));
    }

    // get students
    @GetMapping("/students")
    public List<Student> getStudents() {
        return this.students;
    }

    // get student by id
    @GetMapping("/students/{studentId}")
    public Student getStudent(@PathVariable String studentId) {
        int idAsInt = Integer.parseInt(studentId);
        return this.students.get(idAsInt);

    }

    @PostMapping("/student")
    public Student createStudent(@RequestBody Student student) {
        student.setId(this.students.size());
        this.students.add(student);
        return student;
    }

    // delete a student
    @DeleteMapping("/remove/{studentId}")
    public List<Student> deleteStudent(@PathVariable String studentId) {
        this.students.remove(Integer.parseInt(studentId));
        return this.students;
    }


    // update student
    @PutMapping("/student/{studentId}")
    public Student updateStudent(@PathVariable String studentId, @RequestBody Student student) {
        this.students.remove(Integer.parseInt(studentId));
        student.setId(Integer.parseInt(studentId));
        this.students.add(student);
        return student;

    }

}
