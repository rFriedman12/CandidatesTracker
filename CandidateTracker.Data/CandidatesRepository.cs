using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.Data
{
    public class CandidatesRepository
    {
        private string _connString;

        public CandidatesRepository(string connString)
        {
            _connString = connString;
        }

        public void AddCandidate(Candidate candidate)
        {
            var context = new CandidatesDataContext(_connString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidates()
        {
            var context = new CandidatesDataContext(_connString);
            return context.Candidates.ToList();
        }

        public Candidate GetCandidate(int id)
        {
            var context = new CandidatesDataContext(_connString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidate(Candidate candidate)
        {
            var context = new CandidatesDataContext(_connString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET Status = {candidate.Status} WHERE Id = {candidate.Id}");
            context.SaveChanges();
        }
    }
}
