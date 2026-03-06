package org.example.expensetracker.controller;


import org.example.expensetracker.model.UserModel;
import org.example.expensetracker.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService serv;
    public UserController(UserService serv)
    {
        this.serv = serv;
    }
    @GetMapping("/search")
    public List<UserModel> getByTitle(@RequestParam String title)
    {
        return serv.getByTitle(title);
    }
    @GetMapping("/monthly-total")
    public Double getMonthlyTotal()
    {
        return serv.getMonthlyTotal();
    }

    @GetMapping("/date")
    public List<UserModel> getByDateBetween(@RequestParam LocalDate start,
                                            @RequestParam LocalDate end)
    {
        return serv.getByDateBetween(start, end);
    }

    @GetMapping("/category/{category}")
    public List<UserModel> getByCategory(@PathVariable String category)
    {
        return serv.getByCategory(category);
    }
    @GetMapping("/{id}")
    public UserModel getExpenseById(@PathVariable Long id)
    {
        return serv.getExpenseById(id);
    }
    @GetMapping("/category-total")
        public Map<String, Double> getCategoryTotal() {
        return serv.getExpenseByCategory();
    }
    @GetMapping("/total-expense")
    public Double getTotalExpense() {
        return serv.getTotalExpense();
    }
    @GetMapping
    public List<UserModel> getUsers()
    {
        return serv.getAllUsers();
    }
    @PostMapping
    public UserModel addUser(@RequestBody UserModel user)
    {
        return serv.saveUser(user);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id)
        {
            serv.deleteUser(id);
        }
    @PutMapping("/{id}")
    public UserModel updateUser(@PathVariable Long id, @RequestBody UserModel user)
    {
        return serv.updateUser(id, user);
    }
}
