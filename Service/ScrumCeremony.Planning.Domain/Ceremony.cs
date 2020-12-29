using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ScrumCeremony.Domain
{
    public class Ceremony
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(150)]
         public string CeremonyName { get; set; }
        [MaxLength(500)]
        public string CeremonyDescription { get; set; }
        public Team Team { get; set; }
        public Guid TeamId { get; set; }
    }
}
