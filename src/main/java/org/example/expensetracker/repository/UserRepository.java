package org.example.expensetracker.repository;

import org.example.expensetracker.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    @Query("SELECT SUM(u.amount) FROM UserModel u")
    Double getTotalExpense();

    @Query("SELECT u.category, SUM(u.amount) FROM UserModel u GROUP BY u.category")
    List<Object[]> getExpenseByCategory();

    List<UserModel> findByCategory(String category);

    List<UserModel> findByDateBetween(LocalDate start, LocalDate end);

    @Query("SELECT SUM(u.amount) FROM UserModel u WHERE MONTH(u.date)=MONTH(CURRENT_DATE)")
    Double getMonthlyTotal();

    List<UserModel> findByTitle(String title);
}
