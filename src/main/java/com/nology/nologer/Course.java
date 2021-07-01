package com.nology.nologer;

public class Course {

    private String id;
    public String name;
    private String desc;
    private String start;
    private String lecturer;

    public Course(String id, String name, String desc, String start, String lecturer) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.start = start;
        this.lecturer = lecturer;
    }

    public String getLecturer() {
        return lecturer;
    }

    public void setLecturer(String lecturer) {
        this.lecturer = lecturer;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
