using System;
using System.ComponentModel.DataAnnotations;

namespace ScrumCeremony.Domain
{
    public class Team
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(120)]
        public string TeamName { get; set; }
    }
}
