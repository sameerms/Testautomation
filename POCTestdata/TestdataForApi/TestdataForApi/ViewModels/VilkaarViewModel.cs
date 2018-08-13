using System.Collections.Generic;
using Microsoft.Build.Framework;


namespace TestdataForApi.ViewModels
{

    public class VilkaarViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Tittel { get; set; }

        [Required]
        public string StoetteTekst { get; set; }

        [Required]
        public IReadOnlyCollection<AarsakViewModel> AarsakerOppfylt { get; set; }

        [Required]
        public IReadOnlyCollection<AarsakViewModel> AarsakerIkkeOppfylt { get; set; }

        [Required]
        public IReadOnlyCollection<AarsakViewModel> AarsakerMerInformasjon { get; set; }
    }
}
