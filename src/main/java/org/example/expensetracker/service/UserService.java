package org.example.expensetracker.service;


import org.example.expensetracker.model.UserModel;
import org.example.expensetracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<UserModel> getAllUsers() {
        return repo.findAll();
    }

    public UserModel saveUser(UserModel user) {
        return repo.save(user);
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }

    public UserModel updateUser(Long id, UserModel user) {
        user.setId(id);
        return repo.save(user);
    }

    public Double getTotalExpense() {
        Double total = repo.getTotalExpense();
        return total != null ? total : 0.0;
    }

    public Map<String, Double> getExpenseByCategory() {
        List<Object[]> res = repo.getExpenseByCategory();
        Map<String, Double> map = new HashMap<>();

        for (Object[] row : res) {
            map.put((String) row[0], (Double) row[1]);
        }
        return map;
    }

    public UserModel getExpenseById(Long id) {
        return repo.findById(id).orElse(null);
    }


        public List<UserModel> getByCategory (String category){
            return repo.findByCategory(category);
        }

    public List<UserModel> getByDateBetween(LocalDate start, LocalDate end) {
        return repo.findByDateBetween(start, end);

    }

    public Double getMonthlyTotal() {
        return repo.getMonthlyTotal();
    }

    public List<UserModel> getByTitle(String title) {
        return repo.findByTitle(title);
    }
}



