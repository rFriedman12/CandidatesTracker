using Microsoft.EntityFrameworkCore;
using System;

namespace CandidateTracker.Data
{
    public class CandidatesDataContext : DbContext
    {
        private string _connString;

        public CandidatesDataContext(string connString)
        {
            _connString = connString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}
