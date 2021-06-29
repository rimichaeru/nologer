package com.nology.nologer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class StudentController {

    List<Student> students = new ArrayList<>();

    public StudentController() {
        students.add(new Student("John", "Jam", 20, "Bermondsey", new String[] {"Cows", "Fishes", "Carpentry"}));
        students.add(new Student("Jill", "Chopp", 60, "London", new String[] {"Swordfighting", "Voodoo"}));
        students.add(new Student("Moray", "Eel", 34, "Uzbekistan", new String[] {"Stargazing", "Rockclimbing", "Carpentry"}));
    }

    // get students
    @GetMapping("students")
    public List<Student> getStudents() {
        return this.students;
    }

    // get student by id
    @GetMapping("students/{id}")
    public Student getStudent(@PathVariable int id) {
        return this.students.get(id);

    }

    // delete a student
}
