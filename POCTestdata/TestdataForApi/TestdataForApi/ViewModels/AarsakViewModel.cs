using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestdataForApi.ViewModels
{
    public class AarsakViewModel
    {
        public int? Id { get; set; }

        public string Tittel { get; set; }

        public bool Standard { get; set; }

        public string Standardtekst { get; set; }
    }
}
