package com.wehack.Backend.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import net.minidev.json.annotate.JsonIgnore;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "category")
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Column(name = "name")
    String name;

    @Column(name = "email")
    String email;

    @ManyToMany(mappedBy = "id")
    @JsonIgnore
    List<Course> courses;

    @Column(name = "year")
    String year;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "MajorId")
    Major major;
}
