using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutotestdataSwagger.Pages
{
    public class Vilkaar
    {
        public string vilkaarId { get; set; }
        public string plassering { get; set; }
    }

    public class RootObject
    {
        public string tittel { get; set; }
        public List<Vilkaar> vilkaar { get; set; }
    }
}
