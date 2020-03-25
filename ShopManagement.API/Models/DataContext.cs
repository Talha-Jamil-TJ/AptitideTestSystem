﻿using Microsoft.EntityFrameworkCore;

namespace ShopManagement.models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        
        public DbSet<Role> Roles  { get; set; }

        public DbSet<Vacancy> Vacancies { get; set; }

        public DbSet<Interview> Interviews { get; set; }
    }
}