package com.wehack.Backend.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "course")
@Builder
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Column(name = "title")
    String title;

    @Column(name = "course_No")
    String courseNo;

    @Column(name = "description")
    String description;


    @OneToMany(fetch = FetchType.LAZY,mappedBy = "id")//co or pre
    List<Course> coRecs;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "id")
    List<Course> preRecs;

    @Column(name = "credits")
    int credits;

    @ManyToMany
    @JoinColumn(referencedColumnName = "id", name = "categoryId")
    List<Category> category;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "majorId")
    Major major;





}
