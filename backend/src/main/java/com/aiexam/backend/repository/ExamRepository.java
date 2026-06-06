package com.aiexam.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aiexam.backend.entity.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}