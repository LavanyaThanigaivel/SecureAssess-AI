package com.aiexam.backend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.aiexam.backend.entity.User;
import com.aiexam.backend.repository.UserRepository;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
    user.setPassword(
        passwordEncoder.encode(user.getPassword())
    );
    return userRepository.save(user);
    }

    public void deleteUser(Long id) {
    userRepository.deleteById(id);
    }

    public User loginUser(String email, String password) {
    User user = userRepository.findByEmail(email);
    if (user != null &&
        passwordEncoder.matches(password, user.getPassword())) {

        return user;
    }
    return null;
    }

    public User updateUser(Long id, User updatedUser) {

    Optional<User> existingUser = userRepository.findById(id);

    if (existingUser.isPresent()) {

        User user = existingUser.get();

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());

        return userRepository.save(user);
    }

    return null;
}
}

