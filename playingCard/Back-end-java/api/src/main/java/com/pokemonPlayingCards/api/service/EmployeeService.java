package com.pokemonPlayingCards.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pokemonPlayingCards.api.model.Employee;
import com.pokemonPlayingCards.api.repository.EmployeeRepository;

import lombok.Data;

@Data
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Optional<Employee> getEmployee(final long id){
        return employeeRepository.findById(id);
    
    }

    public Iterable<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(final long id){
        employeeRepository.deleteById(id);
    }

    public Employee saveEmployees(Employee employee){
        Employee savedEmployee = employeeRepository.save(employee);
        return savedEmployee;
    }

}
