package com.aiexam.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aiexam.backend.entity.Exam;
import com.aiexam.backend.service.ExamService;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    @PostMapping
    public Exam createExam(@RequestBody Exam exam) {
        return examService.saveExam(exam);
    }

    @GetMapping
    public List<Exam> getAllExams() {
        return examService.getAllExams();
    }

    @GetMapping("/{id}")
    public Exam getExamById(@PathVariable Long id) {
        return examService.getExamById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteExam(@PathVariable Long id) {
        examService.deleteExam(id);
        return "Exam Deleted Successfully";
    }

    @PutMapping("/{id}")
    public Exam updateExam(
        @PathVariable Long id,
        @RequestBody Exam exam) {

    return examService.updateExam(id, exam);
    }
}