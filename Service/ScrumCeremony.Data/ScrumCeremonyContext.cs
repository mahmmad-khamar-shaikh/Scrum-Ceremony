using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ScrumCeremony.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace ScrumCeremony.Data
{
   public class ScrumCeremonyContext : DbContext
    {
        public DbSet<Team> Teams { get; set; }
        public DbSet<Ceremony> Ceremonies { get; set; }

        public IConfiguration Configuration { get; set; }
        public ScrumCeremonyContext(IConfiguration configuration )
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(Configuration["ConnectionString:ScrumCeremonyDbConnectionString"]);
            base.OnConfiguring(optionBuilder);
        }
    }
}
