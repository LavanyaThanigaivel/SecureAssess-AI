package com.aiexam.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aiexam.backend.entity.Exam;
import com.aiexam.backend.repository.ExamRepository;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public Exam saveExam(Exam exam) {
        return examRepository.save(exam);
    }
    public Exam updateExam(Long id, Exam updatedExam) {

    Exam exam = examRepository.findById(id).orElse(null);

    if (exam != null) {

        exam.setTitle(updatedExam.getTitle());
        exam.setDescription(updatedExam.getDescription());
        exam.setDuration(updatedExam.getDuration());
        exam.setTotalMarks(updatedExam.getTotalMarks());

        return examRepository.save(exam);
    }

    return null;
    }
    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public Exam getExamById(Long id) {
        return examRepository.findById(id).orElse(null);
    }

    public void deleteExam(Long id) {
        examRepository.deleteById(id);
    }
}