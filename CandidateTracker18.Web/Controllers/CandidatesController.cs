using CandidateTracker.Data;
using CandidateTracker18.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker18.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connString;

        public CandidatesController(IConfiguration config)
        {
            _connString = config.GetConnectionString("ConStr");
        }

        [Route("add")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connString);
            repo.AddCandidate(candidate);
        }

        [Route("getall")]
        [HttpGet]
        public List<Candidate> GetCandidates()
        {
            var repo = new CandidatesRepository(_connString);
            return repo.GetCandidates();
        }

        [Route("getcandidate")]
        [HttpGet]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidatesRepository(_connString);
            return repo.GetCandidate(id);
        }

        [Route("update")]
        [HttpPost]
        public void UpdateCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connString);
            repo.UpdateCandidate(candidate);
        }
    }
}
