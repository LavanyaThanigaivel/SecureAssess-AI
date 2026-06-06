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

import com.aiexam.backend.dto.LoginResponse;
import com.aiexam.backend.entity.User;
import com.aiexam.backend.security.JwtUtil;
import com.aiexam.backend.service.UserService;
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public LoginResponse loginUser(
        @RequestBody User user) {

    User loggedInUser =
            userService.loginUser(
                    user.getEmail(),
                    user.getPassword());

    if (loggedInUser != null) {

        String token =
                jwtUtil.generateToken(
                        loggedInUser.getEmail());

        return new LoginResponse(token);
    }

    return null;
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id,
    @RequestBody User user) {
    return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
    return "User Deleted Successfully";
    }
}