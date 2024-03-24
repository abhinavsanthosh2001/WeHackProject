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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Column(name = "title")
    String title;

    @Column(name = "courses")
    @OneToMany(mappedBy = "id")
    @JsonIgnore
    List<Course> courses;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "CoreCurriculumId")
    CoreCurriculum coreCurriculum;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "MajorId")
    Major major;


}
