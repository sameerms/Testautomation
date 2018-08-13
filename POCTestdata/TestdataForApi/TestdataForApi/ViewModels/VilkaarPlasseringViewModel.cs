using Microsoft.Build.Framework;

namespace TestdataForApi.ViewModels
{
   
    public class VilkaarPlasseringViewModel
    {
        [Required]
        public int VilkaarId { get; set; }

        public int? Plassering { get; set; }
    }
}