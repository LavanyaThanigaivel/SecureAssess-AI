package com.aiexam.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aiexam.backend.entity.User;
import com.aiexam.backend.repository.UserRepository;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {

    User user = userRepository.findByEmail(email);

    if (user != null && user.getPassword().equals(password)) {
        return user;
    }

    return null;
    }
}

